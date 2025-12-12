// src/data/mangaservice.js
import { mangasDB, getNextMangaId } from "./mangaDB";

// Simula delay de API
const delay = (ms = 400) => new Promise((res) => setTimeout(res, ms));

// Clave única para localStorage
const STORAGE_KEY = "mangasDB";

// Leer mangas desde localStorage o desde la DB base
const getStoredMangas = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [...mangasDB];
};

// Guardar mangas en localStorage
const saveMangas = (list) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
};

// Helper para normalizar categorías (quita emojis, tildes, etc.)
function slugCategoria(nombre = "") {
  return nombre
    .replace(
      /[\p{Emoji_Presentation}\p{Emoji}\p{Extended_Pictographic}]/gu,
      ""
    ) // quitar emojis
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // quitar tildes
    .replace(/[^a-zA-Z0-9\s-]/g, "") // símbolos raros
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-"); // espacios → guiones
}

// Orden deseado (por slug)
const CATEGORIA_ORDER = [
  "kodomo",
  "mecha",
  "isekai",
  "shonen",
  "shonen-ai",
  "seinen",
  "majou-shoujo",
  "shojo",
  "yuri",
  "josei",
];

export const mangaService = {
  // GET: todos los mangas
  async getAll() {
    await delay();
    return getStoredMangas();
  },

  // GET: por id
  async getById(id) {
    await delay(200);
    const mangas = getStoredMangas();
    const manga = mangas.find((m) => m.id === Number(id));
    if (!manga) throw new Error("Manga no encontrado");
    return manga;
  },

  // GET: por categoría (recibe slug: "shonen", "isekai", etc.)
  async getByCategoria(categoriaSlug) {
    await delay(200);
    const mangas = getStoredMangas();
    if (!categoriaSlug) throw new Error("Categoría requerida");

    const criterio = categoriaSlug.toLowerCase();

    return mangas.filter(
      (m) => m.categoria && slugCategoria(m.categoria) === criterio
    );
  },

  // Búsqueda libre por título o categoría
  async search(query) {
    await delay(200);
    const mangas = getStoredMangas();
    if (!query) return mangas;

    const q = query.toLowerCase();
    return mangas.filter(
      (m) =>
        m.titulo.toLowerCase().includes(q) ||
        (m.categoria && m.categoria.toLowerCase().includes(q))
    );
  },

  // Categorías para el menú del header (texto con emojis, orden personalizado)
  getCategorias() {
    const mangas = getStoredMangas();
    const mapaCategorias = new Map(); // slug -> texto con emojis

    mangas.forEach((m) => {
      if (m.categoria) {
        const slug = slugCategoria(m.categoria);
        if (!mapaCategorias.has(slug)) {
          mapaCategorias.set(slug, m.categoria);
        }
      }
    });

    const slugsOrdenados = Array.from(mapaCategorias.keys()).sort((a, b) => {
      const ia = CATEGORIA_ORDER.indexOf(a);
      const ib = CATEGORIA_ORDER.indexOf(b);

      // Si no están en la lista, van al final ordenadas alfabéticamente
      if (ia === -1 && ib === -1) {
        return a.localeCompare(b, "es", { sensitivity: "base" });
      }
      if (ia === -1) return 1;
      if (ib === -1) return -1;
      return ia - ib;
    });

    // devolvemos el texto original con emojis según ese orden
    return slugsOrdenados.map((slug) => mapaCategorias.get(slug));
  },

  // POST: crear manga
  async create(mangaData) {
    await delay(300);
    const mangas = getStoredMangas();

    const nuevo = {
      ...mangaData,
      id: getNextMangaId(),
      paginas: mangaData.paginas || [],
    };

    mangas.push(nuevo);
    saveMangas(mangas);
    return nuevo;
  },

  // PUT: actualizar manga
  async update(id, mangaData) {
    await delay(300);
    const mangas = getStoredMangas();
    const index = mangas.findIndex((m) => m.id === Number(id));
    if (index === -1) throw new Error("Manga no encontrado");

    mangas[index] = { ...mangas[index], ...mangaData };
    saveMangas(mangas);
    return mangas[index];
  },

  // DELETE: eliminar manga
  async remove(id) {
    await delay(250);
    const mangas = getStoredMangas();
    const filtrados = mangas.filter((m) => m.id !== Number(id));
    if (filtrados.length === mangas.length)
      throw new Error("Manga no encontrado");
    saveMangas(filtrados);
    return { success: true };
  },
};

export { slugCategoria };
