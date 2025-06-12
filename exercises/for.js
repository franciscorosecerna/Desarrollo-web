/*a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un
bucle for de JavaScript para mostrar una alerta utilizando cada una de las
palabras*/
let pal = ["Pala1", "Pala2", "Pala3", "Pala4", "Pala5"];
pal.forEach((x)=>alert(x));

/*b. Al array anterior convertir la primera letra de cada palabra en mayúscula y
mostrar una alerta por cada palabra modificada*/
pal.forEach(palabra => {
  let mod = palabra.charAt(0).toUpperCase() + palabra.slice(1);
  alert(mod);
});

/*c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array
del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de
la variable sentence. Al final mostrar una única alerta con la cadena completa*/
let sentence = "";

pal.forEach((x) => sentence += x);
alert(sentence);

/*d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con
el número de la repetición, es decir que al final de la ejecución del bucle for
debería haber 10 elementos dentro del array, desde el número 0 hasta al número*/
let ar = [];
for (let i = 0; i < 10; ++i){
    ar.push(i);
}

/*f. Mostrar por la consola del navegador el array final (utilizar console.log)*/
console.log(ar);