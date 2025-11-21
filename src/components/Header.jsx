// src/components/Header.jsx
import "./Header.css";
import logo from "../assets/logo_esp_jp.png";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { mangaService } from "../data/mangaservice";

function Header() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);
  const categorias = mangaService.getCategorias();

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const goToCategory = (categoria) => {
    const url = categoria
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

    navigate(`/categoria/${url}`);
    setOpenMenu(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-left" ref={menuRef}>
          <button
            className="manga-btn"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            MANGAS ▼
          </button>

          {/* Dropdown Menu */}
          {openMenu && (
            <div className="dropdown-menu">
              {categorias.map((cat) => (
                <button
                  key={cat}
                  className="dropdown-item"
                  onClick={() => goToCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="header-center">
          <Link to="/">
            <img src={logo} alt="OtakuKawaii logo" className="logo" />
          </Link>
        </div>

        <div className="header-right">
          <button className="login-btn">Log In</button>
          <button className="register-btn">Registro</button>
        </div>
      </header>

      <div className="header-bottom-space"></div>
    </>
  );
}

export default Header;
