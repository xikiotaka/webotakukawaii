import "./Header.css";
import logo from "../assets/logo_esp_jp.png";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header-left">
          <button className="manga-btn">MANGAS</button>
        </div>

        <div className="header-center">
          <img src={logo} alt="OtakuKawaii logo" className="logo" />
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
