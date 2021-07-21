const inputNombre = document.getElementById('inputName');
const inputPrecio =document.getElementById('inputPrice')
const formProducto = document.getElementById('formProducto')
const tbody = document.getElementById('contenidoTabla')

//console.log(" - inputNombre" , inputNombre.value);



function agregarProductos(event) {
    event.preventDefault()
    console.log(" - inputNombre", inputNombre.value);
    console.log(" - inputPrecio", inputPrecio.value);

}

//formProducto.onsubmit =function agregarProducto;
