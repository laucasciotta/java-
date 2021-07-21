// console.log('hola mundo');

// console.log() es una función para mostrar mensajes o datos en la consola del navegador.

// console.log(); alert(); prompt(); confirm(); son funciones definidas en el navegador que podemos utilizar.

// alert('Esto es un alerta');

let texto = "¿Desea continuar?";


// let booleano = confirm(texto);

texto = "Otro texto";

// console.log(texto, booleano);

// console.log(texto + 'Más texto')
//----------


let numero = 1000; // dato de tipo number

let resultado = numero + 10; // primero se ejecuta la división y por último se asigna el resultado a la variable.

// console.log('Resultado: ' + resultado); // primero se concatenan los valores y el resultado es mostrado en consola.

// let textoDelUsuario = prompt('Ingrese un mensaje');

// console.log("textoDelUsuario", textoDelUsuario)


function mostrarHola() {
    let hola = 'hola mundo'
    console.log(hola)
}

// mostrarHola();

function mostrarMensaje(mensaje) {
    alert('El mensaje es: ' + mensaje)
}

mostrarMensaje('hola mundo');

let nombre = 'csctt'
let edad = 26
alert(nombre + edad)


const numeroIngresado = prompt('ingrese un numero')
console.log("numero")


function ejercicio3() {
    let continuar = true
    while (continuar) {
        continuar = confirm('desea continuar?')
        if (continuar) {
            contador = contador + 1
        }

    }

}
function ejercicioEnClase() {
    const repeticiones = 10
    for (let indice = 0; indice < repeticiones; indice++) {
        console.log(indice);
    }
}
function ejercicioArray() {
    const repeticiones = 2
    const negativos = []
    const positivos = []
    const multiples = []
    const pares = []
    for (let indice = o; indice < repeticiones; indice++) {
        const numeroIngresado = prompt('ingresa un numero');
        const esNegativo = numeroIngresado < 0;
        const esPositivo = numeroIngresado > 0;
        if (esNegativo) {
            negativos.push(numeroIngresado);

        }
        if (esPositivo) {
            positivos.push(numeroIngresado);
        }
        const esMultiplo15 = esPositivo && numeroIngresado % 15 == 0;
        if (esMultiplo15) {
            esMultiplo15.push(numeroIngresado);
        }
        const esPar = numeroIngresado % 2 == 0;
        if (esPar) {
            pares.push(numeroIngresado);
        }
    }
    console.log('la cantidad de Negativos es: ', negativos.length);
    console.log('Los nNegativos con:', negativos);
}
function calculoAprobados() {
    const cantidadAlumnos = parseInt(prompt('ingrese la cantidad de alumnos'));
    const notas = []

    for (let i = 0; i < cantidadAlumnos; i++) {
        const nota = prompt('ingrese la nota')
        notas.push(nota)

    }
    let cantidadAprobados = 0
    for (let index = 0; index < notas.length; index++) {
        const nota = notas[index];
        if (nota >= 6) {
            cantidadAprobados = cantidadAprobados + 1;
        }
    }
    console.log('Del total de alumnos' + notas.length + ', la cantidad de aprobados es: ' + cantidadAprobados)
    console.log(`del total de alumnos $(notas.lenght), la cantidad de aprobados es: ${cantidadAprobados}`)
}



const productos = [{
    nombre: 'manzana'
    ,precio: 100

}, {
    nombre: 'naranja'
    ,precio: 50
},{
    nombre:'limon'
    ,precio:90
}
]
function agregarProductos() {
    const nombreProducto = prompt('ingrese nombre de producto')
    const precioProducto = parseInt(prompt('ingrese precio del producto'))
    const producto = { nombre: nombre , precio: precioProducto };
    productos.push(producto)
    console.log(productos)
}

function mostrarListado() {
    console.log(productos)
    for (let i = 0; i < productos.length; i++){
    const producto = productos[i]
    console.log(`codigo: ${i}, ${producto.nombre}, $${producto.precio}`)
    }
}
const listaCompras =[

]

// seleccionar producto del listado 
 
function seleccionarProducto() {
    const codigo = prompt('ingrese un codigo de producto');
    console.log (" - seleccionarProducto - codigo", codigo);
    console.log(productos[codigo]);
    listaCompras.push(codigo);
    console.log(`el producto seleccionado: $${producto.nombre}`);

}

function calcularTotalCompra(){
 let total = 0;

    for (let i = 0; i < listaCompra.length; i++){
    
        const codigo = listaCompras[i];
        const producto = productos[codigo];

        console.log("-calcularTotalCompra- producto", producto )
    total = total + producto.precio 
    }
     console.log(`èl total de la compra es : $${total}`)
}