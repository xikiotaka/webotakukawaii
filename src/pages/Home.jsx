// src/pages/Home.jsx
import "./Home.css";
import { useQuery } from "@tanstack/react-query";
import { mangaService } from "../data/mangaservice";
import { useNavigate } from "react-router-dom";

// 👉 misma función que en MangaDetail: limpia emojis, símbolos y espacios raros
function slugCategoria(nombre = "") {
  return nombre
    .replace(/[\p{Emoji_Presentation}\p{Emoji}\p{Extended_Pictographic}]/gu, "") // quitar emojis
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // quitar tildes
    .replace(/[^a-zA-Z0-9\s-]/g, "") // quitar símbolos
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-"); // espacios → guiones
}

function Home() {
  const navigate = useNavigate();

  const {
    data: mangas = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["mangas"],
    queryFn: () => mangaService.getAll(),
  });

  if (isLoading)
    return <p className="home-loading">Cargando mangas... ✨</p>;
  if (isError)
    return (
      <p className="home-error">
        Hubo un problema al cargar los mangas 😿
      </p>
    );

  // Agrupar mangas por categoría
  const categoriasMap = mangas.reduce((acc, manga) => {
    const cat = manga.categoria || "Otros";
    const key = cat.toLowerCase();
    if (!acc[key]) {
      acc[key] = {
        nombre: cat,
        slug: slugCategoria(cat),
        mangas: [],
      };
    }
    acc[key].mangas.push(manga);
    return acc;
  }, {});

  const categorias = Object.values(categoriasMap);

  return (
    <div className="home">
      <h2 className="home-title">¿Qué tenés ganas de leer?</h2>

      <div className="home-sections">
        {categorias.map((cat) => (
          <section key={cat.slug} className="categoria-section">
            <div className="categoria-header">
              <h3 className="categoria-nombre">{cat.nombre}</h3>
              <button
                className="categoria-ver-mas"
                onClick={() => navigate(`/categoria/${cat.slug}`)}
              >
                Ver todo →
              </button>
            </div>

            <div className="manga-row">
              {cat.mangas.map((m) => (
                <div
                  key={m.id}
                  className="manga-card"
                  onClick={() => navigate(`/manga/${m.id}`)}
                >
                  <img src={m.imagen} alt={m.titulo} />
                  <div className="manga-card-info">
                    <h4>{m.titulo}</h4>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Home;
