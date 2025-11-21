// src/pages/MangaDetail.jsx
import "./MangaDetail.css";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { mangaService } from "../data/mangaservice";
import { useFavorites } from "../hooks/useFavorites";

// helper para armar el slug de la categoría (sin emojis)
function slugCategoria(nombre = "") {
  return nombre
    .replace(
      /[\p{Emoji_Presentation}\p{Emoji}\p{Extended_Pictographic}]/gu,
      ""
    ) // quitar emojis
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // quitar tildes
    .replace(/[^a-zA-Z0-9\s-]/g, "") // quitar símbolos raros
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-"); // espacios → guiones
}

function MangaDetail() {
  const { mangaId } = useParams();
  const numericId = Number(mangaId);

  const {
    data: manga,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["manga", numericId],
    queryFn: () => mangaService.getById(numericId),
    enabled: !Number.isNaN(numericId),
  });

  // ⭐ hook de favoritos
  const {
    favoritos,
    isFavorite,
    toggleFavorite,
    isLoading: favLoading,
  } = useFavorites();

  if (isLoading) {
    return (
      <div className="manga-detail loading">
        <p>Cargando manga... ✨</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="manga-detail error">
        <p>😿 Ocurrió un error al cargar el manga.</p>
        <Link to="/" className="back-link">
          ← Volver al listado
        </Link>
      </div>
    );
  }

  if (!manga) {
    return (
      <div className="manga-detail not-found">
        <p>💔 No pudimos encontrar este manga.</p>
        <Link to="/" className="back-link">
          ← Volver al listado
        </Link>
      </div>
    );
  }

  const categoriaSlug = manga.categoria
    ? slugCategoria(manga.categoria)
    : "";

  const esFavorito = isFavorite(manga.id);

  return (
    <div className="manga-detail">
      <h2>{manga.titulo}</h2>
      {manga.kanji && <h2 className="kanji">{manga.kanji}</h2>}

      <img src={manga.imagen} alt={manga.titulo} className="cover" />

      <p className="description">{manga.descripcion}</p>

      {/* ⭐ Botón de favoritos */}
      <button
        className={`fav-btn ${esFavorito ? "activo" : ""}`}
        onClick={() => toggleFavorite(manga.id)}
        disabled={favLoading}
      >
        {esFavorito ? "★ Quitar de favoritos" : "☆ Agregar a favoritos"}
      </button>

      {manga.tomos && manga.tomos.length > 0 && (
        <section className="tomos-section">
          <h3>Tomos disponibles</h3>

          <div className="tomos-grid">
            {manga.tomos.map((tomo) => (
              <Link
                key={tomo.id}
                to={`/manga/${manga.id}/tomo/${tomo.id}`}
                className="tomo-card"
              >
                <img
                  src={tomo.imagen}
                  alt={tomo.nombre}
                  className="tomo-img"
                />
                <span className="tomo-title">{tomo.nombre}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="back-buttons">
        {manga.categoria && categoriaSlug && (
          <Link
            to={`/categoria/${categoriaSlug}`}
            className="back-btn detail-btn"
          >
            ← Ir a {manga.categoria}
          </Link>
        )}

        <Link to="/" className="back-btn detail-btn">
          ← Volver al Home 🏠
        </Link>
      </div>
    </div>
  );
}

export default MangaDetail;
