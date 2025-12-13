# 🌸 Otaku Kawaii — Plataforma Web de Lectura de Mangas

**Otaku Kawaii** es una aplicación web desarrollada en **React** que permite explorar, filtrar y leer mangas en línea, con control de acceso por edad, roles de usuario y una experiencia visual inspirada en la estética *kawaii* japonesa para el Informatorio en su etapa 3 ✨

---

## 🌟 Funcionalidades principales

### 📚 Exploración de mangas
- Catálogo de mangas con portada, título y categoría.
- Navegación por distintas categorías (Kodomo, Shonen, Seinen, Josei, Yuri, Mecha, etc.).
- Vista dedicada por categoría.

---

### 🧭 Navegación por categorías
- Acceso desde el menú desplegable **“MANGAS”** en el header.
- Conversión automática de categorías a **slugs seguros** para la URL.
- Vista `MangaCategory` con:
  - Título de la categoría
  - Cantidad de mangas encontrados
  - Grilla responsive de tarjetas

---

### 🔐 Control de acceso y restricciones
Algunas categorías están marcadas como **contenido +16**.

#### Reglas de acceso:
- 👤 Usuarios **no logueados** → acceso restringido
- 🧒 Usuarios **menores de 16 años** → acceso restringido
- 🛡️ **Admin y Colab** → acceso completo

Cuando un usuario sin permisos intenta acceder:
- Se bloquea la navegación
- Se muestra un **banner de advertencia** en el header

---

### 👤 Sistema de usuarios
- Registro y login de usuarios.
- Persistencia de sesión mediante `localStorage`.
- Cada usuario posee:
  - Rol (`user`, `admin`, `colab`)
  - Fecha de nacimiento (para cálculo de edad)
  - Avatar asignado

---

### 🧑‍🎨 Avatar de usuario
- Mini avatar visible en el header al iniciar sesión.
- Avatar clickeable que redirige al **panel de usuario**.
- Diferenciación visual según rol:
  - Admin → avatar especial
  - Usuario común → avatar estándar

---

### 📖 Lector de mangas
- Vista de detalle por manga.
- Acceso a tomos individuales.
- Navegación de páginas mediante botones.
- Registro de tomos leídos por usuario.

---

### 🧱 Roles del sistema
- **Admin**: acceso total y panel administrativo.
- **Colab**: acceso extendido a contenido restringido.
- **User**: acceso condicionado por edad.

---

### 🎨 Diseño y experiencia visual
- Estética *kawaii* con colores suaves.
- Tipografías: Dela Gothic One e Inter.
- Diseño responsive (desktop, tablet y mobile).
- Header fijo (`sticky`) para navegación constante.

---

## 🛠️ Tecnologías utilizadas
- React.js
- Vite
- React Router DOM
- @tanstack/react-query
- CSS3 (Flexbox + Grid)
- LocalStorage

---

## 📁 Estructura del proyecto
```
src/
├── assets/
├── components/
├── pages/
├── data/
├── App.jsx
└── main.jsx
```

---

## 🚀 Instalación y ejecución
```bash
npm install
npm run dev
```

---

## 🎀 Créditos
- 💖 Desarrollo y diseño: **Florencia Azcoaga**
- 🎓 Proyecto educativo – Informatorio (React)

---

## 📜 Licencia
MIT
