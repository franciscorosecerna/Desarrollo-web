/*a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por
consola los meses 5 y 11 (utilizar console.log)*/
let dates = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(dates[4]);
console.log(dates[10]);

/*b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort)*/
dates.sort();
console.log(dates);

/*c. Agregar un elemento al principio y al final del array (utilizar unshift y push)*/
dates.unshift("Francisco");
dates.push("Rose");

/*d. Quitar un elemento del principio y del final del array (utilizar shift y pop)*/
dates.shift();
dates.pop();

/*e. Invertir el orden del array (utilizar reverse)*/
dates.reverse();

/*f. Unir todos los elementos del array en un único string donde cada mes este
separado por un guión - (utilizar join)*/
let dates2 = dates.join('-');

/*g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre
(utilizar slice)*/
let dates3 = dates.slice(4,11);