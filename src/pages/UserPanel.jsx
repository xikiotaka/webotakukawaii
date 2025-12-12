// src/pages/UserPanel.jsx
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { mangaService } from "../data/mangaservice";
import { useFavorites } from "../hooks/useFavorites";
import {
  getCurrentUser,
  updateCurrentUser,
  logoutUser,
  createCollabRequest,
  getCurrentUserCollabRequest,
} from "../data/authService";
import "./UserPanel.css";

const AVATAR_OPTIONS = [
  "/avatars/default-avatar-1.jpeg",
  "/avatars/default-avatar-2.jpeg",
  "/avatars/default-avatar-3.jpeg",
  "/avatars/default-avatar-4.jpeg",
  "/avatars/default-avatar-5.jpeg",
  "/avatars/default-avatar-6.jpeg",
  "/avatars/default-avatar-7.jpeg",
  "/avatars/default-avatar-8.jpeg",
  "/avatars/default-avatar-9.jpeg",
  "/avatars/default-avatar-10.jpeg",
  "/avatars/default-avatar-11.jpeg",
  "/avatars/default-avatar-12.jpeg",
  "/avatars/default-avatar-13.jpeg",
  "/avatars/default-avatar-14.jpeg",
  "/avatars/default-avatar-15.jpeg",
  "/avatars/default-avatar-16.jpeg",
  "/avatars/default-avatar-17.jpeg",
  "/avatars/default-avatar-18.jpeg",
  "/avatars/default-avatar-19.jpeg",
  "/avatars/default-avatar-20.jpeg",
  "/avatars/default-avatar-21.jpeg",
  "/avatars/default-avatar-22.jpeg",
  "/avatars/default-avatar-23.jpeg",
  "/avatars/default-avatar-24.jpeg",
];

// BADGE SEGÚN TOMOS LEÍDOS
function getBadgeForCount(count) {
  if (count <= 0) return { label: "Sin rango", suffix: "" };
  if (count <= 3) return { label: "Rango: 🌼 Otaku-chan", suffix: "-chan" };
  if (count <= 7) return { label: "Rango: 🌻 Otaku-kun", suffix: "-kun" };
  if (count <= 15) return { label: "Rango: 🌷 Otaku-san", suffix: "-san" };
  if (count <= 30) return { label: "Rango: 🌸 Otaku-sama", suffix: "-sama" };
  if (count <= 50) return { label: "Rango: 💮 Otaku-sensei", suffix: "-sensei" };
  return { label: "Rango: 🏵️ Otaku-hakase", suffix: "-hakase" };
}

