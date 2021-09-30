//array de productos y objetos
productos.push(new Producto(1, "clases de ingles nivel inicial", 150,"./images/ingles1.jpg" ));
productos.push(new Producto(2, "clases  de portugues nivel inicial", 150,"./images/portugues1.jpg" ));
productos.push(new Producto(3, "clases de ingles avanzado", 300,"./images/ingles2.jpg"));
productos.push(new Producto (4,"clases de portugues avanzado",300,"./images/portugues2.jpg" ));
console.log(productos);

productosUIjQuery(productos, '#productosContenedor');

let botones= $(".btn-compra");
console.log(botones);

for (const boton of botones) {
    boton.onclick=comprarProducto;
}

//Selectores
//Para reemplazar getElementByID(): 
/*console.log($('#productosContenedor'));
console.log(jQuery('#productosContenedor'));
//Para reemplazar getElementsByClassName(): 
console.log($('.card'));
console.log(jQuery('.card'));
//Para reemplazar getElementsByTagName():
console.log($('div'));
console.log(jQuery('div')); */
