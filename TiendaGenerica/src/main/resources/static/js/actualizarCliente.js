/**
 * 
 *//**
 * 
 */

	var URLsearch = window.location.search;
	var id =String(URLsearch)
	var id = id.slice(4)
	

$(document).ready(function() {

	cargarCliente(id);
	cargarTipoDeDocumento()
	

});





async function cargarCliente(id) {
	const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/clientesById/'+id, {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}

	});
	
	const cliente = await request.json();
	let telefonoTexto= cliente.numeroDocumento == null? '-': cliente.numeroDocumento;

	$("#txtTipoDocumento").val(cliente.idTipoDocumento.id)
	$("#txtCedula").val(telefonoTexto)
	$("#txtNombre").val(cliente.nombre)
	$("#txtEmail").val(cliente.email)
	$("#txtTelefono").val(cliente.telefono)
	$("#txtDireccion").val(cliente.direccion)
	
	

	
	console.log(cliente.idTipoDocumento);

	return cliente;
}

async function actualizarCliente () {


	
	let datos = {};
	datos.id = id
	datos.idTipoDocumento = document.getElementById("txtTipoDocumento").value;
	datos.numeroDocumento = document.getElementById('txtCedula').value;
	datos.email = document.getElementById('txtEmail').value;
	datos.nombre = document.getElementById('txtNombre').value;
	datos.direccion = document.getElementById('txtDireccion').value;
	datos.telefono = document.getElementById('txtTelefono').value;
	
	
	

		const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/updateCliente/'+ id, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		
		body: JSON.stringify(datos)

	});
	console.log(datos)
 window.location.href = 'clientes.html'
	
	
}

function getHeaders() {
	return {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': localStorage.token
	}

}

async function cargarTipoDeDocumento() {



	const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/TipoDeDocumento/', {
		method: 'GET',
		headers: getHeaders()

	});
	const tipoDeDocumento = await request.json();

	console.log(tipoDeDocumento);


	let listadohtml = '<option selected>Porfavor Selecciona tu tipo de documento</option>';

	for (let tipo of tipoDeDocumento) {

		let usuariohtml = '<option value=' + tipo.id + '>' + tipo.tipo + '</option>'
		listadohtml += usuariohtml;

	}
	document.querySelector('#txtTipoDocumento option').outerHTML = listadohtml;
}

function cancelar() {

	if (!confirm('Estas seguro?')) {
		return;

	}

	window.location.href = 'clientes.html'


}
