//DECLARACIÓN DE CLASE PRODUCTO
class Producto {
    constructor(id, nombre, precio, images) {
            this.id = parseInt(id);
            this.nombre = nombre;
            this.precio = parseFloat(precio);
            this.images= images;
            this.cantidad= 1;
        }
        agregarCantidad(valor){
            this.cantidad += valor; 
        }
        subtotal(){
            return this.cantidad * this.precio;
        }
    }

