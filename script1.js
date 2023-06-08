// JavaScript Document

<script>
    function esPalindromo() {
      var cadena = document.getElementById("cadena").value;
      var resultado = document.getElementById("resultado");

      // Eliminar espacios y convertir a minúsculas
      cadena = cadena.replace(/\s/g, "").toLowerCase();

      // Comparar la cadena original con su reverso
      if (cadena === cadena.split("").reverse().join("")) {
        resultado.textContent = "Es palíndromo.";
      } else {
        resultado.textContent = "No es palíndromo.";
      }
    }
  </script>