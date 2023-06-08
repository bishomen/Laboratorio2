// JavaScript Document

function esPalindromo(cadena) {
  // Eliminar espacios y convertir a minúsculas
  cadena = cadena.replace(/\s/g, "").toLowerCase();

  // Comparar la cadena original con su reverso
  return cadena === cadena.split("").reverse().join("");
}

// Ejemplo de uso
var cadena1 = "Anita lava la tina";
console.log(esPalindromo(cadena1)); // Output: true

var cadena2 = "Hola mundo";
console.log(esPalindromo(cadena2)); // Output: false
