//FUNCION PARA GENERAR LA INTERFAZ DE PRODUCTOS 
function productosUI(productos, id){
    for (const producto of productos) {
        $(id).append(`<div class="card" style="width: 18rem;">
                    <img src="${producto.images}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h4 class="card-title">${producto.nombre}</h4>
                    <p class="card-text">Precio: $${producto.precio}</p> 
                    <span class="badge badge-warning">
                                    ${producto.categoria}</span>                   
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
// boton confirmar al carrito
$('#carritoProductos').append(`<button id="btnConfirmar">Confirmar</button>`);
// boton confirmar
$("#btnConfirmar").on("click",enviarCompra);

//Creo una funcion para manejar el evento click en el boton confirmar
function enviarCompra() {
    $.post("https://jsonplaceholder.typicode.com/posts",JSON.stringify(carrito),function(respuesta,estado) {
        console.log(estado);
        console.log(respuesta);
        
        if(estado == "success"){
        $('#carritoProductos').empty();
        $('#carritoCantidad').html("0");
        }else{
        console.log('Los datos no se enviaron correctamente');
        }    
    
    })  
    }
    
    function selectUI(lista, selector) {
    $(selector).empty();
    for (const categoria of lista) {
        $(selector).append(`<option>${categoria}</option>`);    
    }
    $(selector).prepend(`<option selected>TODOS</option>`);  
    }
    
    function buscarCategoria() {
    
    //----------Codigo de filtro con animaciones  
    let valor=this.value;
    
    $("#productosContenedor").fadeOut(2000,function () {
        
        if(valor != "TODOS"){
        
        let filtrados= productos.filter(producto => producto.categoria == valor);
        
        productosUI(filtrados,"#productosContenedor");
        }else{
        
        productosUI(productos,"#productosContenedor");
        }    
    }).fadeIn(2000);
    
    }
    
    