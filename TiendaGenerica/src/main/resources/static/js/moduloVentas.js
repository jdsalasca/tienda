$(document).ready(function() {

	/*cargarUsuarios();

	$('#clientes').DataTable();
	ActualizarEmailDelUsuario()*/
});

let listafactura  = '';
let listafacturatext = '';
function ActualizarEmailDelUsuario() {

	document.getElementById('txt-email-usuario').outerHTML = localStorage.email;



}


async function cargarFactura() {


	const request = await fetch('api/clientes', {
		method: 'GET',
		headers: getHeaders()

	});
	const clientes = await request.json();

	console.log(clientes);


	let listadohtml = '';
	for (let cliente of clientes) {
		let botonEliminar = '<a href="#" onclick="eliminarCliente(' + cliente.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
		let botonActualizar = '<a href="#" onclick= "actualizarCliente(' + cliente.id + ')"class="btn btn-light btn-icon-split"><span class="icon text-gray-600"><i class="fas fa-arrow-right"></i></span><span class="text">  Actualizar</span></a>'
		let cedulaTexto = cliente.numeroDocumento == null ? '-' : cliente.numeroDocumento;

		let clientehtml = '<tr><td>' + cedulaTexto + '</td><td>' + 'en proceso' + '</td><td>' + cliente.nombre + '</td><td>' + cliente.email + '</td><td>' + cliente.telefono + '</td><td>' + botonEliminar + '' + botonActualizar + '</td></tr>'
		listadohtml += clientehtml;



	}
	document.querySelector('#clientes tbody').outerHTML = listadohtml;

}



async function eliminarCliente(id) {

	if (!confirm('desea eliminar este usuario?')) {
		return;

	}

	const request = await fetch('api/Deletecliente/' + id, {
		method: 'DELETE',
		headers: getHeaders()

	});

	location.reload();


}

async function actualizarCliente(id) {

	if (!confirm('desea actualizar este cliente?')) {
		return;

	}


	window.location.href = 'actualizarCliente.html?id=' + id;


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


async function buscarProductoPorNombre (){
	
	if (document.getElementById('txtProducto').value != ''){
		

	
	const request = await fetch('api/FindByNameProducto/'+ document.getElementById('txtProducto').value, {
		method: 'GET',
		headers: getHeaders()

	});
	const productos = await request.json();
	


	console.log(productos);


	let listadohtml = '';
	for (let producto of productos) {
		let botonAgregar = '<a href="#" onclick= "agregarProducto(' + producto.id + ')"class="btn btn-success btn-icon-split"><span class="icon text-gray-600"><i class="fas fa-shopping-cart"></i></span><span class="text">  Agregar al carrito c:</span></a>'
			

		let productohtml = '<tr><td>' + producto.id + '</td><td>' + producto.nombre + '</td><td>' + producto.precioCompra + '</td><td>' + producto.ivaCompra + '</td><td>' + botonAgregar+ '</td></tr>'
		listadohtml += productohtml;



	}
	document.querySelector('#productos_searchbar tbody').outerHTML = listadohtml;

}else {

	}
	
	
}
let ids = []

async function agregarProducto (id){
	
	
	const request = await fetch('api/FindByIdProducto/'+ id, {
		method: 'GET',
		headers: getHeaders()

	});
	const producto = await request.json();
	
	
		if (checkExistence(ids, producto.id)){
			alert ("ese producto ya esta en el carrito c:")
		return;
	}
	ids.push(producto.id)
	
	
	let cantidad = '<input type="text" href="#" id= "determinarCantidad '+ producto.id +'" class= "input-group-text">'
	

	let botonEliminar = '<a href="#" onclick="eliminarProducto(' + producto.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
	
	let productohtml = '<tr><td>' + producto.id + '</td><td>' + producto.nombre + '</td><td>' + producto.precioCompra + '</td><td>' + producto.ivaCompra + '</td><td>'+cantidad+'</td><td>' + botonEliminar + '</td></tr>'
	
	let productofactura = '<tr><td>' + producto.nombre + '</td><td>' + cantidad+ '</td><td>' + producto.precioCompra + '</td></tr>'
	
	listafactura += productohtml
	listafacturatext += productofactura
	document.querySelector('#carrito tbody').outerHTML = listafactura;
	
	document.querySelector('#factura_text tbody').outerHTML = listafacturatext
	sync_buttons(cantidad)

}
function checkExistence(arr, val) {
  return arr.some(function(arrVal) {
    return val === arrVal;
  });
}
function sync_buttons (buttonToBeSync){
	
		$(''+buttonToBeSync+'').on('keyup paste', function() {
     $(''+buttonToBeSync+'').not(this).val($(this).val());
});
	
	
	
}


