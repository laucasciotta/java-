const emailInput = document.getElementById('email')
const passInput = document.getElementById('pass')
const nombreInput = document.getElementById('nombre')
const rolInput = document.getElementById('rol')
const contenidoTabla = document.getElementById('contenidoTabla')

const usuarios =[]

function agregarUsuario(event){
    event.preventDefault();
    const email = emailInput.nodeValue;
    const pass = passInput.nodeValue;
    const nombre = nombreInput.nodeValue;
    const rol = rolInput.nodeValue;

    const nuevoUsuario = { 
        email: email,
         pass: pass, 
         nombre: nombre, 
         rol: rol};

         usuarios.push(nuevoUsuario)
          
         event.target.reset()
         mostrarUsuarios()

         console.log(" -agregarUsuario - usuarios", usuarios)

    }

function mostrarUsuarios(){
    function mapeoDeUsuarios(usuario){
    
       const tr =`
             <tr>
                <th scope="row">1</th>
                <td>${usuario.nombre}</td>
                <td>${usuario.rol}</td>
                <td><button class="btn btn-warning">Editar</button></td>
              </tr>
              `;
              return tr;
    }
    const contenido = usuarios.map(armarFilaDeUsuarios)
  
     contenidoTabla.innerHTML = contenido.join('')
}