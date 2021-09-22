alert ("Benvenidos a tu cursolandia");
//engp = ingles
let engpID = 1;
let engpPrice = 150;
let engpName = 'clases de Ingles';
let engpStock = 20;
let engpCant = 0;
//port = portugues
let portID = 2;
let portPrice = 150;
let portName = 'clases de Portugues';
let portStock = 20;
let portCant = 0;
//adeng= ad (avanzado) ingles 
let adengID = 3;
let adengPrice = 300;
let adengName = 'clases de Ingles avanzado';
let adengStock = 10;
let adengCant = 0;
// avanport =(avanzado) portugues 
let avanportID = 4;
let avanportPrice = 300;
let avanportName= 'clases de Portugues avanzado';
let avanportStock= 10;
let avanportCant =0;

        
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
        '1: Clases de Ingles nivel 1\n'+
        '2: Clases de Portugues nivel 1\n'+
        '3: Clases de Ingles avanzado con un 20% de descuento\n'+
        '4: Clases de Portuges avanzado con un 20% de descuento\n'+
        '\n'+
        '5: Ver carrito\n'+
        '6: Salir'));
        
let cantidad = 0;
switch(menuOpciones){//ingles inicial
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
//portugues inicial                
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
                
//ingles avanzado               
case 3:
    cantidad =  parseInt(product(adengID , adengPrice));
                                
if(cantidad <= adengStock){
    let adengSubTotal = ((adengPrice*0.2)*cantidad);
        alert (`${adengName}\nsubTotal: $${adengSubTotal.toFixed(2)} Pesos`);
        cantProducts(cantidad, menuOpciones);
        total(adengSubTotal);
        
    /*console.log('su precio final para la clase de ingles avanzado  es:'+" " +prodClass.adengPrice);
    prodClass.descuento((prodClass.adengPrice*0.2)*cantidad);
    console.log('su precio final con descuento para ingles avanzado es:'+ " " +prodClass.adengPrice);
    cantProducts(cantidad, menuOpciones);
    total(prodClass.adengPrice);*/
}else{
    alert('ERROR')
}
break;
        
        
//portugues avanzado
case 4:
    cantidad =  parseInt(product(avanportID , avanportPrice));
                                
    if(cantidad <= avanportStock){
        let avanportSubTotal = ((avanportPrice*0.2)*cantidad);
            alert (`${avanportName}\nsubTotal: $${avanportSubTotal.toFixed(2)} Pesos`);
            cantProducts(cantidad, menuOpciones);
            total(avanportSubTotal);
}
// Carrito
case 5: 
    let opcCarrito = parseInt(shopCart(cantProductsTotal))
                    
if (opcCarrito == 1){
    alert('Gracias por su compra!!')
    menuOpciones = 6;
}
break;
                
// Salir    
case 6:
    alert('Muchas gracias por elegirnos!!');
menuOpciones = 6;
break;
                
default:
    alert('Ha ingresado una opción incorrecta o dejo el campo vacío')
break;
    }
}
while(menuOpciones != 6);

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
productos.push(new Producto(4, "Clase de portugues avanzado",300));

console.log(productos);