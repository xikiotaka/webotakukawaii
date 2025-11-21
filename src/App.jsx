// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MangaDetail from "./pages/MangaDetail";
import MangaCategory from "./pages/MangaCategory";
import Tomo from "./pages/Tomo";
import "./App.css"; 

function App() {
  return (
    <div className="app-layout">
      <Header />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manga/:mangaId" element={<MangaDetail />} />
          <Route path="/categoria/:categoria" element={<MangaCategory />} />
          <Route path="/manga/:mangaId/tomo/:tomoId" element={<Tomo />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

