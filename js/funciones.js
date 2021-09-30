//FUNCION PARA GENERAR LA INTERFAZ DE PRODUCTOS 
//--------------CON JQUERY----------------------------/
function productosUIjQuery(productos, id){
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
    //Funciona manejadora del evento click 
function comprarProducto(event) {
    event.preventDefault();
    let encontrado= productos.find(producto => producto.id == event.target.id);
    localStorage.setItem('idProducto',JSON.stringify(encontrado) );
    carrito.push(encontrado);
    carritoUI(carrito); 
}
  //Funcion para generar la interfaz
function carritoUI(carrito) {
    $("#carritoCantidad").html(carrito.length);
    $("#carritoProductos").empty();
    for (const producto of carrito) {
    $("#carritoProductos").append(`<p> ${producto.nombre} - ${producto.precio}</p>`);
    
    }
}