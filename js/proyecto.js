alert ("Benvenidos a tu cursolandia");
//engp = ingles
let engpID = 1;
let engpPrice = 150;
let engpName = 'clases de ingles';
let engpStock = 20;
let engpCant = 0;
//port = portugues
let portID = 2;
let portPrice = 150;
let portName = 'clases de portugues';
let portStock = 20;
let portCant = 0;
//adeng= ad (avanzado) ingles 
let adengID = 3;
let adengPrice = 300;
let adengName = 'clases de ingles avanzado';
let adengStock = 10;
let adengCant = 0;
        
        
// Funciones
const product = (name, price) => {
    return prompt (`${name}: $${price.toFixed(2)} PESOS\nIngresar Cantidad de vacantes`);
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
class ProductoClase{
    constructor(adengID,adengName,adengPrice,adengCant){
            this.adengID = adengID;
            this.adengName= adengName;
            this.adengPrice = adengPrice;
            this.adengCant =adengCant;
            
}
descuento(valor){
    this.adengPrice -=valor;
    this.adengCant -=valor;
}
}
const prodClass = new ProductoClase(3,'clases de ingles avanzado',300);
        
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
        '3: Clases de ingles avanzado con un 20% de descuento\n'+
        '\n'+
        '4: Ver carrito\n'+
        '5: Salir'));
        
let cantidad = 0;
switch(menuOpciones){
    case 1:
    cantidad =  parseInt(product(engpID , engpPrice));
                                
    if(cantidad <= engpStock){
        let engpSubTotal = engpPrice*cantidad
        alert (`${engpName}\nsubTotal: $${engpSubTotal.toFixed(2)} Pesos`)
        cantProducts(cantidad, menuOpciones);
            total(engpSubTotal);
                
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
    let adengSubTotal = ((adengPrice*0.2)*cantidad);
        alert (`${adengName}\nsubTotal: $${adengSubTotal.toFixed(2)} Pesos`);
        cantProducts(cantidad, menuOpciones);
        total(adengSubTotal);
        
        /*console.log('su precio final para la clase de ingles avanzado  es:'+" " +prodClass.adengPrice);
    prodClass.descuento(prodClass.adengPrice*cantidad*0.2);
    console.log('su precio final con descuento para ingles avanzado es:'+ " " +prodClass.adengPrice);
    cantProducts(cantidad, menuOpciones);
    total(prodClass.adengPrice);*/
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

class Producto {
    constructor(id, nombre, precio) {
            this.id = parseInt(id);
            this.nombre = nombre;
            this.precio = parseFloat(precio);
    }
}
const productos=[];//Declarar un array vacio
//Agrego objetos dentro de un array
productos.push(new Producto(1, "Clase de ingles basico",150 ));
productos.push(new Producto(2, "Clase de portugues", 150));
productos.push(new Producto(3, "Clase de ingles avazando", 300));

console.log(productos);