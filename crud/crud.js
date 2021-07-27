
const emailInput = document.getElementById('email')
const passInput = document.getElementById('pass')
const nombreInput = document.getElementById('nombre')
const rolInput = document.getElementById('rol')
const UsuarioInput = document.getElementById('usuario')
const contenidoTabla = document.getElementById('contenidoTabla')

const usuarioJson = localStorage.getItem('usuarios');
const usuarios = JSON.parse(usuarioJson) || []


function ID() {

    return '_' + Math.random().toString(36).substr(2, 9);
};

function agregarUsuario(event) {
    event.preventDefault();
    const email = emailInput.value;
    const pass = passInput.value;
    const nombre = nombreInput.value;
    const rol = rolInput.value;

    const nuevoUsuario = {
        email: email,
        pass: pass,
        nombre: nombre,
        rol: rol
    };
    registro: Date.now()
    id: ID()
    usuarios.push(nuevoUsuario)
    console.log(" -agregarUsuario - usuarios", usuarios);
    const usuariosJson = JSON.stringify(usuarios);
    console.log(" - agregarUsuario - usuariosJson", usuariosJson);
    localStorage.setItem('usuarios', usuariosJson);
    mostrarUsuarios()
}








function mostrarUsuarios() {
    function armarFilaDeUsuarios(usuario) {
        const fecha = new Date(usuario.registro)
        console.log(new Date(usuario.registro))

        const tr = `
             <tr>
                <th scope="row">1</th>
                <td>${usuario.nombre}</td>
                <td>${usuario.rol}</td>
                <td><button class="btn btn-warning">Editar</button></td>
                <td><button onclick="eliminarUsuario('${usuario.id}')" class="btn btn-danger">eliminar</button></td>
              </tr>
              `;
        return tr;
    }
    const contenido = usuarios.map(armarFilaDeUsuarios)

    contenidoTabla.innerHTML = contenido.join('')
}
function eliminarUsuario(id) {
    console.log(id)
}
mostrarUsuarios()