// Call the dataTables jQuery plugin
$(document).ready(function() {

	cargarUsuarios();

	$('#usuarios').DataTable();
	ActualizarEmailDelUsuario()
});

function ActualizarEmailDelUsuario() {

	document.getElementById('txt-email-usuario').outerHTML = localStorage.email;




}


async function cargarUsuarios() {


	const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/usuarios', {
		method: 'GET',
		headers: getHeaders()

	});
	const usuarios = await request.json();

	console.log(usuarios);


	let listadohtml = '';
	for (let usuario of usuarios) {
		let botonEliminar = '<a href="#" onclick="eliminarUsuario(' + usuario.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
		let botonActualizar = '<a href="#" onclick= "actualizarUsuario(' + usuario.id + ')"class="btn btn-light btn-icon-split"><span class="icon text-gray-600"><i class="fas fa-arrow-right"></i></span><span class="text">  Actualizar</span></a>'
		let cedulaTexto = usuario.cedula == null ? '-' : usuario.cedula;

		let usuariohtml = '<tr><td>' + usuario.id + '</td><td>' + usuario.nick + '</td><td>' + usuario.nombre + '</td><td>' + usuario.email + '</td><td>' + cedulaTexto + '</td><td>' + botonEliminar + '' + botonActualizar + '</td></tr>'
		listadohtml += usuariohtml;



	}
	document.querySelector('#usuarios tbody').outerHTML = listadohtml;

}



async function eliminarUsuario(id) {

	if (!confirm('desea eliminar este usuario?')) {
		return;

	}

	const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/usuarioDelete/' + id, {
		method: 'DELETE',
		headers: getHeaders()

	});

	location.reload();


}

async function actualizarUsuario(id) {

	if (!confirm('desea actualizar este usuario?')) {
		return;

	}


	window.location.href = 'actualizarUsuario.html?id=' + id;


}

async function crearUsuario() {

	if (!confirm('desea crear un nuevo usuario?')) {
		return;

	}


	window.location.href = 'crearUsuario.html?id=' + 'newUser';


}





function getHeaders() {
	return {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': localStorage.token
	}

}


async function buscarUsuario (){
	
	if (document.getElementById('txtCedula').value != ''){
		
		const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/usuarioGetByCedula/'+ document.getElementById('txtCedula').value, {
		method: 'GET',
		headers: getHeaders()

	});
	
	

	const usuarios = await request.json();

	console.log(usuarios);


	let listadohtml = '';
	for (let usuario of usuarios) {
		let botonEliminar = '<a href="#" onclick="eliminarUsuario(' + usuario.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
		let botonActualizar = '<a href="#" onclick= "actualizarUsuario(' + usuario.id + ')"class="btn btn-light btn-icon-split"><span class="icon text-gray-600"><i class="fas fa-arrow-right"></i></span><span class="text">  Actualizar</span></a>'
		let cedulaTexto = usuario.cedula == null ? '-' : usuario.cedula;

		let usuariohtml = '<tr><td>' + usuario.id + '</td><td>' + usuario.nick + '</td><td>' + usuario.nombre
		 + '</td><td>' + usuario.email + '</td><td>' + cedulaTexto + '</td><td>'
	 + botonEliminar + '' + botonActualizar + '</td></tr>'


		listadohtml += usuariohtml;


	}
	document.querySelector('#usuarios tbody').outerHTML = listadohtml;

	
	}else {
		cargarUsuarios()
	}
	
	
}
