/*desafio 1*/
//Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.
let numero1;
let texto;

//alert("ingrese un numero y si es mayor a 3000 se mostrara una alert")

//numero1 = parseInt(prompt("Por favor ingrese un numero"));

/*ejercicio 1*/ 
//if(numero1 > 3000){
    //alert("El numero"+" "+numero1+" "+"es mayor a 3000.");
//}else{
  //  alert("El numero"+ " "+ numero1+" "+"no es mayor a 3000.");
//}
//Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola.

/*ejercicio 2*/
/*alert("ingrese un texto y si es igual a Banana se mostrara un Alert")
texto = prompt("Ingrese un texto:");
texto = texto.toLowerCase(); // HOLA hola hOAl hola Hola hola
texto = texto.toUpperCase(); (texto == "BANANA");

(texto == "Banana" || texto == "banana" || texto == "BANANA");
if (texto == "banana") {
     alert("El que fue ingresado por el usuario fue 'Banana' :)");
      console.log("El texto ingresado por el usuario fue 'Banana' :)");
} else {
       alert("Error, El texto ingresado por el usuario es distinto de 'Banana' :(");
        console.log("Error, no es el texto correcto 'Banana' :(");
     }*/
//Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.

alert("ingrese un numero y si su numero esta entre 100 y  120  se mostrara una alert")

numero1 = parseInt(prompt("Por favor ingrese un numero"));

if (numero1 >=100 && numero1 <=120){
    alert ("El numero que ingreso"+" "+ "se encuentra entre el rango estabelecido");
    console.log ("El numero que ingreso"+" "+ "se encuentra entre el rango estabelecido");

}else{
    alert("El numero que ingreso"+" "+numero1+" "+"es incorrecto recargue la pagina y vuelva a intentarlo");
    console.log ("El numero que ingreso"+" "+numero1+" "+"es incorrecto recargue la pagina y vuelva a intentarlo");
}