const productos = [
    {nombre: "pikachu", precio: 1599},
    { nombre: "dragonite", precio: 2599},
    {nombre: "Charizard", precio: 3599},
    {nombre: "Umbreon", precio: 599},
    {nombre: "Evee", precio: 1599},
    {nombre: "Mewtwo", precio: 2599},
    {nombre: "Charmander", precio: 1999},
    {nombre: "squirtle", precio: 4599}
];
let carrito = [];

let seleccion = prompt("Hola, desea comprar algún Pokemón? Si o no:");

while(seleccion != "Si" && seleccion != "si" && seleccion != "No" && seleccion != "no"){
    seleccion = prompt("Hola, desea comprar algún Pokemón? Si o no:");
}

if (seleccion == "si"){
    alert("A continuacion nuestra lista de Pokemones:");
    let todoslosProductos = productos.map(
        (producto) => producto.nombre + " " + producto.precio + "$");
    alert(todoslosProductos.join(" - "))
}else if (seleccion == "no"){
    alert("Gracias por la visita, vuelva pronto!")
}

while(seleccion != "no"){
    let producto = prompt("Ingresá el nombre del pokemon!")
    let precio = 0

    if(producto == "pikachu" || producto == "dragonite" || producto == "charizard" || producto == "umbreon" || producto == "evee" || producto == "mewtwo" || producto == "charmander" || producto == "squirtle") {
        switch(producto){
            case "pikachu":
            precio = 1599
            break;
            case "dragonite":
            precio = 2599
            break;
            case "charizard":
            precio = 3599
            break;
            case "umbreon":
            precio = 599
            break;
            case "evee":
            precio = 1599
            break;
            case "mewtwo":
            precio = 2599
            break;
            case "charmander":
            precio = 1999
            break;
            case "squirtle":
            precio = 4599
            break;
        default:
            break;
        }
        let unidades = parseInt(prompt("Ingrese la cantidad de unidades:"));

        carrito.push({producto, unidades, precio})
    }else{
        alert("No tenemos ese pokemon")
        producto = prompt("Ingresá el nombre del pokemon!")
    }

    seleccion = prompt("Desea ingresar otro Pokemón? Si o No:")

    while(seleccion == "no"){
        alert("Gracias por su compra!")
        carrito.forEach((carritoFinal) => {
            alert(`producto: ${carritoFinal.producto}, cantidad: ${carritoFinal.unidades}, total a pagar por ${carritoFinal.unidades}: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break; 
    }

}

const precioFinal = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)

alert("El total a pagar es: " + "$" + precioFinal);
