//card de produtos
function productosUI(productos, id){
    for (const producto of productos) {
        $(id).append(`<div class="card" style="width: 18rem;">
                    <img src="${producto.images}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h4 class="card-title">${producto.nombre}</h4>
                    <p class="card-text">${producto.precio}</p> 
                    <a href="#" id='${producto.id}' class="btn btn-primary btn-compra">COMPRAR</a>
                    </div>
                    </div>`);
    }
    $('.btn-compra').on("click", comprarProducto);
    }
    // COMPRA DE PRODUCTOS
function comprarProducto(e){
    e.preventDefault();
    const idProducto   = e.target.id;
    const seleccionado = carrito.find(p => p.id == idProducto);
    if(seleccionado == undefined){
      carrito.push(productos.find(p => p.id == idProducto));
    }else{
      seleccionado.agregarCantidad(1);
    } 
    //---------Almacenamiento en localstorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
  
    // SALIDA PRODUCTO
    carritoUI(carrito);
  }
  //FUNCION PARA RENDERIZAR LA INTERFAZ DEL CARRITO
  function carritoUI(productos){
    $('#carritoCantidad').html(productos.length);
    $('#carritoProductos').empty();
    for (const producto of productos) {
      $('#carritoProductos').append(registroCarrito(producto));
    }
    //btn sumar, restar,eliminar
    $('.btn-delete').on('click', eliminarCarrito);
    $('.btn-add').on('click', agregraCarrito);
    $('.btn-sub').on('click', restarCarrito);
  
  }
  //FUNCION PARA GENERAR LA ESTRUCTURA DEL REGISTO HTML
function registroCarrito(producto){
    return `<p> ${producto.nombre} 
            <span class="badge badge-warning">$ ${producto.precio}</span>
            <span class="badge badge-dark">${producto.cantidad}</span>
            <span class="badge badge-success"> $ ${producto.subtotal()}</span>
            <a id="${producto.id}" class="btn btn-info btn-add" > + </a> 
            <a id="${producto.id}" class="btn btn-warning btn-sub" > - </a> 
            <a id="${producto.id}" class="btn btn-danger btn-delete"> x </a>         
            </p>`
}
  //Funcion Eliminar
function eliminarCarrito(event) {
    event.stopPropagation()
    carrito = carrito.filter(producto => producto.id != event.target.id);
    carritoUI(carrito);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
}

function agregraCarrito(event) {
    event.stopPropagation();
    let producto= carrito.find(p => p.id == event.target.id);
    producto.agregarCantidad(1);
    $(this).parent().children()[1].innerHTML = producto.cantidad;
    $(this).parent().children()[2].innerHTML = producto.subtotal();
    localStorage.setItem('carrito', JSON.stringify(carrito));  
}

function restarCarrito(event) {
    event.stopPropagation();
    let producto= carrito.find(p => p.id == event.target.id);
    if(producto.cantidad > 1){
    producto.agregarCantidad(-1);
    $(this).parent().children()[1].innerHTML = producto.cantidad;
    $(this).parent().children()[2].innerHTML = producto.subtotal(); 
    localStorage.setItem('carrito', JSON.stringify(carrito));
  
    }  
  };
  
  