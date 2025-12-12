import "./Home.css";
import { useQuery } from "@tanstack/react-query";
import { mangaService } from "../data/mangaservice";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, calculateAge } from "../data/authService";

// 👉 limpia emojis, símbolos y espacios raros
function slugCategoria(nombre = "") {
  return nombre
    .replace(/[\p{Emoji_Presentation}\p{Emoji}\p{Extended_Pictographic}]/gu, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
}

// --- Restricciones ---
const RESTRICTED_CATEGORIES = new Set([
  "shonen-ai",
  "seinen",
  "mecha",
  "yuri",
  "josei",
]);
const MIN_RESTRICTED_AGE = 16;

function canAccessRestricted(user) {
  if (!user) return false;
  if (user.role === "admin" || user.role === "colab") return true;

  const age = user.birthDate ? calculateAge(user.birthDate) : null;
  if (age === null) return false;

  return age >= MIN_RESTRICTED_AGE;
}

function Home() {
  const navigate = useNavigate();

  const user = getCurrentUser();
  const allowedRestricted = canAccessRestricted(user);

  const {
    data: mangas = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["mangas"],
    queryFn: () => mangaService.getAll(),
  });

  if (isLoading) return <p className="home-loading">Cargando mangas... ✨</p>;
  if (isError)
    return <p className="home-error">Hubo un problema al cargar los mangas 😿</p>;

  // Filtrar mangas restringidos si no cumple
  const mangasVisibles = mangas.filter((m) => {
    const catSlug = m.categoria ? slugCategoria(m.categoria) : "";
    const isRestricted = RESTRICTED_CATEGORIES.has(catSlug);
    if (!isRestricted) return true;
    return allowedRestricted;
  });

  // Agrupar mangas por categoría
  const categoriasMap = mangasVisibles.reduce((acc, manga) => {
    const cat = manga.categoria || "Otros";
    const slug = slugCategoria(cat);
    if (!acc[slug]) {
      acc[slug] = {
        nombre: cat,
        slug,
        mangas: [],
      };
    }
    acc[slug].mangas.push(manga);
    return acc;
  }, {});

  const categorias = Object.values(categoriasMap);

  return (
    <div className="home">
      <h2 className="home-title">¿Qué tenés ganas de leer?</h2>

      <div className="home-sections">
        {categorias.map((cat) => (
          <section key={cat.slug} className="categoria-section">
            <div className="categoria-header">
              <h3 className="categoria-nombre">{cat.nombre}</h3>
              <button
                className="categoria-ver-mas"
                onClick={() => navigate(`/categoria/${cat.slug}`)}
              >
                Ver todo →
              </button>
            </div>

            <div className="manga-row">
              {cat.mangas.map((m) => (
                <div
                  key={m.id}
                  className="manga-card"
                  onClick={() => navigate(`/manga/${m.id}`)}
                >
                  <img src={m.imagen} alt={m.titulo} />
                  <div className="manga-card-info">
                    <h4>{m.titulo}</h4>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Home;
