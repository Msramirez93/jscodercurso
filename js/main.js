//array de productos y objetos
productos.push(new Producto(1, "clases de ingles nivel inicial", 150,"./images/ingles1.jpg" ));
productos.push(new Producto(2, "clases  de portugues nivel inicial", 150,"./images/portugues1.jpg" ));
productos.push(new Producto(3, "clases de ingles avanzado", 300,"./images/ingles21.jpg"));
productos.push(new Producto(4,"clases de portugues avanzado",300,"./images/portugues2.jpg" ));
console.log(productos);

//Utilizo el metodo HIDE para ocultar todo lo que esta en el div productosContenedor
//$('#productosContenedor').hide();

//GENERAR INTERFAZ DE PRODUCTOS CON UNA FUNCION
productosUI(productos, '#productosContenedor');

$(document).ready(function () {
    
    $(".btn-compra").click(comprarProducto);  
    //---------SCROLL ANIMADO-----------
    //1° USO UN SELECTOR PARA LLAMAR AL BOTON O ENLACE QUE QUIERO USAR Y LE ASOCIO EL EVENTO CLICK
    $("#Contacto").click(function (e) {
    e.preventDefault();
    $('html, body').animate({
            scrollTop: $("#contenidoContacto").offset().top
        }, 2000);        
    })
    //1° USO UN SELECTOR PARA LLAMAR AL BOTON O ENLACE QUE QUIERO USAR Y LE ASOCIO EL EVENTO CLICK
    $("#arriba").click(function (e) {
        e.preventDefault();        
        $('html, body').animate({
            //2° ANIMO LA PROPIEDAD scrollTop POSICIONANDOLO EN EL BORDE DE contenidoContacto
            scrollTop: $(".container").offset().top 
            //3° DEFINO UN TIEMPO DE DOS SEGUNDOS PARA LA ANIMACION 
        }, 2000);        
    })


});

$(window).on('load',function () {    
    $("#espera").remove(); 
    //AGREGO FADEIN PARA QUE SE MUESTREN LOS PRODUCTOS OCULTOS 
    $('#productosContenedor').fadeIn(2000, 
        //Agrego una funcion callback
        function () {console.log("Funcionalidad Callback")
        
    });
});

//$('#ejemplo').show();
//$('#ejemplo').fadeOut(4000,function () {console.log('Hola mundo')} );

//Manejo del metodo Toggle desde un boton
$("#boton1").on("click", function () {
    $("#ejemplo2").slideToggle(1500);
})
//Ejemplo de encadenamiento de animaciones
$("#ejemplo").animate({fontSize: "30px", opacity: 0.4 },3000).delay(2000).fadeOut(2000);



