console.log('EXCERCISE 6: FUNCTIONS');

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable,
mostrando el valor de dicha variable en la consola del navegador.*/

function suma(numA, numB){
    result = numA + numB;
    return result;
}

console.log(suma(11,53));

/* b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

function sumaB(numA, numB){
    if (typeof numA === 'number' && typeof numB === 'number') {
        result = numA + numB;
        return result;
    } else {
        alert('ERROR: A parameter is not a number');
        return NaN;
    }
}

console.log(sumaB('f',2));

/* c. Crear una función validate integer que reciba un número como parámetro y
devuelva verdadero si es un número entero.*/

function validateInteger(numC){
    isInt = Number.isInteger(numC);
    if (isInt === true) {
        return true;
    } else {
        return false;
    }
}

console.log(validateInteger(7));

/* d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros.
En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/

function sumaD(numA, numB){
    if (typeof numA === 'number' && typeof numB === 'number') {
        isIntA = Number.isInteger(numA);
        isIntB = Number.isInteger(numB);
        if (isIntA === true && isIntB === true) {
            result = numA + numB;
            return result;
        } else {
            alert('ERROR: A number is not a integer');
            if (isIntA === false) {
                return Math.round(numA);
            }if (isIntB === false) {
                return Math.round(numB);
            }
        }
    } else {
        alert('ERROR: A parameter is not a number');
        return NaN;
    }
}

console.log(sumaD(5.3,2));

/* e. Convertir la validación del ejercicio 6d) en una función separada y
llamarla dentro de la función suma probando que todo siga funcionando igual.*/

function sumaE(numA, numB){
    if (typeof numA === 'number' && typeof numB === 'number') {
        if (validateIntegerSumaE(numA, numB) === true) {
            result = numA + numB;
            return result;
        } else {
            alert('ERROR: A number is not a integer');
            if (isIntA === false) {
                return Math.round(numA);
            }if (isIntB === false) {
                return Math.round(numB);
            }
        }
    } else {
        alert('ERROR: A parameter is not a number');
        return NaN;
    }
}

function validateIntegerSumaE(numA, numB){
    isIntA = Number.isInteger(numA);
    isIntB = Number.isInteger(numB);
    if (isIntA === true && isIntB === true) {
        return true;
    } else {
        return false;
    }
}

console.log(sumaE(5.3,2));