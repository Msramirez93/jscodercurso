let nombre;
const miSitio ='esta pagina';
let numero1 ,numero2,numero3, resultado;
let texto1;
let texto2;
let texto3;

/* desafio 1 usando prompt y alert*/
nombre = prompt("intoduzca su nombre");
alert("Hola " + nombre + '! Bienvenidos/as a ' + miSitio);

/*desafio 2 */
//alert('introzca dos numeros,el mismo sera sumado a 200 y sera visible en su pantalla y la consola');
/*con parseInt*/
//numero1 =parseInt(prompt('introduzca un numero entero:'));
//numero3 =parseInt(prompt('introduzca otro numero entero:'));

/*parseFloat*/
numero1 = parseFloat(prompt('introduzca un numero que contenga decimal'));
numero3= parseFloat(prompt('introduzca otro numero que contenga  decimal:'));

/*operacion*/ 
numero2 = 200;
resultado = numero1 + numero2 +numero3;
alert(numero1 + ' + ' + numero2 + ' + ' +numero3+ ' = ' + resultado);
//console.log(numero1 + ' + ' + numero2 +  ' + ' + numero3 + ' = ' + resultado);

/*desafio 3*/
alert('proporcione su informacion para concatenarlos y mostralos en pantalla a través de un alert() y en la consola.');
texto1 = prompt("Introduzca su nombre");
texto2 = prompt("Introduzca su apellido:");
texto3 =parseInt(prompt("introduzca su edad"));
alert("Resultado de la concatenación: " + texto1 + " " + texto2 +" " + texto3);
console.log("Resultado de la concatenación: " + texto1 + ' ' + texto2 +" "+texto3);

