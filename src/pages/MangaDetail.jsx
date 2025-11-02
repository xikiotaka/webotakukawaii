import { useState } from "react";
import "./MangaDetail.css";
import botonDer from "../assets/boton-cambio-pagina-der.png";
import botonIzq from "../assets/boton-cambio-pagina-izq.png";

function MangaDetail({ manga }) {
  const [showReader, setShowReader] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);

  if (!manga) return null;

  const paginas = manga.paginas || [];

  const handleNext = () => {
    if (pageIndex < paginas.length - 1) setPageIndex(pageIndex + 1);
  };

  const handlePrev = () => {
    if (pageIndex > 0) setPageIndex(pageIndex - 1);
  };

  return (
    <div className="manga-detail">
      {!showReader ? (
        <>
          <h2>{manga.titulo}</h2>
          <img src={manga.imagen} alt={manga.titulo} />
          <p>
            <strong>Descripción:</strong> {manga.descripcion}
          </p>
          {paginas.length > 0 && (
            <button onClick={() => setShowReader(true)}>📖 Leer Manga</button>
          )}
        </>
      ) : (
        <>
          <h2>{manga.titulo}</h2>

          {/* Contenedor externo */}
          <div className="manga-reader-wrapper">
            <div className="manga-reader">
              {pageIndex > 0 && (
                <img
                  src={botonIzq}
                  alt="Página anterior"
                  className="nav-button left"
                  onClick={handlePrev}
                />
              )}

              <img
                src={paginas[pageIndex]}
                alt={`Página ${pageIndex + 1}`}
                className="manga-page"
              />

              {pageIndex < paginas.length - 1 && (
                <img
                  src={botonDer}
                  alt="Página siguiente"
                  className="nav-button right"
                  onClick={handleNext}
                />
              )}
            </div>
          </div>

          <p className="page-indicator">
            Página {pageIndex + 1} de {paginas.length}
          </p>

          <button onClick={() => setShowReader(false)}>↩️ Volver</button>
        </>
      )}
    </div>
  );
}

export default MangaDetail;
