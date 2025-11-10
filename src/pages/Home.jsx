import mangas from "../data/mangas";
import "./Home.css";
import { useState } from "react";
import MangaDetail from "./MangaDetail";

function Home() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="home">
      <h2>¿Qué tenés ganas de leer?</h2>

      <div className="manga-list">
        {mangas.map((m) => (
          <div key={m.id} className="manga-card" onClick={() => setSelected(m)}>
            <img src={m.imagen} alt={m.titulo} />
            <h3>{m.titulo}</h3>
            <p>{m.categoria}</p>
          </div>
        ))}
      </div>

      {selected && <MangaDetail manga={selected} />}
    </div>
  );
}

export default Home;
