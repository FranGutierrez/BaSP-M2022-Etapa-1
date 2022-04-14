console.log('EXCERCISE 2: STRINGS');

var stringE2 = 'francisco gutierrez';

/* a. Crear una variable de tipo string con al menos 10 caracteres
y convertir todo el texto en mayúscula (utilizar toUpperCase).*/

var stringE2UpperCase = stringE2.toUpperCase();

console.log(stringE2UpperCase);

/* b. Crear una variable de tipo string con al menos 10 caracteres y
generar un nuevo string con los primeros 5 caracteres
guardando el resultado en una nueva variable (utilizar substring).*/

var stringE2First5Car = stringE2.substring(0,5);

console.log(stringE2First5Car);

/* c. Crear una variable de tipo string con al menos 10 caracteres y
generar un nuevo string con los últimos 3 caracteres
guardando el resultado en una nueva variable (utilizar substring).*/

var stringE2Last3Car = stringE2.substring(16);

console.log(stringE2Last3Car);

/* d. Crear una variable de tipo string con al menos 10 caracteres y
generar un nuevo string con la primera letra en mayúscula y las demás en minúscula.
Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/

var stringE2FirstUpperCase = stringE2.substring(0,1);
var stringE2RestLowerCase = stringE2.substring(1);
var firstLetter = stringE2FirstUpperCase.toUpperCase();
var rest = stringE2RestLowerCase.toLowerCase();
var stringResultD = firstLetter + rest;

console.log(stringResultD);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

var whiteSpaceIndex = stringE2.indexOf(' ');

console.log(whiteSpaceIndex);

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra
de ambas palabras en mayúscula y las demás letras en minúscula
(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

var stringE2FirstUpperCase1 = stringE2.substring(0,1);
var stringE2RestLowerCase1 = stringE2.substring(1,9);
var stringE2FirstUpperCase2 = stringE2.substring(9,11);
var stringE2RestLowerCase2 = stringE2.substring(11,19);
var firstLetter1 = stringE2FirstUpperCase1.toUpperCase();
var rest1 = stringE2RestLowerCase1.toLowerCase();
var firstLetter2 = stringE2FirstUpperCase2.toUpperCase();
var rest2 = stringE2RestLowerCase2.toLowerCase();

var stringResultF = firstLetter1 + rest1 + firstLetter2 + rest2;

console.log(stringResultF);