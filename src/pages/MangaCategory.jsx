// src/pages/MangaCategory.jsx
import "./MangaCategory.css";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { mangaService } from "../data/mangaservice";

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

function MangaCategory() {
  const { categoria } = useParams();

  const {
    data: mangas,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["mangasCategoria", categoria],
    queryFn: () =>
      mangaService.getByCategoria(slugCategoria(categoria || "")),
    enabled: !!categoria,
  });

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
                  <p className="categoria-card-category">
                    {manga.categoria}
                  </p>
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
