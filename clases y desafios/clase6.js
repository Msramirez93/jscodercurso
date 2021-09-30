class Producto{
    constructor(id, nombre, precio){
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
}
const producto1 = new Producto(1, "DONA", 60);
const productos= [];//array  de objetos
productos.push(new Producto(1, "DONA", 60));
productos.push(new Producto(2, "PAN", 100));
productos.push(new Producto(3, "FLAN", 150));
productos.push(new Producto(4, "PAN DULCE", 300));
console.log(productos);
for (const producto of productos) {
    console.log(producto.nombre);
}

const numeros=[1,2,3,4,5,6,7,8,9,10];

const encontrado = numeros.find(elemento => elemento >3);
console.log(encontrado);

const encontradoFilter = numeros.filter(elemento => elemento >3);
console.log(encontradoFilter);

const pruebaMap = numeros.map(elemento => elemento *2);
console.log(pruebaMap);