// src/pages/Tomo.jsx
import "./Tomo.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { mangaService } from "../data/mangaservice";
import botonDer from "../assets/boton-cambio-pagina-der.png";
import botonIzq from "../assets/boton-cambio-pagina-izq.png";

function Tomo() {
  const { mangaId, tomoId } = useParams();
  const navigate = useNavigate();

  const {
    data: manga,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["manga", mangaId],
    queryFn: () => mangaService.getById(Number(mangaId)),
  });

  const [paginaActual, setPaginaActual] = useState(0);

  const tomo = useMemo(() => {
    const lista = manga?.tomos || [];
    return lista.find((t) => String(t.id) === String(tomoId));
  }, [manga, tomoId]);

  if (isLoading) return <div className="tomo-page">Cargando tomo… ✨</div>;

  if (isError || !manga || !tomo) {
    return (
      <div className="tomo-page not-found">
        <p>💔 No encontramos este tomo…</p>
        <button className="back-home" onClick={() => navigate(-1)}>
          Volver
        </button>
      </div>
    );
  }

  const paginas = tomo.paginas || [];

  const cambiarPagina = (dir) => {
    if (dir === "prev" && paginaActual > 0) {
      setPaginaActual((p) => p - 1);
    }
    if (dir === "next" && paginaActual < paginas.length - 1) {
      setPaginaActual((p) => p + 1);
    }
  };

  const categoriaURL = (manga.categoria || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  return (
    <div className="tomo-page">
      <div className="tomo-contenido">
        <div className="tomo-header">
          <h1 className="tomo-title">
            {manga.titulo} — {tomo.nombre || `Tomo ${tomo.id}`}
          </h1>
        </div>

        <div className="tomo-viewer">
          {paginas.length > 0 ? (
            <>
              <button
                className="nav-btn left"
                onClick={() => cambiarPagina("prev")}
                disabled={paginaActual === 0}
                aria-label="Página anterior"
              >
                <img src={botonDer} alt="Página anterior" className="boton-cambio" />
              </button>

              {/* Página actual */}
              <img
                key={paginaActual}
                src={paginas[paginaActual]}
                alt={`Página ${paginaActual + 1}`}
                className="tomo-image"
              />

              <button
                className="nav-btn right"
                onClick={() => cambiarPagina("next")}
                disabled={paginaActual === paginas.length - 1}
                aria-label="Página siguiente"
              >
                <img src={botonIzq} alt="Página siguiente" className="boton-cambio" />
              </button>
            </>
          ) : (
            <p className="sin-paginas">
              📖 Este tomo aún no tiene páginas disponibles.
            </p>
          )}
        </div>

        <div className="tomo-footer">
          <p>
            Página {paginas.length ? paginaActual + 1 : 0} de {paginas.length}
          </p>

          <div className="botones-volver">
            <button className="boton-volver-categoria" onClick={() => navigate(-1)}>
              ← Volver al Manga 📖
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tomo;
