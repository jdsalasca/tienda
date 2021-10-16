$(document).ready(function() {

	/*cargarUsuarios();

	$('#clientes').DataTable();
	ActualizarEmailDelUsuario()*/
});

let ventasinprocesar = 0;

let listafactura = '';
let listafacturatext = '';
function ActualizarEmailDelUsuario() {

	document.getElementById('txt-email-usuario').outerHTML = localStorage.email;

datosUsuarioParaDetalleVenta = {}

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


async function buscarProductoPorNombre() {

	if (document.getElementById('txtProducto').value != '') {



		const request = await fetch('api/FindByNameProducto/' + document.getElementById('txtProducto').value, {
			method: 'GET',
			headers: getHeaders()

		});
		const productos = await request.json();





		let listadohtml = '';
		for (let producto of productos) {
			let botonAgregar = '<a href="#" onclick= "agregarProducto(' + producto.id + ')"class="btn btn-success btn-icon-split"><span class="icon text-gray-600"><i class="fas fa-shopping-cart"></i></span><span class="text">  Agregar al carrito c:</span></a>'


			let productohtml = '<tr><td>' + producto.id + '</td><td>' + producto.nombre + '</td><td>' + producto.precioCompra + '</td><td>' + producto.ivaCompra + '</td><td>' + botonAgregar + '</td></tr>'
			listadohtml += productohtml;



		}
		document.querySelector('#productos_searchbar tbody').outerHTML = listadohtml;

	} else {

	}


}
let ids = []
let values = []

async function agregarProducto(id) {


	const request = await fetch('api/FindByIdProducto/' + id, {
		method: 'GET',
		headers: getHeaders()

	});
	const producto = await request.json();


	if (checkExistence(ids, producto.id)) {
		alert("ese producto ya esta en el carrito c:")
		return;
	}
	values.push(producto)
	ids.push(producto.id)


	let cantidad = '<input type="text" href="#" id= "determinarCantidad ' + producto.id + '" class= "input-group-text" placeholder="1">'


	let botonEliminar = '<a href="#" onclick="eliminarProducto(' + producto.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';

	let productohtml = '<tr><td>' + producto.id + '</td><td>' + producto.nombre + '</td><td>' + producto.precioCompra + '</td><td>' + producto.ivaCompra + '</td><td>' + cantidad + '</td><td>' + botonEliminar + '</td></tr>'



	listafactura += productohtml

	document.querySelector('#carrito tbody').outerHTML = listafactura;



}
let listadeDetalleVentas = []
let totalSinIvaTotal = 0
let totalConIvaTotal = 0
var yes = document.getElementById("createFactura");

let ventasForInvoce = []
yes.onclick = function() {

	for (i in values) {
		amountofProducts = 1;

		amountofProducts = Number(document.getElementById('determinarCantidad ' + values[i].id + '').value);
		if (amountofProducts == 0) {
			amountofProducts = 1
		}





		let totalSinIva = Number(values[i].precioCompra) * amountofProducts
		let totalConIva = (Number(values[i].precioCompra)+ Number(values[i].ivaCompra)) * amountofProducts 

		let datos = {}
		datos.idProducto = values[i].id


		datos.cantidadProducto = amountofProducts
		datos.valorIva = values[i].ivaCompra

		datos.valorTotal = totalConIva

		listadeDetalleVentas.push(datos)

		datos.valorSinIva = totalSinIva
		datos.nombreProducto = values[i].nombre
		datos.PrecioProducto = values[i].precioCompra

		ventasForInvoce.push(datos)

		let cantidad = '<p>' + amountofProducts + '</p>'
		console.log(amountofProducts)


		let productofactura = '<tr><td>' + values[i].nombre + '</td><td>' + cantidad + '</td><td>' + values[i].precioCompra + '</td><td>' + totalSinIva + '</td></tr>'
		listafacturatext += productofactura
		totalSinIvaTotal += totalSinIva
		totalConIvaTotal += totalConIva
	}




	totalSinIvaTotalPrint = '<p class="font-monospace fs-6">El total Sin Iva es: ' + totalSinIvaTotal + '</p>'

	totalConIvaTotalPrint = '<p class="font-monospace fs-6">El total Con Iva es: ' + totalConIvaTotal + '</p>'


	document.querySelector('#txtFacturaSinIva ').outerHTML = totalSinIvaTotalPrint
	document.querySelector('#txtFacturaConIva ').outerHTML = totalConIvaTotalPrint

	document.querySelector('#factura_text tbody').outerHTML = listafacturatext
	ventasinprocesar += 1;
}






function checkExistence(arr, val) {
	return arr.some(function(arrVal) {
		return val === arrVal;
	});
}
async function buscarUsuarioPorNombre() {



	const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/FindByNameUsuario/' + document.getElementById('txtUsuario').value, {
		method: 'GET',
		headers: getHeaders()

	});
	const usuarios = await request.json();





	let listadohtml = '';
	for (let usuario of usuarios) {
		console.log(usuario)
		let botonSeleccionar = '<a href="#" onclick= "SelecionarUsuario(' + usuario.id + ')"class="btn btn-success btn-icon-split"><span class="text">  Selecionar</span></a>'


		let productohtml = '<tr><td>' + usuario.nombre + '</td><td>' + usuario.nick + '</td><td>' + botonSeleccionar + '</td></tr>'
		listadohtml += productohtml;



	}
	document.querySelector('#usuarios_searchbar tbody').outerHTML = listadohtml;




}

