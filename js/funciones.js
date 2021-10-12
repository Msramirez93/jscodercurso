//FUNCION PARA GENERAR LA INTERFAZ DE PRODUCTOS 
function productosUI(productos, id){
    for (const producto of productos) {
        $(id).append(`<div class="card" style="width: 18rem;">
                    <img src="${producto.images}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h4 class="card-title">${producto.nombre}</h4>
                    <p class="card-text">Precio: $${producto.precio}</p>                   
                    <a href="#" id='${producto.id}' class="btn btn-primary btn-compra">COMPRAR</a> 
                    </div>
                    </div>`);
    }
    }
   // COMPRA DE PRODUCTOS
function comprarProducto(event){
    
    event.preventDefault();
    
    const idProducto   = event.target.id;
    
    const existe=carrito.find(producto => producto.id ==idProducto);
    
    if (existe == undefined) {
        const seleccionado = productos.find(producto => producto.id == idProducto);
        carrito.push(seleccionado);    
    }else{
        existe.agregarCantidad(1);
    }

    //SALIDA PRODUCTO
    carritoUI(carrito);
}
function carritoUI(productos){

    $('#carritoCantidad').html(productos.length);
    //VACIAR EL INTERIOR DEL CUERPO DEL CARRITO;
    $('#carritoProductos').empty();
    for (const producto of productos) {
        $('#carritoProductos').append(`<p> ${producto.nombre} 
                                    <span class="badge badge-warning">
                                    $ ${producto.precio}</span>
                                    <span class="badge badge-primary">
                                    Cantidad: ${producto.cantidad}</span>
                                    <span class="badge badge-success">
                                    Subtotal: ${producto.subtotal()}</span>                                
                                    
                                    
                                    </p>`);
    }
}

