// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../data/authService";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  function validate() {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "El correo es obligatorio.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Correo electrónico no válido.";
    }

    if (!password) {
      newErrors.password = "La contraseña es obligatoria.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSuccessMsg("");
    if (!validate()) return;

    try {
      const user = loginUser({ email: email.trim(), password });

      setSuccessMsg(`¡Bienvenid@, ${user.nickname || user.fullName}! ✨`);
      setErrors({});
      setPassword("");

      setTimeout(() => {
        navigate("/");
      }, 1200);
    } catch (err) {
      setErrors({ global: err.message });
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Log In</h1>
        <p className="auth-subtitle">
          Ingresa para seguir leyendo tus mangas favoritos 💫
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          {errors.global && (
            <p className="auth-error global">{errors.global}</p>
          )}
          {successMsg && <p className="auth-success">{successMsg}</p>}

          <label>
            Correo electrónico
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tucorreo@ejemplo.com"
            />
            {errors.email && (
              <span className="auth-error">{errors.email}</span>
            )}
          </label>

          <label>
            Contraseña
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Tu contraseña"
            />
            {errors.password && (
              <span className="auth-error">{errors.password}</span>
            )}
          </label>

          <button type="submit" className="auth-btn">
            Iniciar sesión
          </button>

          <p className="auth-footer-text">
            ¿Todavía no tienes cuenta?{" "}
            <Link to="/register" className="auth-link">
              Crear cuenta
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
