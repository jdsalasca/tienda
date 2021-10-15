/**
 * 
 */

// Call the dataTables jQuery plugin
$(document).ready(function() {
	cargarTipoDeDocumento()
	//on ready
});


async function crearCliente() {


	let datos = {};
	datos.idTipoDocumento = document.getElementById("txtTipoDocumento").value;
	datos.numeroDocumento = document.getElementById('txtCedula').value;
	datos.email = document.getElementById('txtEmail').value;
	datos.nombre = document.getElementById('txtNombre').value;
	datos.direccion = document.getElementById('txtDireccion').value;
	datos.telefono = document.getElementById('txtTelefono').value;
	



	if (datos.cedula == '' || datos.nombre == '' || datos.direccion == '' || datos.email == '' || datos.idTipoDocumento == '') {
		alert("porfavorcito llena todos los campos, toy chiquito y me rompo con facilidad :c")
		return;

	}
	const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/addCliente', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(datos)

	});

	window.location.href = 'clientes.html'
}


function cancelar() {

	if (!confirm('Estas seguro?')) {
		return;

	}

	window.location.href = 'clientes.html'


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
function getHeaders() {
	return {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': localStorage.token
	}

}

function crearUsuario() {
	var combo = document.getElementById("txtTipoDocumento").value;
	alert(combo);

}

/*
	if (document.getElementById('txtEmail').value == 'admininicial' && document.getElementById('txtPassword').value == 'admin123456' ){
		respuesta ="ok"
	}
	*/