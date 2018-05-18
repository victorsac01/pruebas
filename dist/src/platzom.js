'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
function platzom(str) {
	var translation = str;

	//si la palabra termina en ar se le quitan esos 2 caracteres
	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2);
	}
	// si la palabra inicia con Z se le añade pe al final
	if (str.toLowerCase().startsWith('z')) {
		translation += 'pe';
	}
	//Si la palabra traducida tiene 10 o mas letras se debe partir a la mitad
	var length = translation.length;
	if (translation.length >= 10) {
		var firstHalf = translation.slice(0, Math.round(length / 2));
		var secondHalf = translation.slice(Math.round(length / 2));
		translation = firstHalf + '-' + secondHalf;
	}
	// si la palabra original es palindromo se devuelve la misma palabra in
	var reverse = function reverse(str) {
		return str.split('').reverse().join('');
	};
	function minMay(str) {
		var length = str.length;
		var translation = '';
		var capitalize = true;
		for (var i = 0; i < length; i++) {
			var char = str.charAt(i);
			translation += capitalize ? char.toUpperCase() : char.toLowerCase();
			capitalize = !capitalize;
		}
		return translation;
	}
	if (str == reverse(str)) {
		return minMay(str);
	}
	return translation;
}