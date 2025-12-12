// src/data/authService.js

const USERS_KEY = "ok_users";
const CURRENT_USER_KEY = "ok_current_user";
const COLLAB_REQUESTS_KEY = "ok_collab_requests";

// ---------- HELPERS USUARIOS ----------
function getStoredUsers() {
  const raw = localStorage.getItem(USERS_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveUsers(list) {
  localStorage.setItem(USERS_KEY, JSON.stringify(list));
}

function setCurrentUser(user) {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

export function getCurrentUser() {
  const raw = localStorage.getItem(CURRENT_USER_KEY);
  return raw ? JSON.parse(raw) : null;
}

export function logoutUser() {
  localStorage.removeItem(CURRENT_USER_KEY);
}

// edad mínima configurable
export const MIN_AGE = 13;

export function calculateAge(dateStr) {
  const dob = new Date(dateStr);
  if (Number.isNaN(dob.getTime())) return null;

  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  return age;
}

// ---------- HELPERS COLLAB REQUESTS ----------
function getStoredCollabRequests() {
  const raw = localStorage.getItem(COLLAB_REQUESTS_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveCollabRequests(list) {
  localStorage.setItem(COLLAB_REQUESTS_KEY, JSON.stringify(list));
}

export function getCollabRequests() {
  return getStoredCollabRequests();
}

export function getCurrentUserCollabRequest() {
  const current = getCurrentUser();
  if (!current) return null;

  const all = getStoredCollabRequests();
  const own = all.filter((r) => r.userId === current.id);
  if (!own.length) return null;

  own.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return own[0];
}

// ---------- SEED ADMIN POR DEFECTO ----------
function seedAdminUser() {
  const users = getStoredUsers();
  const hasAdmin = users.some((u) => u.role === "admin");
  if (hasAdmin) return;

  const adminUser = {
    id: Date.now(),
    fullName: "Admin Otaku",
    nickname: "admin",
    birthDate: "1990-01-01",
    email: "admin@otakukawaii.dev",
    password: "admin123", // ⚠️ mock local
    role: "admin",
    avatarIndex: 1,
    readTomos: [],
    collabStatus: "none",
    createdAt: new Date().toISOString(),
  };

  users.push(adminUser);
  saveUsers(users);
}

seedAdminUser();

// ---------- REGISTRO ----------
export function registerUser({
  fullName,
  nickname,
  birthDate,
  email,
  password,
}) {
  const users = getStoredUsers();

  if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
    throw new Error("Ya existe un usuario con ese correo.");
  }
  if (users.some((u) => u.nickname.toLowerCase() === nickname.toLowerCase())) {
    throw new Error("Ese nickname ya está en uso.");
  }

  const newUser = {
    id: Date.now(),
    fullName,
    nickname,
    birthDate,
    email,
    password, // ⚠️ en producción se guardaría hasheado
    role: "user",
    avatarIndex: 1,
    readTomos: [],
    collabStatus: "none",
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  saveUsers(users);
  setCurrentUser(newUser);

  return newUser;
}

// ---------- LOGIN ----------
export function loginUser({ email, password }) {
  const users = getStoredUsers();

  const user = users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase()
  );

  if (!user) {
    throw new Error("No existe un usuario con ese correo.");
  }

  if (user.password !== password) {
    throw new Error("Contraseña incorrecta.");
  }

  setCurrentUser(user);
  return user;
}

// ---------- UPDATE PERFIL (email, password, avatar, etc.) ----------
export function updateCurrentUser(updates) {
  const current = getCurrentUser();
  if (!current) {
    throw new Error("No hay usuario logueado.");
  }

  const users = getStoredUsers();
  const idx = users.findIndex((u) => u.id === current.id);
  if (idx === -1) {
    throw new Error("Usuario no encontrado en la base local.");
  }

  const updated = {
    ...current,
    ...updates,
  };

  users[idx] = updated;
  saveUsers(users);
  setCurrentUser(updated);

  return updated;
}

/**
 * Marca un tomo como leído para el usuario actual.
 * @param {string} tomoKey - clave única, por ejemplo "31-2" (mangaId-tomoId)
 */
export function addReadTomo(tomoKey) {
  const current = getCurrentUser();
  if (!current) return null;

  const currentList = Array.isArray(current.readTomos)
    ? current.readTomos
    : [];

  if (currentList.includes(tomoKey)) {
    return current;
  }

  const newList = [...currentList, tomoKey];

  const updated = {
    ...current,
    readTomos: newList,
  };

  // actualizar en la "tabla" de usuarios
  const users = getStoredUsers();
  const idx = users.findIndex((u) => u.id === current.id);
  if (idx !== -1) {
    users[idx] = updated;
    saveUsers(users);
  }

  setCurrentUser(updated);
  return updated;
}

// ---------- COLABORADORES ----------

export function createCollabRequest(message) {
  const current = getCurrentUser();
  if (!current) {
    throw new Error("Debes iniciar sesión para enviar una solicitud.");
  }

  const texto = message.trim();
  if (!texto) {
    throw new Error("La carta de presentación no puede estar vacía.");
  }

  const requests = getStoredCollabRequests();

  // Solo bloquea si ya hay una PENDIENTE
  const hasPending = requests.some(
    (r) => r.userId === current.id && r.status === "pending"
  );
  if (hasPending) {
    throw new Error("Ya tienes una solicitud pendiente de revisión.");
  }

  const newRequest = {
    id: Date.now(),
    userId: current.id,
    fullName: current.fullName,
    nickname: current.nickname,
    email: current.email,
    message: texto,
    status: "pending", // "pending" | "approved" | "rejected"
    createdAt: new Date().toISOString(),
    resolvedAt: null,
  };

  requests.push(newRequest);
  saveCollabRequests(requests);

  // Actualiza el usuario con estado de colaboración
  const users = getStoredUsers();
  const idx = users.findIndex((u) => u.id === current.id);
  if (idx !== -1) {
    const updatedUser = {
      ...users[idx],
      collabStatus: "pending",
    };
    users[idx] = updatedUser;
    saveUsers(users);
    setCurrentUser(updatedUser);
  }

  return newRequest;
}

/**
 * Actualiza el estado de una solicitud de colaborador.
 * Si se aprueba, el usuario pasa a rol "colab".
 */
export function updateCollabRequestStatus(requestId, status) {
  if (status !== "approved" && status !== "rejected") {
    throw new Error("Estado de solicitud no válido.");
  }

  const requests = getStoredCollabRequests();
  const idx = requests.findIndex((r) => r.id === requestId);
  if (idx === -1) {
    throw new Error("Solicitud no encontrada.");
  }

  const request = {
    ...requests[idx],
    status,
    resolvedAt: new Date().toISOString(),
  };

  requests[idx] = request;
  saveCollabRequests(requests);

  // Actualizar usuario asociado
  const users = getStoredUsers();
  const uIdx = users.findIndex((u) => u.id === request.userId);
  if (uIdx !== -1) {
    let updatedUser = { ...users[uIdx] };

    if (status === "approved" && updatedUser.role !== "admin") {
      updatedUser.role = "colab";
    }

    updatedUser.collabStatus = status;

    users[uIdx] = updatedUser;
    saveUsers(users);

    const current = getCurrentUser();
    if (current && current.id === updatedUser.id) {
      setCurrentUser(updatedUser);
    }
  }

  return request;
}
