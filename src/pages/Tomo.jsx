import "./Tomo.css";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { mangaService } from "../data/mangaservice";
import { getCurrentUser, addReadTomo, calculateAge } from "../data/authService";
import botonDer from "../assets/boton-cambio-pagina-der.png";
import botonIzq from "../assets/boton-cambio-pagina-izq.png";

// helper: slug categoría
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
  const [isRead, setIsRead] = useState(false);

  const tomo = useMemo(() => {
    const lista = manga?.tomos || [];
    return lista.find((t) => String(t.id) === String(tomoId));
  }, [manga, tomoId]);

  // --- Gate de acceso por categoría ---
  const user = getCurrentUser();
  const allowedRestricted = canAccessRestricted(user);
  const catSlug = manga?.categoria ? slugCategoria(manga.categoria) : "";
  const isRestricted = RESTRICTED_CATEGORIES.has(catSlug);


  useEffect(() => {
    if (!manga || !tomo) return;
    const u = getCurrentUser();
    if (!u) return;

    const key = `${manga.id}-${tomo.id}`;
    const readTomos = Array.isArray(u.readTomos) ? u.readTomos : [];
    setIsRead(readTomos.includes(key));
  }, [manga, tomo]);

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

  if (isRestricted && !allowedRestricted) {
    return (
      <div className="tomo-page not-found">
        <p>🔒 Contenido restringido.</p>

        {!user ? (
          <>
            <p>Tenés que iniciar sesión y ser mayor de {MIN_RESTRICTED_AGE}.</p>
            <Link className="back-home" to="/login">
              Iniciar sesión
            </Link>
          </>
        ) : (
          <p>Necesitás ser mayor de {MIN_RESTRICTED_AGE} para leer este tomo.</p>
        )}

        <button className="back-home" onClick={() => navigate(-1)}>
          Volver
        </button>
      </div>
    );
  }

  const paginas = tomo.paginas || [];

  const cambiarPagina = (dir) => {
    if (dir === "prev" && paginaActual > 0) setPaginaActual((p) => p - 1);
    if (dir === "next" && paginaActual < paginas.length - 1)
      setPaginaActual((p) => p + 1);
  };

  const handleMarkAsRead = () => {
    const u = getCurrentUser();
    if (!u) {
      navigate("/login");
      return;
    }

    const key = `${manga.id}-${tomo.id}`;
    addReadTomo(key);
    setIsRead(true);
  };

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
            <p className="sin-paginas">📖 Este tomo aún no tiene páginas disponibles.</p>
          )}
        </div>

        <div className="tomo-footer">
          <p>
            Página {paginas.length ? paginaActual + 1 : 0} de {paginas.length}
          </p>

          {paginas.length > 0 && paginaActual === paginas.length - 1 && (
            <button
              className={`tomo-read-btn ${isRead ? "tomo-read-btn--done" : ""}`}
              onClick={handleMarkAsRead}
              disabled={isRead}
            >
              {isRead ? "✓ Tomo registrado como leído" : "Finalizaste el tomo ☺"}
            </button>
          )}

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
