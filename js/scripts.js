// funcion de par o impar
function ParImpar(numero) {
	if (numero % 2 === 0) {
		console.log(numero + " es un número par.");
	} else {
		console.log(numero + " es un número impar.");
	}
}

console.warn(
	"Escribir ParImpar() respetando mayusculas y poniendo dentro del parentesis el numero para resolver la funcion"
);

// funcion de comparacion
function comparacion(numero1, numero2) {
	if (numero1 > numero2) {
		console.log(numero1 + " es mayor que " + numero2 + ".");
	} else if (numero1 < numero2) {
		console.log(numero2 + " es mayor que " + numero1 + ".");
	} else {
		console.log("Los numeros son iguales");
	}
}

console.warn(
	"Escribir comparacion(x,x) respetando mayusculas y reemplazando las x dentro del parentesis con los numeros para resolver la funcion"
);

//funcion de multiplo

function multiplo(numero) {
	if (numero % 5 === 0) {
		console.log(numero + " es múltiplo de 5.");
	} else {
		console.log(numero + " no es múltiplo de 5.");
	}
}

console.warn(
	"Escribir multiplo() respetando mayusculas y poniendo dentro del parentesis el numero para resolver la funcion"
);

//funcion de contar

function numerosHasta(numero) {
	for (let i = 0; i <= numero; i++) {
		console.log(i);
	}
}

console.warn(
	"Escribir numerosHasta(); respetando mayusculas y poniendo dentro del parentesis el numero para resolver la funcion"
);

//funcion de imprimir la palabra la cantidad de veces correspondientes al numero que se da

function imprimirPalabra(palabra, cantidad) {
	for (let i = 0; i < cantidad; i++) {
		console.log(palabra);
	}
}

console.warn(
	"Escribir imprimirPalabra(); respetando mayusculas y poniendo dentro del parentesis primero la palabra dentro de comillas, y luego de una coma el numero para resolver la funcion"
);

//imprimir todos los valores de un array

function imprimirArray(array) {
	for (let i = 0; i < array.length; i++) {
		console.log(array[i]);
	}
}
console.warn(
	"Escribir const arrayCount = [1, 2, 3, 4, 5] ; imprimirArray(ArrayCount);"
);
const arrayCount = [1, 2, 3, 4, 5];
imprimirArray(arrayCount);

// imprimir lo valores de un array excepcot el quinto

function imprimirArraysinQuinto(array) {
	for (let i = 0; i < array.length; i++) {
		if (i !== 4) {
			console.log(array[i]);
		}
	}
}

console.warn(
	"const otroArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; imprimirArraySinQuinto(otroArray);"
);
const otroArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
imprimirArraysinQuinto(otroArray);

//imprimir cada num del array multiplicado por el numero que le pongo

function multiplicarArray(array, numero) {
	for (let i = 0; i < array.length; i++) {
		console.log(array[i] * numero);
	}
}

const arrayDeNumeros = [2, 4, 6, 8, 10];
multiplicarArray(arrayDeNumeros, 3);
