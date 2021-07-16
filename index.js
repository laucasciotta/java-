alert('hola mundo')
// if (true){
//     console.log('dentro del if')
// }

function evaluar() {
    const acepta = confirm('desea entrar?')
    if (acepta){
        console.log('dentro del if')
    } else {
        console.log('dentro del else')
    }

}




// const bool = confirm('desea evaluar?')
// if(bool){
//     evaluar()
// }

let continuar = true 
let contador = 0

while (continuar) {
continuar = confirm('desea continuar?')
if (condition){
    contador = contador + 1;
}

}