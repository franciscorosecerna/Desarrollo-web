/*a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el
valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than
0,5” y sino un alerta con el mensaje “Lower than 0,5”*/
let num = Math.random();

alert(ran >= 0.5 ? "Greater than 0,5": "Lower than 0,5");
/*b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y
muestre los siguientes mensajes de alerta:*/
let age = Math.random()* 100;
let message = "";

//i. “Bebe” si la edad es menor a 2 años;
if (age < 2) {
    message = "Bebe";
}

//ii. “Niño” si la edad es entre 2 y 12 años;
else if (age < 13) {
    message = "Niño";
}

//iii. “Adolescente” entre 13 y 19 años;
else if (age < 20) {
    message = "Adolescente";
}

//iv. “Joven” entre 20 y 30 años;
else if (age < 31) {
    message = "Joven";
}

//v. “Adulto” entre 31 y 60 años;
else if (age < 61) {
    message = "Adulto";
}

//vi. “Adulto mayor” entre 61 y 75 años;
else if (age < 75) {
    message = "Adulto mayor";
}

//vii. “Anciano” si es mayor a 75 años
else if (age > 75) {
    message ="Anciano";
}

alert(message);