import "./MangaCategory.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { mangaService } from "../data/mangaservice";
import { getCurrentUser, calculateAge } from "../data/authService";

// misma función de otros archivos (sin emojis, etc.)
function slugCategoria(nombre = "") {
  return nombre
    .replace(
      /[\p{Emoji_Presentation}\p{Emoji}\p{Extended_Pictographic}]/gu,
      ""
    )
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
}

// Para mostrar el título a partir del slug de la categoría
function formatearNombreCategoria(slug) {
  if (!slug) return "";
  return slug.charAt(0).toUpperCase() + slug.slice(1);
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

function MangaCategory() {
  const { categoria } = useParams();
  const navigate = useNavigate();

  const user = getCurrentUser();
  const allowedRestricted = canAccessRestricted(user);

  const categoriaSlug = slugCategoria(categoria || "");
  const isRestrictedCategory = RESTRICTED_CATEGORIES.has(categoriaSlug);

  const {
    data: mangas,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["mangasCategoria", categoriaSlug],
    queryFn: () => mangaService.getByCategoria(categoriaSlug),
    enabled: !!categoriaSlug,
  });

  // Si la categoría es restringida y no tiene acceso, se bloquea la vista
  if (isRestrictedCategory && !allowedRestricted) {
    return (
      <div className="categoria-page">
        <h1 className="categoria-title">Contenido restringido 🔒</h1>

        {!user ? (
          <>
            <p className="categoria-subtitle">
              Esta categoría es solo para usuarios registrados y mayores de{" "}
              {MIN_RESTRICTED_AGE}.
            </p>
            <Link to="/login" className="categoria-back-link">
              Iniciar sesión
            </Link>
            <Link to="/" className="categoria-back-link bottom">
              ← Volver al Home 🏠
            </Link>
          </>
        ) : (
          <>
            <p className="categoria-subtitle">
              Necesitás ser mayor de {MIN_RESTRICTED_AGE} para ver esta
              categoría.
            </p>
            <button className="categoria-back-link" onClick={() => navigate(-1)}>
              ← Volver
            </button>
            <Link to="/" className="categoria-back-link bottom">
              ← Volver al Home 🏠
            </Link>
          </>
        )}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="categoria-page">
        <p className="categoria-loading">
          Cargando mangas de esta categoría… ✨
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="categoria-page">
        <p className="categoria-error">
          😿 Ocurrió un error al cargar los mangas.
        </p>
        <Link to="/" className="categoria-back-link">
          ← Volver al inicio
        </Link>
      </div>
    );
  }

  const tituloCategoria = formatearNombreCategoria(categoria);
  const lista = mangas || [];

  return (
    <div className="categoria-page">
      <h1 className="categoria-title">
        Estás en mangas tipo: {tituloCategoria}
      </h1>

      {lista.length === 0 ? (
        <div className="categoria-empty">
          <p>No encontramos mangas para esta categoría.</p>
          <Link to="/" className="categoria-back-link">
            ← Volver al inicio
          </Link>
        </div>
      ) : (
        <>
          <p className="categoria-subtitle">
            {lista.length} manga{lista.length !== 1 && "s"} encontrados
          </p>

          <div className="categoria-grid">
            {lista.map((manga) => (
              <Link
                key={manga.id}
                to={`/manga/${manga.id}`}
                className="categoria-card"
              >
                <div className="categoria-card-image-wrapper">
                  <img
                    src={manga.imagen}
                    alt={manga.titulo}
                    className="categoria-card-image"
                  />
                </div>

                <div className="categoria-card-body">
                  <h3 className="categoria-card-title">{manga.titulo}</h3>
                  <p className="categoria-card-category">{manga.categoria}</p>
                </div>
              </Link>
            ))}
          </div>

          <Link to="/" className="categoria-back-link bottom">
            ← Volver al Home 🏠
          </Link>
        </>
      )}
    </div>
  );
}

export default MangaCategory;
