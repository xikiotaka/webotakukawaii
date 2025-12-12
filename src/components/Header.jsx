import "./Header.css";
import logo from "../assets/logo_esp_jp.png";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { mangaService } from "../data/mangaservice";
import { getCurrentUser, calculateAge } from "../data/authService";

// helper: slug categoría
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

function Header() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  const [user, setUser] = useState(() => getCurrentUser());

  // Banner de advertencia
  const [warnText, setWarnText] = useState("");
  const warnTimerRef = useRef(null);

  const categorias = mangaService.getCategorias();

  // refrescar sesión si cambia el localStorage
  useEffect(() => {
    const interval = setInterval(() => {
      setUser(getCurrentUser());
    }, 300);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function showWarning(text) {
    setWarnText(text);
    if (warnTimerRef.current) clearTimeout(warnTimerRef.current);
    warnTimerRef.current = setTimeout(() => setWarnText(""), 3800);
  }

  useEffect(() => {
    return () => {
      if (warnTimerRef.current) clearTimeout(warnTimerRef.current);
    };
  }, []);

  const goToCategory = (categoriaTexto) => {
    const slug = slugCategoria(categoriaTexto);
    const isRestricted = RESTRICTED_CATEGORIES.has(slug);

    if (isRestricted) {
      const allowed = canAccessRestricted(user);

      if (!allowed) {
        // no navegamos
        setOpenMenu(false);

        if (!user) {
          showWarning(
            `🔒 Esta categoría es +${MIN_RESTRICTED_AGE}. Iniciá sesión para verla.`
          );
        } else {
          showWarning(
            `🔒 Esta categoría es +${MIN_RESTRICTED_AGE}. Tu cuenta no cumple la edad requerida.`
          );
        }

        return;
      }
    }

    // ✅ si no es restringida, o si tiene acceso, navega normal
    navigate(`/categoria/${slug}`);
    setOpenMenu(false);
  };

  // --------- AVATAR MINI DEL HEADER ---------
  let avatarSrc = null;
  if (user) {
    if (user.role === "admin") {
      avatarSrc = "/avatars/admin.png";
    } else {
      const rawIndex = Number(user.avatarIndex);
      const safeIndex = rawIndex >= 1 && rawIndex <= 8 ? rawIndex : 1;
      avatarSrc = `/avatars/default-avatar-${safeIndex}.jpeg`;
    }
  }

  return (
    <>
      {/* Banner / warning */}
      {warnText && (
        <div className="header-warning" role="alert">
          <span className="header-warning-icon">⚠️</span>
          <span className="header-warning-text">{warnText}</span>
          <button
            type="button"
            className="header-warning-close"
            onClick={() => setWarnText("")}
            aria-label="Cerrar advertencia"
          >
            ✕
          </button>
        </div>
      )}

      <header className="header">
        {/* IZQUIERDA: MENÚ MANGAS */}
        <div className="header-left" ref={menuRef}>
          <button
            className="manga-btn"
            type="button"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            MANGAS ▼
          </button>

          {openMenu && (
            <div className="dropdown-menu">
              {categorias.map((cat) => {
                const slug = slugCategoria(cat);
                const isRestricted = RESTRICTED_CATEGORIES.has(slug);
                const allowed = isRestricted ? canAccessRestricted(user) : true;

                return (
                  <button
                    key={cat}
                    className={`dropdown-item ${
                      isRestricted ? "dropdown-item--restricted" : ""
                    } ${isRestricted && !allowed ? "dropdown-item--locked" : ""}`}
                    type="button"
                    onClick={() => goToCategory(cat)}
                    title={
                      isRestricted
                        ? `Requiere login y +${MIN_RESTRICTED_AGE}`
                        : ""
                    }
                  >
                    {cat}
                    {isRestricted && <span className="dropdown-tag">+16</span>}
                    {isRestricted && !allowed && (
                      <span className="dropdown-lock">🔒</span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* CENTRO: LOGO */}
        <div className="header-center">
          <Link to="/">
            <img src={logo} alt="OtakuKawaii logo" className="logo" />
          </Link>
        </div>

        {/* DERECHA: AUTH / AVATAR */}
        <div className="header-right">
          {!user && (
            <>
              <Link to="/login" className="login-btn">
                Log In
              </Link>
              <Link to="/register" className="register-btn">
                Registro
              </Link>
            </>
          )}

          {user && avatarSrc && (
            <button
              type="button"
              className="header-avatar-button"
              onClick={() => navigate("/user")}
            >
              <img
                src={avatarSrc}
                alt="avatar mini"
                className="header-avatar-mini"
              />
            </button>
          )}
        </div>
      </header>

      <div className="header-bottom-space"></div>
    </>
  );
}

export default Header;
