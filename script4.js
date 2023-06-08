// JavaScript Document
<script>
    function contarVocales() {
      var frase = document.getElementById("frase").value;
      var contadorA = 0;
      var contadorE = 0;
      var contadorI = 0;
      var contadorO = 0;
      var contadorU = 0;

      for (var i = 0; i < frase.length; i++) {
        var letra = frase.charAt(i).toLowerCase();

        if (letra === "a") {
          contadorA++;
        } else if (letra === "e") {
          contadorE++;
        } else if (letra === "i") {
          contadorI++;
        } else if (letra === "o") {
          contadorO++;
        } else if (letra === "u") {
          contadorU++;
        }
      }

      var resultado = "";

      if (contadorA > 0) {
        resultado += "La vocal 'a' aparece " + contadorA + " veces.<br>";
      }
      if (contadorE > 0) {
        resultado += "La vocal 'e' aparece " + contadorE + " veces.<br>";
      }
      if (contadorI > 0) {
        resultado += "La vocal 'i' aparece " + contadorI + " veces.<br>";
      }
      if (contadorO > 0) {
        resultado += "La vocal 'o' aparece " + contadorO + " veces.<br>";
      }
      if (contadorU > 0) {
        resultado += "La vocal 'u' aparece " + contadorU + " veces.<br>";
      }

      if (resultado === "") {
        resultado = "No se encontraron vocales en la frase.";
      }

      document.getElementById("resultado").innerHTML = resultado;
    }
  </script>