

const stockDeProductos = [
    {
        id: 1,
        nombre: "Pikachu",
        cantidad: 1,
        precio: 1599,
        img: "sources/img/Pikachu.jpg",
    },
    {
        id: 2,
        nombre: "Charmander",
        cantidad: 1,
        precio: 5599,
        img: "sources/img/Charmander.jpg",
    },
    {
        id: 3,
        nombre: "Mew",
        cantidad: 1,
        precio: 2399,
        img: "sources/img/Mew.jpg",
    },
    {
        id: 4,
        nombre: "Charizard",
        cantidad: 1,
        precio: 4999,
        img: "sources/img/Charizard.jpg",
    },
    {
        id: 5,
        nombre: "Dragonite",
        cantidad: 1,
        precio: 3299,
        img: "sources/img/Dragonite.jpg",
    },
    {
        id: 6,
        nombre: "Evee",
        cantidad: 1,
        precio: 899,
        img: "sources/img/Evee.jpg",
    },
    {
        id: 7,
        nombre: "Bulbasaur",
        cantidad: 1,        
        precio: 2599,
        img: "sources/img/Bulbasaur.jpg",
    },
    {
        id: 8,
        nombre: "Squirtle",
        cantidad: 1,
        precio: 1099,
        img: "sources/img/Squirtle.jpg",
    },
    {
        id: 9,
        nombre: "Mudkip",
        cantidad: 1,        
        precio: 4500,
        img: "sources/img/mudkip.jpg",
    },
    {
        id: 10,
        nombre: "Teddiursa",
        cantidad: 1,        
        precio: 899,
        img: "sources/img/teddiursa.jpg",
    },
    {
        id: 11,
        nombre: "Psyduck",
        cantidad: 1,        
        precio: 2599,
        img: "sources/img/psyduck.jpg",
    },
    {
        id: 12,
        nombre: "Umbreon",
        cantidad: 1,        
        precio: 2599,
        img: "sources/img/umbreon.jpg",
    },
    {
        id: 13,
        nombre: "Vulpix",
        cantidad: 1,        
        precio: 1699,
        img: "sources/img/vulpix.jpg",
    },
    {
        id: 14,
        nombre: "Pikakashi",
        cantidad: 1,        
        precio: 7999,
        img: "sources/img/pikakashi.jpg",
    }
]

let carrito = [];

const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector('#CarritoContenedor');
const vaciarCarrito = document.querySelector('#vaciarCarrito');
const precioTotal = document.getElementsByClassName('precioTotal');
const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
const procesarCompra = document.querySelector('#procesarCompra');


  document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
    mostrarCarrito();
    document.querySelector("#activarFuncion").click(procesarPedido);
  });


  if (procesarCompra) {
    procesarCompra.addEventListener('click', () => {
      if (carrito.length === 0) {
        Swal.fire({
          title: "¡Tu carrito está vacio!",
          text: "Compra algo para continuar con la compra",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      } else {
        location.href = "compra.html";
        procesarPedido()
      }
    });
  }

  if (vaciarCarrito){
    vaciarCarrito.addEventListener('click', () => {
        carrito.length = [];
        mostrarCarrito();
    });
    }
    

    
stockDeProductos.forEach((prod) =>{
    const {id, nombre, precio, img, cantidad} = prod;
    if (contenedor) {
        contenedor.innerHTML += `
        <div class="card mt-3" style="width: 18rem;">
        <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">Precio: ${precio}</p>
        <p class="card-text">Cantidad: ${cantidad}</p>
        <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar Producto</button>
        </div>
        </div>
        `;
    }
});



function agregarProducto(id){

    const existe = carrito.some(prod => prod.id === id)

    if(existe){
        const prod = carrito.map(prod => {
            if(prod.id === id){
                prod.cantidad ++
            }
        })
    }else{
        const item = stockDeProductos.find((prod) => prod.id === id)
    carrito.push(item)
    }
    
    mostrarCarrito()
}

function eliminarProducto(id){
    const pokemonId = id
    carrito = carrito.filter((pokemon) => pokemon.id !== pokemonId)
    mostrarCarrito()
}

function guardarStorage(){
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

function procesarPedido() {
    carrito.forEach((prod) => {
      const listaCompra = document.querySelector("#lista-compra tbody");
      const {id, nombre, precio, img, cantidad} = prod;
      if (listaCompra) {
        const row = document.createElement("tr");
        row.innerHTML += `
                <td>
                <img class="img-fluid img-carrito" src="${img}"/>
                </td>
                <td>${nombre}</td>
              <td>${precio}</td>
              <td>${cantidad}</td>
              <td>${precio * cantidad}</td>
              `;
        listaCompra.appendChild(row);
      }
    });
    totalProceso.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
  }
  

const mostrarCarrito = () => {
    const modalBody = document.querySelector('.modal .modal-body');

    if(modalBody){
    modalBody.innerHTML = ''
    carrito.forEach((prod) => {
        const {id, nombre, img, cantidad, precio} = prod
        modalBody.innerHTML += `
        <div class="modal-contenedor">
        <div>
        <img class"img-fuid" id="img-carrito" src="${img}"/>
        </div>
        <div>
        <p>Producto: ${nombre}</p>
        <p>Precio: ${precio}</p>
        <p>Cantidad: ${cantidad}</p>

        <button onclick="eliminarProducto(${id})" class"btn btn-danger">Eliminar del carrito</button>
        </div>
        `
    })
}

    if(carrito.length === 0){
        modalBody.innerHTML = `
        <p class="text-center text-primary parrafo">No hay nada agregado!</p>
        `
    }

    carritoContenedor.textContent = carrito.length;

    if (precioTotal) {
        precioTotal.innerText = carrito.reduce(
          (acc, prod) => acc + prod.cantidad * prod.precio,
          0
        );
      }

    guardarStorage();
};


