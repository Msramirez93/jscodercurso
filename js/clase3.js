//Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado

//un numero 10 veces mediante prompt
// sumar un numero en cada repeticion


//for
/*let numero1 = parseInt(prompt("ingrese un numero para que sea sumado en cada interaccion"));

let suma = 0;

for (let i=0; i < 10; i++){
    let numero2 = parseInt(prompt("ingrese el numero para sumar"));

    resultado = numero1 + numero2;

    console.log (resultado);
} */

//while

//Pedir un texto mediante prompt, 
//concatenar un valor en cada repetición, realizando una salida por cada resultado,
// hasta que se ingresa “ESC”.

/*let texto = prompt("ingresar un texto");
let resultado = texto;
let textoConcatenar = "";

while(textoConcatenar != 'STOP'){
    textoConcatenar = prompt("ingrese un texto para concatenar al iniciar");
    resultado = resultado + " " + textoConcatenar;

    console.log (resultado);
}*/

//Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.

let numero1 = parseInt(prompt("ingrese un numero para repetir el mensaje "));

for (let i =1; i <= numero1; i++){
    console.log ("Buen dia")
}