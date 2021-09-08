/*Consigna: Con los conocimientos vistos hasta el momento, empezarás a armar la estructura inicial de tu proyecto integrador. A partir de los ejemplos mostrados la primera clase, deberás:
Pensar el alcance de tu proyecto: ¿usarás un cotizador de seguros? ¿un simulador de créditos? ¿un simulador personalizado?
Armar la estructura HTML del proyecto.
Incorporar al menos un prompt para pedir un dato y luego mostrarlo mediante alert realizando alguna operación.
Utilizar funciones para realizar esas operaciones.
>>Aspectos a incluir en el entregable:
Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo en JavaScript que emplee funciones para resolver el procesamiento principal del simulador
>>Ejemplo:
Calcular costo total de productos y/o servicios seleccionados por el usuario.
Calcular pagos en cuotas sobre un monto determinado.
Calcular valor final de un producto seleccionado en función de impuestos y descuentos.
Calcular tiempo de espera promedio en relación a la cantidad de turnos registrados.
Calcular edad promedio de personas registradas.
Calcular nota final de alumnos ingresados.*/

alert ("Benvenidos a tu cursolandia");


let engpID = 1;
let engpPrice = 150;
let engpName = 'clases de ingles';
let engpStock = 20;
let engpCant = 0;

let portID = 2;
let portPrice = 150;
let portName = 'clases de portugues';
let portStock = 20;
let portCant = 0;

let adengID = 3;
let adengPrice = 200;
let adengName = 'clases de ingles avanzado';
let adengStock = 10;
let adengCant = 0;


// Funciones
const product = (name, price) => {
    return prompt (`${name}: $${price.toFixed(2)} PESOS\nIngresar Cantidad`);
}


let cantProductsTotal = 0;
const cantProducts = (cantidad, opcion) =>{
    
    cantProductsTotal += cantidad;

    if(opcion == engpID){
        engpCant += cantidad;
    }else if(opcion == portID){
        portCant += cantidad;
    }else{
        adengCant += cantidad;
    }
}


let totalPay = 0;
const total = (ntotal) =>{
    totalPay = totalPay + ntotal;
}

//  Carrito
const shopCart = (nProductsTotal) =>{
    return prompt(`SHOPPING CART\nClases de ingles nivel 1: ${engpCant}\nClases de Portugues nivel 1: ${portCant}\nClases de ingles avanzado: ${adengCant}\n\nCantidad Total: ${nProductsTotal}\n Total: $${totalPay}Pesos\n\n1: Finalizar Compra\n2: Seguir Comprando`)
}




let menuOpciones = 0;
//Menu
do {
    menuOpciones = parseInt(prompt(
        '   Stock PRODUCTOS   \n'+
        '1: Clases de ingles nivel 1\n'+
        '2: Clases de Portugues nivel 1\n'+
        '3: Clases de ingles avanzado\n'+
        '\n'+
        '4: Ver carrito\n'+
        '5: Salir'
    ));

let cantidad = 0;
    switch(menuOpciones){
        
        case 1:
            cantidad =  parseInt(product(engpID , engpPrice));
                        
            if(cantidad <= engpStock){
                let engpSubTotal = engpPrice*cantidad
                alert (`${engpName}\nsubTotal: $${engpSubTotal.toFixed(2)} Pesos`)
                cantProducts(cantidad, menuOpciones);
                total(engpSubTotal);
                // console.log(engpCant)
                // console.log(cantProductsTotal)
                // console.log(totalPay)
            }else{
                    alert('ERROR')
            }
            break;
        
        
        case 2:
            cantidad =  parseInt(product(portName, portPrice));
                        
            if(cantidad <= portStock){
                let portSubTotal = (portPrice*cantidad)
                alert (`${portName}\nsubTotal: $${portSubTotal.toFixed(2)} Pesos`)
                cantProducts(cantidad, menuOpciones);
                total(portSubTotal);
            }else{
                    alert('ERROR')
            }
            break;
        
        
        case 3:
            cantidad =  parseInt(product(adengID , adengPrice));
                        
            if(cantidad <= adengStock){
                let adengSubTotal = (adengPrice*cantidad)
                alert (`${adengName}\nsubTotal: $${adengSubTotal.toFixed(2)} Pesos`)
                cantProducts(cantidad, menuOpciones);
                total(adengSubTotal);
            }else{
                    alert('ERROR')
            }
            break;


        // Carrito
        case 4: 
            let opcCarrito = parseInt(shopCart(cantProductsTotal))
            
            if (opcCarrito == 1){
                alert('Gracias por su compra!!')
                menuOpciones = 5;
            }
            break;
        
        // Salir    
        case 5:
            alert('Muchas gracias por elegirnos!!');
            menuOpciones = 5;
            break;
        
        default:
            alert('Ha ingresado una opción incorrecta o dejo el campo vacío')
            break;

    }


}
while(menuOpciones != 5);
