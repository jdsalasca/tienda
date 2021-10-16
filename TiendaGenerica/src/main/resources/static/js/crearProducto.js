/**
 * 
 */

// Call the dataTables jQuery plugin
$(document).ready(function() {
	cargarProveedores()
	//on ready
});


async function crearProducto() {


	let datos = {};
	datos.idProveedor  = document.getElementById("txtProveedor").value;
	datos.nombre = document.getElementById('txtNombre').value;
	datos.precioCompra = document.getElementById('txtPrecioCompra').value;
	datos.ivaCompra = document.getElementById('txtIvaCompra').value;
	



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

async function cargarProveedores() {



	const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/Proveedores/', {
		method: 'GET',
		headers: getHeaders()

	});
	const proveedores = await request.json();

	console.log(proveedores);


	let listadohtml = '<option selected>Porfavor Selecciona el Proveedor :D</option>';

	for (let proveedor of proveedores) {

		let usuariohtml = '<option value=' + proveedor.id + '>' + proveedor.nombre + ' - '+ proveedor.ciudad+ '</option>'
		listadohtml += usuariohtml;

	}
	document.querySelector('#txtProveedor option').outerHTML = listadohtml;
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