document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario");
  const title = document.getElementById("form-title");
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");

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
    "dni"
  ];

  const stored = localStorage.getItem("formData");
  if (stored) {
    const data = JSON.parse(stored);
    fields.forEach(f => {
      const input = document.getElementById(f);
      if (data[f]) input.value = data[f];
      if (f === "nombre") title.textContent = `HOLA ${data[f]}`;
    });
  }

  const validators = {
    nombre: val => val.length > 6 && val.includes(" ") || "Debe tener más de 6 letras y un espacio",
    email: val => /\S+@\S+\.\S+/.test(val) || "Email inválido",
    password: val => /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(val) || "Min. 8 caracteres con letras y números",
    repetir: val => val === document.getElementById("password").value || "Las contraseñas no coinciden",
    edad: val => parseInt(val) >= 18 || "Debe ser mayor o igual a 18",
    telefono: val => /^\d{7,}$/.test(val) || "Debe tener al menos 7 dígitos sin espacios",
    direccion: val => /^[a-zA-Z0-9]+\s+[a-zA-Z0-9]+/.test(val) || "Debe tener letras, números y un espacio",
    ciudad: val => val.length >= 3 || "Debe tener al menos 3 caracteres",
    codigo: val => val.length >= 3 || "Debe tener al menos 3 caracteres",
    dni: val => /^\d{7,8}$/.test(val) || "Debe tener 7 u 8 dígitos"
  };

  fields.forEach(field => {
    const input = document.getElementById(field);
    const error = document.getElementById("error-" + field);

    input.addEventListener("blur", () => {
      const validation = validators[field](input.value);
      if (validation !== true) {
        error.textContent = validation;
        error.style.display = "block";
      }
    });

    input.addEventListener("focus", () => {
      error.textContent = "";
      error.style.display = "none";
    });
  });

  document.getElementById("nombre").addEventListener("input", (e) => {
    title.textContent = `HOLA ${e.target.value}`;
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let valid = true;
    const data = {};

    fields.forEach(f => {
      const input = document.getElementById(f);
      const error = document.getElementById("error-" + f);
      const result = validators[f](input.value);
      if (result !== true) {
        error.textContent = result;
        error.style.display = "block";
        valid = false;
      } else {
        data[f] = input.value;
      }
    });

    if (!valid) {
      modalTitle.textContent = "Errores de validación";
      modalBody.textContent = "Por favor corregí los errores en el formulario.";
      modal.style.display = "flex";
      return;
    }

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      if (!response.ok) throw result;

      modalTitle.textContent = "Enviado con éxito";
      modalBody.textContent = JSON.stringify(result, null, 2);
      modal.style.display = "flex";

      localStorage.setItem("formData", JSON.stringify(data));
    } catch (err) {
      modalTitle.textContent = "Error al enviar";
      modalBody.textContent = JSON.stringify(err, null, 2);
      modal.style.display = "flex";
    }
  });
});
