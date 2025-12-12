// src/pages/Register.jsx
import { useState } from "react";
import { registerUser, calculateAge, MIN_AGE } from "../data/authService";
import "./Register.css";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [nickname, setNickname] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  function validate() {
    const newErrors = {};

    if (!fullName.trim()) newErrors.fullName = "El nombre es obligatorio.";
    if (!nickname.trim()) newErrors.nickname = "El nickname es obligatorio.";

    if (!birthDate) {
      newErrors.birthDate = "La fecha de nacimiento es obligatoria.";
    } else {
      const age = calculateAge(birthDate);
      if (age == null) {
        newErrors.birthDate = "Fecha inválida.";
      } else if (age < MIN_AGE) {
        newErrors.birthDate = `Debes tener al menos ${MIN_AGE} años.`;
      }
    }

    if (!email.trim()) {
      newErrors.email = "El correo es obligatorio.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Correo electrónico no válido.";
    }

    if (!password) {
      newErrors.password = "La contraseña es obligatoria.";
    } else if (password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
    }

    if (!password2) {
      newErrors.password2 = "Repite la contraseña.";
    } else if (password2 !== password) {
      newErrors.password2 = "Las contraseñas no coinciden.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSuccessMsg("");
    if (!validate()) return;

    try {
      registerUser({
        fullName: fullName.trim(),
        nickname: nickname.trim(),
        birthDate,
        email: email.trim(),
        password,
      });

      setSuccessMsg("¡Cuenta creada con éxito! Ya puedes iniciar sesión ✨");
      setFullName("");
      setNickname("");
      setBirthDate("");
      setEmail("");
      setPassword("");
      setPassword2("");
      setErrors({});
    } catch (err) {
      setErrors({ global: err.message });
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Registro</h1>
        <p className="auth-subtitle">
          Únete a Otaku Kawaii y guarda tus mangas favoritos 💖
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          {errors.global && <p className="auth-error global">{errors.global}</p>}
          {successMsg && <p className="auth-success">{successMsg}</p>}

          <label>
            Nombre completo
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Ej: Sakura Kinomoto"
            />
            {errors.fullName && <span className="auth-error">{errors.fullName}</span>}
          </label>

          <label>
            Nickname
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Ej: SakuraChan99"
            />
            {errors.nickname && <span className="auth-error">{errors.nickname}</span>}
          </label>

          <label>
            Fecha de nacimiento
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
            {errors.birthDate && <span className="auth-error">{errors.birthDate}</span>}
          </label>

          <label>
            Correo electrónico
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tucorreo@ejemplo.com"
            />
            {errors.email && <span className="auth-error">{errors.email}</span>}
          </label>

          <label>
            Contraseña
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mínimo 6 caracteres"
            />
            {errors.password && <span className="auth-error">{errors.password}</span>}
          </label>

          <label>
            Repetir contraseña
            <input
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            {errors.password2 && <span className="auth-error">{errors.password2}</span>}
          </label>

          <button type="submit" className="auth-btn">
            Crear cuenta
          </button>
        </form>
      </div>
    </div>
  );
}
