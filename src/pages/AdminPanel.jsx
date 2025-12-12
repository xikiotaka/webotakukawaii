// src/pages/AdminPanel.jsx
import { useState } from "react";
import {
  useAdminMangas,
  useCreateManga,
  useUpdateManga,
  useDeleteManga,
} from "../hooks/useMangaAdmin";
import {
  getCollabRequests,
  updateCollabRequestStatus,
} from "../data/authService";
import "./AdminPanel.css";

export default function AdminPanel() {
  const { data: mangas, isLoading, isError, error } = useAdminMangas();
  const createManga = useCreateManga();
  const updateManga = useUpdateManga();
  const deleteManga = useDeleteManga();

  // --- estado del formulario ---
  const [editingId, setEditingId] = useState(null);

  const [titulo, setTitulo] = useState("");
  const [kanji, setKanji] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [portada, setPortada] = useState("");

  const [tomos, setTomos] = useState([
    { nombre: "Tomo 1", imagen: "", paginas: [""] },
  ]);

  const [formError, setFormError] = useState("");
  const [selectedCategoria, setSelectedCategoria] = useState("Todas");

  // --- COLAB REQUESTS ---
  const [collabRequests, setCollabRequests] = useState(() =>
    getCollabRequests()
  );

  function reloadCollabRequests() {
    setCollabRequests(getCollabRequests());
  }

  function handleCollabAction(id, status) {
    try {
      updateCollabRequestStatus(id, status);
      reloadCollabRequests();
    } catch (err) {
      alert(err.message);
    }
  }

  function getCollabStatusLabel(status) {
    if (status === "approved") return "Aprobado";
    if (status === "rejected") return "Rechazado";
    return "Pendiente";
  }

  const sortedCollabRequests = [...collabRequests].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

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
    setEditingId(null);
    setTitulo("");
    setKanji("");
    setCategoria("");
    setDescripcion("");
    setPortada("");
    setTomos([{ nombre: "Tomo 1", imagen: "", paginas: [""] }]);
    setFormError("");
  }

  // --- submit crear/editar ---
  function handleSubmit(e) {
    e.preventDefault();
    setFormError("");

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

    if (editingId) {
      // EDITAR
      updateManga.mutate(
        { id: editingId, data: payload },
        {
          onSuccess: () => {
            resetForm();
          },
        }
      );
    } else {
      // CREAR
      createManga.mutate(payload, {
        onSuccess: () => {
          resetForm();
        },
      });
    }
  }

  // --- cargar manga en el form para editar ---
  function handleEdit(manga) {
    setEditingId(manga.id);
    setTitulo(manga.titulo || "");
    setKanji(manga.kanji || "");
    setCategoria(manga.categoria || "");
    setDescripcion(manga.descripcion || "");
    setPortada(manga.imagen || "");

    const tomosDesdeManga =
      manga.tomos && manga.tomos.length
        ? manga.tomos.map((t) => ({
            nombre: t.nombre || "",
            imagen: t.imagen || "",
            paginas:
              t.paginas && t.paginas.length ? [...t.paginas] : [""],
          }))
        : [{ nombre: "Tomo 1", imagen: "", paginas: [""] }];

    setTomos(tomosDesdeManga);

    // subimos al inicio del panel
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleDelete(id) {
    if (!window.confirm("¿Seguro que quieres eliminar este manga?")) return;
    deleteManga.mutate(id, {
      onSuccess: () => {
        if (editingId === id) resetForm();
      },
    });
  }

  // --- filtrado por categoría ---
  const categoriasDisponibles =
    mangas && mangas.length
      ? [
          "Todas",
          ...Array.from(
            new Set(mangas.map((m) => m.categoria).filter(Boolean))
          ),
        ]
      : ["Todas"];

  const mangasFiltrados =
    !mangas || !mangas.length
      ? []
      : selectedCategoria === "Todas"
      ? mangas
      : mangas.filter((m) => m.categoria === selectedCategoria);

  return (
    <div className="admin-panel">
      <h1>Panel de Admin</h1>

      <div className="admin-grid">
        {/* COLUMNA IZQUIERDA: FORM */}
        <section className="admin-section admin-section--form">
          <h2>{editingId ? "Editar manga" : "Crear nuevo manga"}</h2>

          <form className="admin-form" onSubmit={handleSubmit}>
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

            {/* TOMOS */}
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
                        handleTomoFieldChange(
                          tIndex,
                          "nombre",
                          e.target.value
                        )
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
                        handleTomoFieldChange(
                          tIndex,
                          "imagen",
                          e.target.value
                        )
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

            <div className="admin-form-actions">
              <button
                type="submit"
                disabled={createManga.isPending || updateManga.isPending}
              >
                {editingId
                  ? updateManga.isPending
                    ? "Guardando cambios..."
                    : "Guardar cambios"
                  : createManga.isPending
                  ? "Creando..."
                  : "Crear manga"}
              </button>

              {editingId && (
                <button
                  type="button"
                  className="secondary-btn"
                  onClick={resetForm}
                >
                  Cancelar edición
                </button>
              )}
            </div>
          </form>
        </section>

        {/* COLUMNA DERECHA: LISTADO */}
        <section className="admin-section admin-section--list">
          <div className="admin-list-header">
            <h2>Listado de mangas</h2>

            <div className="admin-filter">
              <label>
                Categoría:
                <select
                  value={selectedCategoria}
                  onChange={(e) => setSelectedCategoria(e.target.value)}
                >
                  {categoriasDisponibles.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          {isLoading && <p>Cargando mangas...</p>}
          {isError && <p className="error">Error: {error.message}</p>}

          {!isLoading &&
            !isError &&
            (!mangasFiltrados || mangasFiltrados.length === 0) && (
              <p>No hay mangas para esta categoría.</p>
            )}

          {!isLoading && !isError && mangasFiltrados.length > 0 && (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Título</th>
                  <th>Categoría</th>
                  <th>Portada</th>
                  <th># Tomos</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {mangasFiltrados.map((manga) => {
                  const portadaManga =
                    manga.imagen ||
                    (manga.tomos &&
                      manga.tomos[0] &&
                      (manga.tomos[0].imagen ||
                        manga.tomos[0].paginas?.[0]));

                  return (
                    <tr key={manga.id}>
                      <td>{manga.id}</td>
                      <td>{manga.titulo}</td>
                      <td>{manga.categoria}</td>
                      <td>
                        {portadaManga && (
                          <img
                            src={portadaManga}
                            alt={manga.titulo}
                            className="admin-cover-thumb"
                          />
                        )}
                      </td>
                      <td>{manga.tomos ? manga.tomos.length : 0}</td>
                      <td className="admin-actions-cell">
                        <button
                          type="button"
                          className="edit-btn"
                          onClick={() => handleEdit(manga)}
                        >
                          Editar
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(manga.id)}
                          disabled={deleteManga.isPending}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}

          {deleteManga.isError && (
            <p className="error">
              Error eliminando manga: {deleteManga.error.message}
            </p>
          )}
        </section>
      </div>

      {/* SECCIÓN: SOLICITUDES DE COLABORADORES */}
      <section className="admin-section admin-section--collabs">
        <h2>Solicitudes de colaboradores</h2>

        {sortedCollabRequests.length === 0 ? (
          <p>No hay solicitudes por ahora 💤</p>
        ) : (
          <table className="admin-table admin-table--collabs">
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Nickname</th>
                <th>Email</th>
                <th>Estado</th>
                <th>Carta de presentación</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {sortedCollabRequests.map((req) => (
                <tr key={req.id}>
                  <td>{req.fullName}</td>
                  <td>@{req.nickname}</td>
                  <td>{req.email}</td>
                  <td>
                    <span
                      className={`collab-status-badge collab-status-badge--${req.status}`}
                    >
                      {getCollabStatusLabel(req.status)}
                    </span>
                  </td>
                  <td className="collab-message-cell">
                    <div className="collab-message-box">{req.message}</div>
                  </td>
                  <td className="collab-actions-cell">
                    {req.status === "pending" ? (
                      <>
                        <button
                          type="button"
                          className="collab-approve-btn"
                          onClick={() =>
                            handleCollabAction(req.id, "approved")
                          }
                        >
                          Aprobar
                        </button>
                        <button
                          type="button"
                          className="collab-reject-btn"
                          onClick={() =>
                            handleCollabAction(req.id, "rejected")
                          }
                        >
                          Rechazar
                        </button>
                      </>
                    ) : (
                      <span className="collab-status-note">
                        Ya resuelta
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}
