const template = document.getElementById("template");
const carrito = document.getElementById("carrito");
const fragment = document.createDocumentFragment();
const btns = document.querySelectorAll(".card-body .btn");

const carritoObjeto = {}

const agregarCarrito = (e)=>{

    const producto = {
        id: e.target.dataset.fruta,
        nombre: e.target.dataset.fruta,
        cantidad: 1
    }

    if(carritoObjeto.hasOwnProperty(producto.nombre)){
        producto.cantidad = carritoObjeto[producto.nombre].cantidad + 1;
    }

    carritoObjeto[producto.nombre]= producto;

    pintarCarrito()
}

const pintarCarrito = () =>{
    
    carrito.textContent = ""
    Object.values(carritoObjeto).forEach(item =>{
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".lead").textContent = item.nombre;
        clone.querySelector(".badge").textContent = item.cantidad;

        fragment.appendChild(clone);
    })
    
    carrito.appendChild(fragment)

}

btns.forEach(item => item.addEventListener("click", agregarCarrito));
