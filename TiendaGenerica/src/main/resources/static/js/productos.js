/**
 * 
 */// Call the dataTables jQuery plugin
$(document).ready(function() {

	cargarProductos();

	$('#proveedores').DataTable();
	ActualizarEmailDelUsuario()
});

function ActualizarEmailDelUsuario() {

	document.getElementById('txt-email-usuario').outerHTML = localStorage.email;



}


async function cargarProductos() {


	const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/producto', {
		method: 'GET',
		headers: getHeaders()

	});
	const productos = await request.json();

	console.log(productos);


	let listadohtml = '';
	for (let producto of productos) {
		let botonEliminar = '<a href="#" onclick="eliminarProducto(' + producto.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
		let botonActualizar = '<a href="#" onclick= "actualizarProveedor(' + producto.id + ')"class="btn btn-light btn-icon-split"><span class="icon text-gray-600"><i class="fas fa-arrow-right"></i></span><span class="text">  Actualizar</span></a>'

		let productohtml = '<tr><td>' + producto.id + '</td><td>' + producto.nombre + '</td><td>' + producto.ivaCompra + '</td><td>' + producto.precioCompra + '</td><td>' + producto.idProveedor.id+' - '+ producto.idProveedor.nombre + '</td><td>' + botonEliminar + '' + botonActualizar + '</td></tr>'
		listadohtml += productohtml;



	}
	document.querySelector('#proveedores tbody').outerHTML = listadohtml;

}



async function eliminarProducto(id) {

	if (!confirm('desea eliminar este producto?')) {
		return;

	}

	const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/deleteIdProducto/' + id, {
		method: 'DELETE',
		headers: getHeaders()

	});
	alert("Datos del Producto Borrados")

	location.reload();


}

async function actualizarProveedor(id) {

	if (!confirm('desea actualizar este Proveedor?')) {
		return;

	}


	window.location.href = 'actualizarProveedor.html?id=' + id;


}

async function crearProveedor() {

	if (!confirm('desea crear un nuevo Proveedor?')) {
		return;

	}


	window.location.href = 'crearProveedor.html?id=' + 'newUser';


}



function getHeaders() {
	return {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': localStorage.token
	}

}


async function buscarProveedores (){
	
	try {
	
	if (document.getElementById('txtNit').value != ''){
		
	const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/ProveedorByNit/'+ document.getElementById('txtNit').value, {
		method: 'GET',
		headers: getHeaders()

	});
		
	const proveedores = await request.json();

	console.log(proveedores);


	let listadohtml = '';
	for (let proveedor of proveedores) {
		let botonEliminar = '<a href="#" onclick="eliminarProveedor(' + proveedor.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
		let botonActualizar = '<a href="#" onclick= "actualizarProveedor(' + proveedor.id + ')"class="btn btn-light btn-icon-split"><span class="icon text-gray-600"><i class="fas fa-arrow-right"></i></span><span class="text">  Actualizar</span></a>'
		let cedulaTexto = proveedor.numeroDocumento == null ? '-' : proveedor.numeroDocumento;

		let clientehtml = '<tr><td>' + proveedor.nit + '</td><td>' + proveedor.ciudad + '</td><td>' + proveedor.direccion + '</td><td>' + proveedor.nombre + '</td><td>' + proveedor.telefono + '</td><td>' + proveedor.email + '</td><td>' + botonEliminar + '' + botonActualizar + '</td></tr>'
		listadohtml += clientehtml;



	}
	document.querySelector('#proveedores tbody').outerHTML = listadohtml;

}else {
		cargarProveedores()
	}
	}catch {
		
		alert("Ese nit no esta registrado")
	}
	
	
}