export default function UserPanel() {
  const navigate = useNavigate();

  // Cargar usuario
  const [user, setUser] = useState(() => getCurrentUser());

  if (!user) {
    navigate("/login");
    return null;
  }

  // Datos editables
  const [email, setEmail] = useState(user.email ?? "");
  const [password, setPassword] = useState(user.password ?? "");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Favoritos por usuario
  const { favoritos = [] } = useFavorites();

  // Traer mangas para mapear favoritos
  const { data: mangas = [] } = useQuery({
    queryKey: ["mangas-all"],
    queryFn: () => mangaService.getAll(),
  });

  // TOMOS LEÍDOS desde el usuario
  const readTomosIds = Array.isArray(user.readTomos) ? user.readTomos : [];
  const readCount = readTomosIds.length;

  const isAdmin = user.role === "admin";
  const isColab = user.role === "colab";

  const roleLabel = isAdmin
    ? "Administrador"
    : isColab
    ? "Colaborador"
    : "Usuario";

  // Badge según progreso
  const badge = isAdmin
    ? { label: "Admin Otaku", suffix: "" }
    : getBadgeForCount(readCount);

  // 🩷 Favoritos filtrados correctamente
  const favoriteMangas = useMemo(() => {
    if (!Array.isArray(favoritos) || favoritos.length === 0) return [];
    return mangas.filter((m) => favoritos.includes(Number(m.id)));
  }, [favoritos, mangas]);

  // Avatar mostrado
  const avatarSrc = isAdmin
    ? "/avatars/admin.png"
    : AVATAR_OPTIONS[(user.avatarIndex ?? 1) - 1] || AVATAR_OPTIONS[0];

  // ------- ESTADO COLABORADOR -------
  const [collabRequest, setCollabRequest] = useState(() =>
    getCurrentUserCollabRequest()
  );
  const [collabText, setCollabText] = useState("");
  const [collabError, setCollabError] = useState("");
  const [collabSuccess, setCollabSuccess] = useState("");

  const collabStatus = collabRequest?.status || user.collabStatus || "none";

  const collabDisabled =
    collabStatus === "pending" || collabStatus === "approved";

  let collabButtonLabel = "Aplicá para ser colaborador";
  if (collabStatus === "pending") collabButtonLabel = "Solicitud enviada 💌";
  if (collabStatus === "approved") collabButtonLabel = "Ya sos colaborador 🎉";

  function handleSendCollab(e) {
    e.preventDefault();
    setCollabError("");
    setCollabSuccess("");

    try {
      const req = createCollabRequest(collabText);
      setCollabRequest(req);
      setCollabSuccess(
        "Tu solicitud fue enviada ✨ Un admin la revisará pronto."
      );
      setCollabText("");
    } catch (err) {
      setCollabError(err.message);
    }
  }

  // Cambiar avatar (solo usuarios / colab, no admin)
  function handleAvatarSelect(index) {
    if (isAdmin) return;
    try {
      const updated = updateCurrentUser({ avatarIndex: index });
      setUser(updated);
      setMessage("Avatar actualizado ✨");
      setErrorMsg("");
    } catch (err) {
      setErrorMsg(err.message);
    }
  }

  // Guardar email/contraseña
  function handleSaveCredentials(e) {
    e.preventDefault();
    setSaving(true);
    setMessage("");
    setErrorMsg("");

    try {
      const trimmedEmail = email.trim();
      if (!trimmedEmail) throw new Error("El correo no puede estar vacío.");
      if (!/^\S+@\S+\.\S+$/.test(trimmedEmail))
        throw new Error("Formato de correo no válido.");
      if (!password) throw new Error("La contraseña no puede estar vacía.");
      if (password.length < 6)
        throw new Error("La contraseña debe tener al menos 6 caracteres.");

      const updated = updateCurrentUser({ email: trimmedEmail, password });
      setUser(updated);
      setMessage("Datos actualizados correctamente 💾");
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setSaving(false);
    }
  }

  // Cerrar sesión
  function handleLogout() {
    logoutUser();
    navigate("/login");
  }

  return (
    <div className="user-panel">
      <div className="user-panel-grid">
        {/* --------- COLUMNA IZQUIERDA (tarjetas apiladas) --------- */}
        <div className="user-left-column">
          {/* ---------- TARJETA PRINCIPAL DE USUARIO ---------- */}
          <section className="user-card">
            <div className="user-avatar-wrapper">
              <img src={avatarSrc} alt="Avatar" className="user-avatar-main" />
            </div>

            <h2 className="user-name">{user.fullName}</h2>
            <p className="user-nickname">@{user.nickname}</p>

            <div className="user-badge">
              <span className="badge-label">{badge.label}</span>
              <span className="badge-count">
                {readCount} tomo{readCount === 1 ? "" : "s"} leídos
              </span>
            </div>

            <div className="user-meta">
              <p>
                <span className="label">Fecha de nacimiento:</span>{" "}
                {user.birthDate || "—"}
              </p>
              <p>
                <span className="label">Rol:</span> {roleLabel}
              </p>
            </div>

            {isAdmin && (
              <button
                className="admin-panel-btn"
                onClick={() => navigate("/admin")}
              >
                Administración de solicitudes y mangas 📚
              </button>
            )}

            {isColab && (
             <button
                className="colab-panel-btn"
                 onClick={() => navigate("/colab")}
              >
              Ir al panel de subida de mangas 📚
              </button>
           )}


            <button className="logout-btn" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </section>

          {/* ---------- TARJETA LORE (OCULTA PARA ADMIN) ---------- */}
          {!isAdmin && (
            <section className="user-lore-card">
              <div className="user-rank-lore">
                <h3 className="lore-title">El camino a ser leyenda</h3>
                <p className="lore-text">
                  En un mundo donde los tomos son puertas hacia otros universos,
                  cada página que lees fortalece tu espíritu otaku. El Reino de
                  Nipponia te observa… y registra tu progreso en el{" "}
                  <strong>Libro de los Tomos Sagrados</strong>. 📜✨
                </p>

                <p className="lore-text">
                  A medida que avanzas en tus aventuras lectoras, tu aura crece
                  y tu nombre comienza a resonar entre bibliotecas místicas y
                  tierras mágicas. Estos son los rangos que todo viajero debe
                  conquistar:
                </p>

                <ul className="lore-rank-list">
                  <li>
                    <strong>🌼 Otaku-chan</strong> — 1 a 3 tomos leídos
                  </li>
                  <li>
                    <strong>🌻 Otaku-kun</strong> — 3 a 7 tomos leídos
                  </li>
                  <li>
                    <strong>🌷 Otaku-san</strong> — 7 a 15 tomos leídos
                  </li>
                  <li>
                    <strong>🌸 Otaku-sama</strong> — 15 a 30 tomos leídos
                  </li>
                  <li>
                    <strong>💮 Otaku-sensei</strong> — 30 a 50 tomos leídos
                  </li>
                  <li>
                    <strong>🏵️ Otaku-hakase</strong> — Más de 50 tomos… ¡una
                    verdadera leyenda!
                  </li>
                </ul>

                <p className="lore-text">
                  Sigue leyendo, aventurero. Cada tomo registrado te acerca al
                  siguiente rango. ¡Tu destino en este universo otaku apenas
                  comienza! 🌟📖
                </p>
              </div>
            </section>
          )}

          {/* ---------- TARJETA: APLICAR A COLAB (NO ADMIN) ---------- */}
          {!isAdmin && (
            <section className="user-collab-card">
              <h3>¿Querés ser colaborador?</h3>
              <p className="section-help">
                Cuéntanos por qué te gustaría colaborar con OtakuKawaii: qué te
                apasiona, qué mangas amas y cómo te gustaría ayudar 💌
              </p>

              {collabStatus === "pending" && (
                <p className="collab-status collab-status--pending">
                  Tu solicitud está <strong>pendiente</strong> de revisión ✨
                </p>
              )}

              {collabStatus === "approved" && (
                <p className="collab-status collab-status--approved">
                  ¡Felicitaciones! Fuiste aprobado como{" "}
                  <strong>colaborador</strong> 🎉
                </p>
              )}

              {collabStatus === "rejected" && (
                <p className="collab-status collab-status--rejected">
                  Tu última solicitud fue rechazada 😢. Puedes mejorar tu carta y
                  volver a enviar otra en el futuro.
                </p>
              )}

              {collabError && (
                <p className="collab-feedback collab-feedback--error">
                  {collabError}
                </p>
              )}
              {collabSuccess && (
                <p className="collab-feedback collab-feedback--success">
                  {collabSuccess}
                </p>
              )}

              <textarea
                className="collab-textarea"
                placeholder="Escribe aquí tu carta de presentación..."
                value={collabText}
                onChange={(e) => setCollabText(e.target.value)}
                disabled={collabDisabled}
                rows={5}
              />

              <button
                type="button"
                className="collab-btn"
                onClick={handleSendCollab}
                disabled={collabDisabled}
              >
                {collabButtonLabel}
              </button>
            </section>
          )}
        </div>

        {/* ---------- COLUMNA DERECHA ---------- */}
        <section className="user-main-section">
          {/* AVATARES solo para usuario / colab */}
          {!isAdmin && (
            <div className="user-section-box">
              <h3>Elige tu avatar</h3>
              <p className="section-help">Selecciona una imagen kawaii 💕</p>

              <div className="avatar-grid">
                {AVATAR_OPTIONS.map((src, idx) => {
                  const index = idx + 1;
                  return (
                    <button
                      key={src}
                      type="button"
                      className={`avatar-option ${
                        user.avatarIndex === index ? "avatar-option--active" : ""
                      }`}
                      onClick={() => handleAvatarSelect(index)}
                    >
                      <img src={src} alt={`Avatar ${index}`} />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* DATOS EDITABLES */}
          <div className="user-section-box">
            <h3>Datos de tu cuenta</h3>
            <p className="section-help">
              Solo puedes cambiar correo y contraseña.
            </p>

            {errorMsg && <p className="user-error">{errorMsg}</p>}
            {message && <p className="user-success">{message}</p>}

            <form className="user-form" onSubmit={handleSaveCredentials}>
              <label>
                Nombre completo
                <input type="text" value={user.fullName} disabled />
              </label>

              <label>
                Nickname
                <input type="text" value={user.nickname} disabled />
              </label>

              <label>
                Correo electrónico
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label>
                Contraseña
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>

              <button className="user-save-btn" disabled={saving}>
                {saving ? "Guardando..." : "Guardar cambios"}
              </button>
            </form>
          </div>

          {/* FAVORITOS */}
          <div className="user-section-box">
            <h3>Mis mangas favoritos</h3>
            <p className="section-help">
              Los que marcaste como favoritos 💖
            </p>

            {favoriteMangas.length === 0 ? (
              <p className="user-empty">No tienes favoritos aún 🥺</p>
            ) : (
              <div className="favorites-grid">
                {favoriteMangas.map((manga) => (
                  <div key={manga.id} className="favorite-card">
                    <img
                      src={manga.imagen}
                      alt={manga.titulo}
                      className="favorite-cover"
                    />
                    <p className="favorite-title">{manga.titulo}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
