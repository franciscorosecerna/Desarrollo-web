document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario");
  const fields = [
    "nombre",
    "email",
    "password",
    "repetir",
    "edad",
    "telefono",
    "direccion",
    "ciudad",
    "codigo",
    "dni",
  ];

  const validators = {
    nombre: (v) => v.length > 6 && v.includes(" ") || "Debe tener más de 6 letras y un espacio",
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Email inválido",
    password: (v) => /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(v) || "Al menos 8 caracteres con letras y números",
    repetir: (v) => v === document.getElementById("password").value || "Las contraseñas no coinciden",
    edad: (v) => parseInt(v) >= 18 || "Debe ser mayor o igual a 18",
    telefono: (v) => /^\d{7,}$/.test(v) || "Al menos 7 dígitos, sin símbolos",
    direccion: (v) => /^.*\d+.*\s+.*$/.test(v) && v.length >= 5 || "Debe tener letras, números y un espacio",
    ciudad: (v) => v.length >= 3 || "Al menos 3 caracteres",
    codigo: (v) => v.length >= 3 || "Al menos 3 caracteres",
    dni: (v) => /^\d{7,8}$/.test(v) || "Debe tener 7 u 8 dígitos",
  };

  fields.forEach((field) => {
    const input = document.getElementById(field);
    const error = document.getElementById("error-" + field);

    input.addEventListener("blur", () => {
      const valid = validators[field](input.value);
      if (valid !== true) {
        error.textContent = valid;
        error.style.display = "block";
      }
    });

    input.addEventListener("focus", () => {
      error.textContent = "";
      error.style.display = "none";
    });
  });

  document.getElementById("nombre").addEventListener("input", function (e) {
    const title = document.getElementById("form-title");
    title.textContent = "HOLA " + e.target.value;
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;
    let mensajes = [];

    fields.forEach((field) => {
      const input = document.getElementById(field);
      const error = document.getElementById("error-" + field);
      const result = validators[field](input.value);
      if (result !== true) {
        error.textContent = result;
        error.style.display = "block";
        valid = false;
        mensajes.push(`${field}: ${result}`);
      }
    });

    if (valid) {
      let datos = fields.map((f) => `${f}: ${document.getElementById(f).value}`).join("\n");
      alert("Datos cargados:\n" + datos);
    } else {
      alert("Errores:\n" + mensajes.join("\n"));
    }
  });
});
