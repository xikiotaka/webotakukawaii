import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      {/* Botón kawaii para ir arriba */}
      <button className="go-top-btn" onClick={scrollToTop}>
        <img src="/upbuttom.png" alt="Ir arriba" />
      </button>

      <p>© 2025 OtakuKawaii. </p>
    </footer>
  );
}

export default Footer;
