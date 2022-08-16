
  function copiar() {
  navigator.clipboard.writeText(
  document.getElementById("texto-encriptado").value);
  }
 document.querySelector("#boton-copiar").addEventListener("click", copiar);
