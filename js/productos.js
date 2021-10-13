//DECLARACIÓN DE CLASE PRODUCTO
class Producto {
    constructor(id, nombre, precio,cantidad,images) {
            this.id = parseInt(id);
            this.nombre = nombre;
            this.precio = parseFloat(precio);
            this.cantidad= parseInt(cantidad);
            this.images= images;
        }
        agregarCantidad(valor){
            this.cantidad += valor; 
        }
        subtotal(){
            return this.cantidad * this.precio;
        }
    }