async function buscarClientePorNombre() {



	const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/FindByNameCliente/' + document.getElementById('txtCliente').value, {
		method: 'GET',
		headers: getHeaders()

	});
	const clientes = await request.json();




	let listadohtml = '';
	for (let cliente of clientes) {
		let botonSeleccionar = '<a id="seleccionar"href="#" onclick= "SelecionarCliente(' + cliente.id + ')"class="btn btn-success btn-icon-split"><span class="text">  Selecionar</span></a>'


		let productohtml = '<tr><td>' + cliente.id + '</td><td>' + cliente.nombre + '</td><td>' + botonSeleccionar + '</td></tr>'
		listadohtml += productohtml;



	}
	document.querySelector('#clientes_searchbar tbody').outerHTML = listadohtml;


}

let datos_venta = {};
let detalleventa = []
ClienteExistente = []

/*Estas funciones son para llamar al cliente y al usuario que van a participar de la compra*/
async function SelecionarCliente(id) {
	ventasinprocesar += 1;


	const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/clientesById/' + id, {
		method: 'GET',
		headers: getHeaders()

	});
	const cliente = await request.json();
	


	localStorage.nombreCliente = cliente.nombre
	localStorage.direccionCliente = cliente.direccion
	localStorage.celularCliente = cliente.telefono
	localStorage.emailCliente = cliente.email



	if (ClienteExistente.length >= 1) {
		alert("ya hay un cliente")
		return;
	}
	ClienteExistente.push(cliente)


	datos_venta.idCliente = cliente.id






}
UsuarioExistente = []

async function SelecionarUsuario(id) {

	ventasinprocesar += 1;


	const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/usuarioGet/' + id, {
		method: 'GET',
		headers: getHeaders()

	});
	const usuario = await request.json();



	if (UsuarioExistente.length >= 1) {
		alert("ya hay un Usuario")
		return;
	}
	UsuarioExistente.push(usuario)
	datos_venta.idUsuario = usuario.id




}

async function crearVenta() {

	datos_venta.valorVenta = totalSinIvaTotal
	datos_venta.totalVenta = totalConIvaTotal


	localStorage.totalConIva = totalConIvaTotal
	localStorage.totalSinIva = totalSinIvaTotal

	if (ventasinprocesar <= 2) {
		alert("faltan datos para generar la factura :3")
		return;

	}


	const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/addVenta', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(datos_venta)



	});

	const answer = await request.text();

	localStorage.idventa = answer;
	localStorage.totalVenta = totalConIvaTotal;
	console.log(datos_venta)

	alert("Venta Creada!")
	totalSinIvaTotal = null;

	totalConIvaTotal = null;

	ventasinprocesar = 0;

	newDetalleVenta()

	localStorage.setItem("datosVenta", ventasForInvoce);
	localStorage.setItem("data", JSON.stringify(ventasForInvoce));

	var answer_facture;
	var r = confirm("Deseas imprimir tu factura?!");
	if (r == true) {
		window.location.href = 'imprimirfactura.html';
	} else {
		alert("weno :3")
		return;
	}


}

async function newDetalleVenta() {

	for (i in listadeDetalleVentas) {

		envioDetalleVenta = {}
		envioDetalleVenta.idVenta = localStorage.idventa
		envioDetalleVenta.valorTotal = localStorage.totalVenta
		envioDetalleVenta.idProducto = listadeDetalleVentas[i].idProducto
		envioDetalleVenta.cantidadProducto = listadeDetalleVentas[i].cantidadProducto
		envioDetalleVenta.valorIva = listadeDetalleVentas[i].valorIva
		envioDetalleVenta.valorVenta = listadeDetalleVentas[i].valorTotal






		const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/addDetalleVenta', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(envioDetalleVenta)



		});



	}



}

