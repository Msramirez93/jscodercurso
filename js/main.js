
window.addEventListener('load',()=>{
    //eliminar elemento DOM
    $('#indicadorCarga').remove();
    $('#productosContenedor').fadeIn("slow",()=>{ console.log('ANIMACION FINALIZADA')});
    
})
// forma asincrona(AJAX)
// llamada asincrona para traer los datos de un JSON
$.get("data/productos.json",function (datos, estado) {
    console.log(datos);
    console.log(estado);
    if (estado == "success") {   
        for (const literal of datos) {
            productos.push(new Producto(literal.id, literal.nombre, literal.precio, 1, literal.imagen));
                        
        }
        //GENERAR INTERFAZ DE PRODUCTOS CON UNA FUNCION
        productosUI(productos, '#productosContenedor');
        
    }else{
        console.log('No cargaron los datos');
    }
    
});
//---datos del carrito desde el localStorage
$(document).ready(function () {
    if("carrito" in localStorage){
        const datos= JSON.parse(localStorage.getItem('carrito'));
        for (const literal of datos) {
            carrito.push(new Producto(literal.id, literal.nombre, literal.precio, literal.cantidad, literal.imagen));
        }
        carritoUI(carrito);
    }    
});

//movimiento de la pag, tiempo defenido en segundos
$(document).ready(function () {  
    $(".btn-compra").click(comprarProducto);  
    //---------SCROLL ANIMADO-----------
    $("#Contacto").click(function (e) {
        e.preventDefault();   
        $('html, body').animate({
            scrollTop: $("#contenidoContacto").offset().top
        }, 2000);        
    })
    //bitines arriba y abajo
    $("#arriba").click(function (e) {
        e.preventDefault();        
        $('html, body').animate({
            scrollTop: $(".container").offset().top
        }, 2000);        
    })
});
//$("#ejemplo").animate({fontSize: "30px", opacity: 0.4 },3000).delay(2000).fadeOut(2000);
$("#boton1").on("click", function () {
    $("#ejemplo2").slideToggle(1500);
})