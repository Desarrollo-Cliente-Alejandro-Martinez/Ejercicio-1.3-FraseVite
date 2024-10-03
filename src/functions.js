'use strict'

function letters(cadena) {
	return cadena.length;
}

function words(cadena) {
	return cadena.split(' ').length;
}

function upperString(cadena) {
	return cadena.toUpperCase();
}

function titleString(cadena) {
	return cadena.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

function backwardsLetters(cadena) {
	return cadena.split('').reverse().join('');
}

function backwardsWords(cadena) {
	return cadena.split(' ').reverse().join(' ');
}

function palindrome(cadena) {
	const cleanString = cadena.replace(/\s+/g, '').toLowerCase();
	return cleanString === cleanString.split('').reverse().join('');
}

export {
	letters,
	words,
	upperString,
	titleString,
	backwardsLetters,
	backwardsWords,
	palindrome
}
