// Call the dataTables jQuery plugin
$(document).ready(function() {



});

function ActualizarEmailDelUsuario() {

	document.getElementById('txt-email-usuario').outerHTML = localStorage.email;




}

async function cargarVentasByClientId() {

	id = document.getElementById('txtCedula').value

	const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/FindVentasForClient/'+id, {
		method: 'GET',
		headers: getHeaders()

	});
	const ventas = await request.json();

	let listadohtml = '';

	cabeceraVentas = '<tr><th>Total Venta</th><th>valor Venta</th><th>Nombre Cliente</th></tr>'

	listadohtml += cabeceraVentas

	for (let venta of ventas) {

		let ventahtml = '<tr><td>' + venta.totalVenta + '</td><td>' + venta.valorVenta + '</td><td>' + venta.idCliente.nombre + '</td></tr>'
		listadohtml += ventahtml;
	}


	document.querySelector('#show tbody').outerHTML = listadohtml;




}



async function cargarUsuarios() {


	const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/usuarios', {
		method: 'GET',
		headers: getHeaders()

	});
	const usuarios = await request.json();



	let listadohtml = '';
	cabeceraUsuarios = '<tr><th>ID</th><th>nick</th><th>Nombre Completo</th><th>Email</th><th>Cedula</th></tr>'
	listadohtml += cabeceraUsuarios
	for (let usuario of usuarios) {
		let cedulaTexto = usuario.cedula == null ? '-' : usuario.cedula;

		let usuariohtml = '<tr><td>' + usuario.id + '</td><td>' + usuario.nick + '</td><td>' + usuario.nombre + '</td><td>' + usuario.email + '</td><td>' + cedulaTexto + '</td></tr>'
		listadohtml += usuariohtml;



	}
	document.querySelector('#show tbody').outerHTML = listadohtml;

}

async function cargarClientes() {

	const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/clientes', {
		method: 'GET',
		headers: getHeaders()

	});
	const clientes = await request.json();

	console.log(clientes);

	let listadohtml = '';

	cabeceraClientes = '<tr><th>Cedula</th><th>Direccion</th><th>Nombre Completo</th><th>Email</th><th>Telefono</th></tr>'
	listadohtml += cabeceraClientes


	for (let cliente of clientes) {
		let telefonoTexto = cliente.telefono == null ? '-' : cliente.telefono;

		let usuariohtml = '<tr><td>' + cliente.numeroDocumento + '</td><td>' + cliente.direccion + '</td><td>' + cliente.nombre + '</td><td>' + cliente.email + '</td><td>' + telefonoTexto + '</td></tr>'
		listadohtml += usuariohtml;



	}
	document.querySelector('#show tbody').outerHTML = listadohtml;

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


async function buscarUsuario() {

	if (document.getElementById('txtCedula').value != '') {

		const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/usuarioGetByCedula/' + document.getElementById('txtCedula').value, {
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


	} else {
		cargarUsuarios()
	}


}

