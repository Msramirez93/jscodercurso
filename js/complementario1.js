//Ejemplo de procesamiento: cálculo de IVA 
//1) Ingresar precio de costo - 2) Sumar IVA - 3) Mostrar precio calculado.
//Ejemplo de procesamiento: determinar si un número es múltiplo 
//1) Ingresar números a verificar - 2) ¿Es múltiplo? - 3) Mostrar resultado.

let precioCosto = parseFloat(prompt('ingrese el precio de costo del producto'));

/*while (true){
    if (!isNaN (precioCosto) && precioCosto != null && precioCosto!=""){
        break;
    }else {
        alert("no es un numero")
    }
    continue;
}*/


//salida
precioCostoM =precioCosto.toFixed(2)
alert("El costo del producto es: $ "+ precioCostoM);
console.log ("El costo del producto es: $ "+ precioCostoM);
document.write("<h2> El costo del producto es: $ "+ precioCostoM + "</h2>" )

//sumar el iva al producto

function clacularIva (precioCosto){

    return precioCosto *0.21;
}
let iva = clacularIva(precioCosto);
ivaM =iva.toFixed(2);

alert("El Iva del producto es: $ "+ ivaM);
console.log ("El Iva del producto es: $"+ ivaM);
document.write("<h2> El Iva del producto es: $"+ ivaM + "</h2>" )

//sumar costo + iva

function sumarIva(precioCosto){
    return precioCosto + precioCosto *0.21;
}

let precioConIva = sumarIva(precioCosto);
precioConIvaM =precioConIva.toFixed(2);

alert("El producto con Iva es: $ "+ precioConIvaM);
console.log ("El producto con Iva es: $ "+ precioConIvaM);
document.write("<h2> El producto con Iva es: $ "+ precioConIvaM + "</h2>" )




/*const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;
// //Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
const iva   = x => x * 0.21;
let precioProducto  = parseInt(prompt('Ingrese el precio del producto')); 
let precioDescuento = 50;  
// //Calculo el precioProducto + IVA - precioDescueto
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioDescuento); 
console.log(nuevoPrecio);*/