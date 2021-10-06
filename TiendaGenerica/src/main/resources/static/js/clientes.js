// Call the dataTables jQuery plugin
$(document).ready(function() {

	cargarUsuarios();

	$('#clientes').DataTable();
	ActualizarEmailDelUsuario()
});

function ActualizarEmailDelUsuario() {

	document.getElementById('txt-email-usuario').outerHTML = localStorage.email;




}


async function cargarUsuarios() {


	const request = await fetch('api/clientes', {
		method: 'GET',
		headers: getHeaders()

	});
	const clientes = await request.json();

	console.log(clientes);


	let listadohtml = '';
	for (let cliente of clientes) {
		let botonEliminar = '<a href="#" onclick="eliminarUsuario(' + cliente.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
		let botonActualizar = '<a href="#" onclick= "actualizarUsuario(' + cliente.id + ')"class="btn btn-light btn-icon-split"><span class="icon text-gray-600"><i class="fas fa-arrow-right"></i></span><span class="text">  Actualizar</span></a>'
		let cedulaTexto = cliente.numeroDocumento == null ? '-' : cliente.numeroDocumento;

		let clientehtml = '<tr><td>' + cedulaTexto + '</td><td>' + 'en proceso' + '</td><td>' + cliente.nombre + '</td><td>' + cliente.email + '</td><td>' + cliente.telefono + '</td><td>' + botonEliminar + '' + botonActualizar + '</td></tr>'
		listadohtml += clientehtml;



	}
	document.querySelector('#clientes tbody').outerHTML = listadohtml;

}



async function eliminarUsuario(id) {

	if (!confirm('desea eliminar este usuario?')) {
		return;

	}

	const request = await fetch('api/usuarioDelete/' + id, {
		method: 'DELETE',
		headers: getHeaders()

	});

	location.reload();


}

async function actualizarUsuario(id) {

	if (!confirm('desea actualizar este usuario?')) {
		return;

	}


	window.location.href = 'actualizar.html?id=' + id;


}

async function crearCliente() {

	if (!confirm('desea crear un nuevo Cliente?')) {
		return;

	}


	window.location.href = 'crearCliente.html?id=' + 'newUser';


}



function getHeaders() {
	return {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': localStorage.token
	}

}


async function buscarCliente (){
	
	if (document.getElementById('txtCedula').value != ''){
		

	
	const request = await fetch('api/clientesByCedula/'+ document.getElementById('txtCedula').value, {
		method: 'GET',
		headers: getHeaders()

	});
	const clientes = await request.json();

	console.log(clientes);


	let listadohtml = '';
	for (let cliente of clientes) {
		let botonEliminar = '<a href="#" onclick="eliminarUsuario(' + cliente.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
		let botonActualizar = '<a href="#" onclick= "actualizarUsuario(' + cliente.id + ')"class="btn btn-light btn-icon-split"><span class="icon text-gray-600"><i class="fas fa-arrow-right"></i></span><span class="text">  Actualizar</span></a>'
		let cedulaTexto = cliente.numeroDocumento == null ? '-' : cliente.numeroDocumento;

		let clientehtml = '<tr><td>' + cedulaTexto + '</td><td>' + 'en proceso' + '</td><td>' + cliente.nombre + '</td><td>' + cliente.email + '</td><td>' + cliente.telefono + '</td><td>' + botonEliminar + '' + botonActualizar + '</td></tr>'
		listadohtml += clientehtml;



	}
	document.querySelector('#clientes tbody').outerHTML = listadohtml;

}else {
		cargarUsuarios()
	}
	
	
}
