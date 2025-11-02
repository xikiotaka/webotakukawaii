import "./Header.css";
import logo from "../assets/logo_esp_jp.png";

function Header() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="OtakuKawaii logo" className="logo" />
        <button className="manga-btn">MANGAS</button>
      </header>
      <div className="header-bottom-space"></div>
    </>
  );
}

export default Header;
