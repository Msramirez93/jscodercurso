//DECLARACIÓN DE CLASE PRODUCTO
class Producto {
    constructor(id, nombre, precio, images) {
            this.id = parseInt(id);
            this.nombre = nombre;
            this.precio = parseFloat(precio);
            this.images= images;
            
    }
}