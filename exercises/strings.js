/*a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
texto en mayúscula (utilizar toUpperCase)*/
let name = "Francisco Rose".toUpperCase();

/*b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los primeros 5 caracteres guardando el resultado en una nueva
variable (utilizar substring)*/
let str = "abcdefghij";
let str2 = str.substring(0, 5);

/*c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los últimos 3 caracteres guardando el resultado en una nueva variable
(utilizar substring)*/
let str3 = "abcdefghij";
let str4 = str3.substring(str.length-3);

/*d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con la primera letra en mayúscula y las demás en minúscula. Guardar el
resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
el operador +)*/
let str5 = "abcdefghij";
let str6 = str5.charAt(0).toUpperCase() + str5.substring(1).toLowerCase();

/*e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
variable (utilizar indexOf)*/
let str7 = "Francisco Rose";
let str8 = str7.indexOf(" ");

/*f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
generar un nuevo string que tenga la primera letra de ambas palabras en
mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
toUpperCase, toLowerCase y el operador +)*/
let str9 = "electroencefalografista esternocleidomastoideo";
let espacio = str9.indexOf(" ");
let pala = str9.substring(0, espacio);
let pala2 = str9.substring(espacio + 1);
let palac = pala.substring(0, 1).toUpperCase() + pala.substring(1).toLowerCase();
let pala2c = pala.substring(0, 1).toUpperCase() + pala.substring(1).toLowerCase();

let str10 = palac + " " + pala2c;