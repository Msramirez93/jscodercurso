
//productos escondidos
$('#productosContenedor').hide();

//Utilizo una llamada asincrona desde JSON
$.get("../data/productos.json", function (respuesta, estado) {
    console.dir(respuesta);   
    console.log(estado);
    
    if(estado == "success"){
        for (const objeto of respuesta) { 
            productos.push( new Producto(objeto.id, objeto.nombre, objeto.precio, objeto.imagen, objeto.categoria, objeto.cantidad ) );
        }  
        //GENERAR INTERFAZ DE PRODUCTOS CON UNA FUNCION
        productosUI(productos, '#productosContenedor');
    }else{
        console.log('Los datos no se cargaron correctamente');
    }  
    
});

$(document).ready(function () {
    $(".btn-compra").click(comprarProducto);  
    //---------SCROLL ANIMADO-----------
    $("#Contacto").click(function (e) {
        e.preventDefault();   
        $('html, body').animate({
            scrollTop: $("#contenidoContacto").offset().top 
        }, 2000);        
    })
    $("#arriba").click(function (e) {
        e.preventDefault();        
        $('html, body').animate({
            scrollTop: $(".container").offset().top 
        }, 2000);        
    })


});

$(window).on('load',function () {    
    $("#espera").remove(); 
    $('#productosContenedor').fadeIn(2000, 
        //Agrego una funcion callback
        function () {console.log("Funcionalidad Callback")
        
    });
});

//Manejo del metodo Toggle desde un boton
$("#boton1").on("click", function () {
    $("#ejemplo2").slideToggle(1500);
})
// encadenamiento de animaciones
$("#ejemplo").animate({fontSize: "30px", opacity: 0.4 },3000).delay(2000).fadeOut(2000);

selectUI(categorias,"#selectCategoria");

$("#selectCategoria").on("change", buscarCategoria)





