import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../data/authService";
import { useCreateManga } from "../hooks/useMangaAdmin";
import "./ColabPanel.css";

export default function ColabPanel() {
  const navigate = useNavigate();
  const createManga = useCreateManga();

  // Usuario actual (solo colab puede entrar)
  const user = getCurrentUser();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    if (user.role !== "colab") {
      // si no es colaborador lo mandamos al home o a su panel
      navigate("/");
    }
  }, [user, navigate]);

  // --- estado del formulario  ---
  const [titulo, setTitulo] = useState("");
  const [kanji, setKanji] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [portada, setPortada] = useState("");

  const [tomos, setTomos] = useState([
    { nombre: "Tomo 1", imagen: "", paginas: [""] },
  ]);

  const [formError, setFormError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // --- helpers tomos/páginas ---
  function handleTomoFieldChange(tomoIndex, field, value) {
    setTomos((prev) =>
      prev.map((t, i) => (i === tomoIndex ? { ...t, [field]: value } : t))
    );
  }

  function handleTomoAdd() {
    setTomos((prev) => [
      ...prev,
      {
        nombre: `Tomo ${prev.length + 1}`,
        imagen: "",
        paginas: [""],
      },
    ]);
  }

  function handleTomoRemove(tomoIndex) {
    setTomos((prev) => prev.filter((_, i) => i !== tomoIndex));
  }

  function handlePaginaChange(tomoIndex, paginaIndex, value) {
    setTomos((prev) =>
      prev.map((tomo, i) => {
        if (i !== tomoIndex) return tomo;
        const paginas = [...(tomo.paginas || [])];
        paginas[paginaIndex] = value;
        return { ...tomo, paginas };
      })
    );
  }

  function handlePaginaAdd(tomoIndex) {
    setTomos((prev) =>
      prev.map((tomo, i) =>
        i === tomoIndex
          ? { ...tomo, paginas: [...(tomo.paginas || []), ""] }
          : tomo
      )
    );
  }

  function handlePaginaRemove(tomoIndex, paginaIndex) {
    setTomos((prev) =>
      prev.map((tomo, i) => {
        if (i !== tomoIndex) return tomo;
        const paginas = (tomo.paginas || []).filter(
          (_, idx) => idx !== paginaIndex
        );
        return { ...tomo, paginas };
      })
    );
  }

  function resetForm() {
    setTitulo("");
    setKanji("");
    setCategoria("");
    setDescripcion("");
    setPortada("");
    setTomos([{ nombre: "Tomo 1", imagen: "", paginas: [""] }]);
    setFormError("");
  }

  // --- submit SOLO crear (no editar) ---
  function handleSubmit(e) {
    e.preventDefault();
    setFormError("");
    setSuccessMsg("");

    if (!titulo || !kanji || !categoria || !descripcion) {
      setFormError("Título, kanjis, categoría y descripción son obligatorios.");
      return;
    }

    if (!tomos.length) {
      setFormError("Debes agregar al menos un tomo.");
      return;
    }

    const tomosLimpios = tomos
      .map((tomo, index) => {
        const paginasLimpias = (tomo.paginas || [])
          .map((p) => p.trim())
          .filter(Boolean);

        if (!paginasLimpias.length) return null;

        const imagenTomo = tomo.imagen?.trim() || paginasLimpias[0];

        return {
          id: index + 1,
          nombre: tomo.nombre?.trim() || `Tomo ${index + 1}`,
          imagen: imagenTomo,
          paginas: paginasLimpias,
        };
      })
      .filter(Boolean);

    if (!tomosLimpios.length) {
      setFormError(
        "Cada tomo debe tener al menos una página con URL válida."
      );
      return;
    }

    const portadaFinal =
      portada.trim() || tomosLimpios[0]?.imagen || tomosLimpios[0]?.paginas[0];

    const payload = {
      titulo,
      kanji: kanji.trim() || undefined,
      categoria,
      descripcion,
      imagen: portadaFinal,
      tomos: tomosLimpios,
    };

    createManga.mutate(payload, {
      onSuccess: () => {
        resetForm();
        setSuccessMsg("Tu manga fue enviado correctamente ✨");
      },
      onError: (err) => {
        setFormError(err?.message || "Error al crear el manga.");
      },
    });
  }

  if (!user || user.role !== "colab") {
    // mientras se redirige
    return null;
  }

  return (
    <div className="colab-panel">
      <h1>Crear nuevo manga</h1>
      <p className="colab-sub">
        Como colaborador podés subir nuevos mangas para que brillen en
        OtakuKawaii ✨
      </p>

      <form className="colab-form" onSubmit={handleSubmit}>
        <label>
          Título
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </label>

        <label>
          Kanji
          <input
            type="text"
            value={kanji}
            onChange={(e) => setKanji(e.target.value)}
            placeholder="ドラゴンボール"
            required
          />
        </label>

        <label>
          Categoría
          <input
            type="text"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            placeholder="Ej: ⚔️ Shonen ⚔️"
            required
          />
        </label>

        <label>
          Portada del manga (URL)
          <input
            type="url"
            value={portada}
            onChange={(e) => setPortada(e.target.value)}
            placeholder="https://..."
          />
        </label>

        <label>
          Descripción
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </label>

        {/* ---------- BLOQUE TOMOS  ---------- */}
        <div className="tomos-block">
          <h3>Tomos</h3>
          <p className="tomos-help">
            Cada tomo tiene una portada y varias páginas (URLs de imagen).
          </p>

          {tomos.map((tomo, tIndex) => (
            <div key={tIndex} className="tomo-card">
              <div className="tomo-header">
                <h4>{tomo.nombre || `Tomo ${tIndex + 1}`}</h4>
                {tomos.length > 1 && (
                  <button
                    type="button"
                    className="tomo-remove-btn"
                    onClick={() => handleTomoRemove(tIndex)}
                  >
                    Eliminar tomo
                  </button>
                )}
              </div>

              <label>
                Nombre del tomo
                <input
                  type="text"
                  value={tomo.nombre}
                  onChange={(e) =>
                    handleTomoFieldChange(tIndex, "nombre", e.target.value)
                  }
                  placeholder={`Tomo ${tIndex + 1}`}
                />
              </label>

              <label>
                Portada del tomo (URL)
                <input
                  type="url"
                  value={tomo.imagen}
                  onChange={(e) =>
                    handleTomoFieldChange(tIndex, "imagen", e.target.value)
                  }
                  placeholder="https://..."
                />
              </label>

              <div className="tomo-pages">
                <p>Páginas del tomo (URLs de imagen)</p>

                {(tomo.paginas || []).map((pagina, pIndex) => (
                  <div key={pIndex} className="pagina-row">
                    <input
                      type="url"
                      value={pagina}
                      onChange={(e) =>
                        handlePaginaChange(
                          tIndex,
                          pIndex,
                          e.target.value
                        )
                      }
                      placeholder={`URL página ${pIndex + 1}`}
                    />
                    {tomo.paginas.length > 1 && (
                      <button
                        type="button"
                        className="pagina-remove-btn"
                        onClick={() =>
                          handlePaginaRemove(tIndex, pIndex)
                        }
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}

                <button
                  type="button"
                  className="pagina-add-btn"
                  onClick={() => handlePaginaAdd(tIndex)}
                >
                  + Añadir página
                </button>
              </div>
            </div>
          ))}

          <button
            type="button"
            className="tomo-add-btn"
            onClick={handleTomoAdd}
          >
            + Añadir otro tomo
          </button>
        </div>

        {formError && <p className="error">{formError}</p>}
        {successMsg && (
          <p className="user-success" style={{ marginTop: "0.4rem" }}>
            {successMsg}
          </p>
        )}

        <button
          type="submit"
          className="colab-upload-btn"
          disabled={createManga.isPending}
        >
          {createManga.isPending ? "Enviando..." : "Crear manga"}
        </button>
      </form>

      <button
        type="button"
        className="colab-back-btn"
        onClick={() => navigate("/user")}
      >
        ← Volver a mi panel
      </button>
    </div>
  );
}
