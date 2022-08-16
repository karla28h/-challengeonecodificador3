
  function encriptar()
   {
   var texto = document.getElementById("input-text").value;
   texto = texto
   .replace(/e/gi, "enter")
   .replace(/i/gi, "imes")
   .replace(/a/gi, "ai")
   .replace(/o/gi, "ober")
   .replace(/u/gi, "ufat");
   document.getElementById("texto-encriptado").value = texto;
  }
  var boton = document.getElementById("boton-encriptar");
  boton.onclick = function () {    
  if(document.getElementById("input-text").value.match(/^[a-z ]*$/)) {
  encriptar();
  } else {
  alert("Solo se permiten letras minusculas, sin caracteres especiales.")
  }
 };
