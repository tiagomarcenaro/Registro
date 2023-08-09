function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("terminos");
  const regBtn = document.getElementById("regBtn");

  // Deshabilitar el botón de registro al cargar la página
  regBtn.disabled = true;

  // Habilitar o deshabilitar el botón de registro según el estado del checkbox
  checkbox.addEventListener("change", function () {
    regBtn.disabled = !checkbox.checked;
  });
});
