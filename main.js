import { letters, words, upperString, titleString, backwardsLetters, backwardsWords, palindrome } from './src/functions.js'

document.querySelector('#app').innerHTML = `
  <p>Abre la consola por favor.</p>
`

const frase = "La ruta nos aporto otro paso natural"

const cantidadLetras = letters(frase)
const cantidadPalabras = words(frase)

console.log(`Frase: "${frase}"`);
console.log(`${cantidadLetras} letras y ${cantidadPalabras} palabras`);
console.log(upperString(frase));
console.log(titleString(frase));
console.log(backwardsLetters(frase));
console.log(backwardsWords(frase));
console.log(palindrome(frase) ? "Sí es un palíndromo" : "No es un palíndromo");