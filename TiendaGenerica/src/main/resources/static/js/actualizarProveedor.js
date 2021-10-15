/**
 * 
 */

	var URLsearch = window.location.search;
	var id =String(URLsearch)
	var id = id.slice(4)
	

$(document).ready(function() {

	cargarUsuario(id);
	

});





async function cargarUsuario(id) {
	const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/ProveedorById/'+id, {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}

	});
	const proveedor = await request.json();
	$("#txtCiudad").val(proveedor.ciudad)
	$("#txtDireccion").val(proveedor.direccion)
	$("#txtNombre").val(proveedor.nombre)
	$("#txtTelefono").val(proveedor.telefono)
	$("#txtNit").val(proveedor.nit)

	
	console.log(proveedor);

	return proveedor;
}

async function actualizarProveedor () {


	
	let proveedor = {};
	proveedor.id = id
	proveedor.ciudad = document.getElementById('txtCiudad').value;
	proveedor.direccion = document.getElementById('txtDireccion').value;
	proveedor.nombre = document.getElementById('txtNombre').value;
	proveedor.telefono = document.getElementById('txtTelefono').value;
	proveedor.nit =  document.getElementById('txtNit').value;
	
	
	

		const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/UpdateProveedor/'+ id, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		
		body: JSON.stringify(proveedor)

	});
	console.log(proveedor)
	
	alert("Datos del Proveedor Actualizados")
 window.location.href = 'proveedores.html'
	
	
}