console.log('EXCERCISE 3: STRINGS');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

/* a. Dado el siguiente array: 
["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
mostrar por consola los meses 5 y 11 (utilizar console.log).*/

console.log(months[4],months[10]);

/* b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

var monthsAlphabetically = months.sort();

console.log(monthsAlphabetically);

/* c. Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

months.unshift('Año');
months.push('2022');

console.log(months);

/* d. Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

months.shift();
months.pop();

console.log(months);

/* e. Invertir el orden del array (utilizar reverse).*/

var monthsReverse = months.reverse();

console.log(monthsReverse);

/* f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).*/

var monthsString = months.join("-");

console.log(monthsString);

/* g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

var monthsEG = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var monthsSlice = monthsEG.slice(4,11);

console.log(monthsSlice);