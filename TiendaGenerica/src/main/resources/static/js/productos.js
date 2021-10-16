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
		let botonActualizar = '<a href="#" onclick= "actualizarProducto(' + producto.id + ')"class="btn btn-light btn-icon-split"><span class="icon text-gray-600"><i class="fas fa-arrow-right"></i></span><span class="text">  Actualizar</span></a>'

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

function actualizarProducto(id) {

	if (!confirm('desea actualizar este producto?')) {
		return;

	}


	window.location.href = 'actualizarProducto.html?id=' + id;


}

async function crearProducto() {

	if (!confirm('desea crear un nuevo Producto?')) {
		return;

	}


	window.location.href = 'crearProducto.html?id=' + 'newProduct';


}



function getHeaders() {
	return {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': localStorage.token
	}

}


async function buscarProducto (){
	
	try {
	
	if (document.getElementById('txtNit').value != ''){
		
	const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/FindByNameProducto/'+ document.getElementById('txtNit').value, {
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



}else {
		cargarProductos();
	}
	}catch {
		
		alert("Ese nit no esta registrado")
	}
	
	
}
