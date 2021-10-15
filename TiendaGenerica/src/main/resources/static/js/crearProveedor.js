/**
 * 
 */

// Call the dataTables jQuery plugin
$(document).ready(function() {
	//on ready
});


async function crearProveedor() {


	let datos = {};
	datos.nit = document.getElementById("txtNit").value;
	datos.ciudad = document.getElementById("txtCiudad").value;
	datos.direccion = document.getElementById('txtDireccion').value;
	datos.nombre = document.getElementById('txtNombre').value;
	datos.telefono = document.getElementById('txtTelefono').value;
	



	if (datos.telefono == '' || datos.nombre == '' || datos.direccion == ''  ||datos.nit == '' ||datos.ciudad == '') {
		alert("porfavorcito llena todos los campos, toy chiquito y me rompo con facilidad :c")
		return;

	}
	const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/addProveedor', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(datos)

	});

	window.location.href = 'proveedores.html'
}


function cancelar() {

	if (!confirm('Estas seguro?')) {
		return;

	}

	window.location.href = 'Proveedores.html'


}

function getHeaders() {
	return {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': localStorage.token
	}

}

function pruebas() {
	var combo = document.getElementById("txtTipoDocumento").value;
	alert(combo);

}

/*
	if (document.getElementById('txtEmail').value == 'admininicial' && document.getElementById('txtPassword').value == 'admin123456' ){
		respuesta ="ok"
	}
	*/