const titulo = document.getElementById('titulo')
const contenedor = document.getElementById('contenedor')

//  TABLA 
const tableBody = document.getElementById('tabla-contenedor')


//array de productos 
let stockProductos = [
    {id: 1, nombre: "clases de ingles nivel inicial", tipo: " clases", desc: "clases", precio: 150, nivel: "1", img: '../images/ingles1.jpg'},
    {id: 2, nombre: "clases  de portugues nivel inicial", tipo: "clases", desc: "clases", precio: 150, nivel: "1", img: '../images/portugues1.jpg'},
    {id: 3, nombre: "clases de ingles avanzado", tipo: "clases", desc: "clases", precio: 300, nivel: "2", img: '../images/ingles2.jpg'},
    {id: 4, nombre: "clases de portugues avanzado", tipo: "clases", desc: "clases", precio: 300, nivel: "2", img: '../images/portuges2.jpg'},
]


// Recorro my array de objetos y los pinto en la card de forma dinamica, el boton tiene un evento de onclick 
stockProductos.forEach( (prod) => {

    const div = document.createElement('div')
    div.className = "card"
    div.style = "width: 18rem "

    //utiliza el boton onclick en agregar al carrito

    div.innerHTML = `
            <img src="./images/ingles1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${prod.nombre}</h5>
                <p class="card-text">${prod.desc}</p>
                <p class="card-text">Precio: $${prod.precio}</p>
                <button onclick="agregarAlCarrito(${prod.id})" class="btn btn-dark bttcompra"> Agregar al carrito </button> 
            </div>
    `
    contenedor.appendChild(div)

})
let botones = document.getElementsByClassName('bttcompras');
console.log(botones);

const carrito = []

// Funcion agregar al carrito, se hace una bbusqueda por id. 
function agregarAlCarrito(prodId) {
    let producto = stockProductos.find( (el) => el.id === prodId )
    carrito.push( producto )

    mostrarCompra()
}

// Funcion para pintar en mi HTML los productos que se agregaron al array carrito
const mostrarCompra = () => {
    tableBody.innerHTML = "";
    // Utilizamos Solucion 2 - Cosas dinamicas
    carrito.forEach( (prod) => {
        const tr = document.createElement('tr') // Creo un nodo padre
        tr.className = "table-primary"
        tr.innerHTML = `
            <th scope="row">${prod.id}</th>
            <td>${prod.nombre}</td>
            <td>${prod.tipo}</td>
            <td>${prod.precio}</td>      
        `
        tableBody.appendChild(tr)
    })

}
//validar el formulario que nos lleva a la pagina recibe.html
let miFormulario = document.getElementById ("formulario");
miFormulario.addEventListener("submit",validarFormulario);

function validarFormulario (e){
    e.preventDeFault();
    console.log("Formulario Enviando");
}

