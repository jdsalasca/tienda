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
	const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/usuarioGet/'+id, {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}

	});
	const usuario = await request.json();
	$("#txtNick").val(usuario.nick)
	$("#txtNombre").val(usuario.nombre)
	$("#txtEmail").val(usuario.email)
	let telefonoTexto= usuario.cedula == null? '-': usuario.cedula;
	$("#txtCedula").val(telefonoTexto)
	$("#txtPassword").val(usuario.password)
	
	console.log(usuario);

	return usuario;
}

async function actualizarUsuario () {


	
	let datos = {};
	datos.id = id
	datos.nombre = document.getElementById('txtNombre').value;
	datos.nick = document.getElementById('txtNick').value;
	datos.cedula = document.getElementById('txtCedula').value;
	datos.email = document.getElementById('txtEmail').value;
	datos.password =  document.getElementById('txtPassword').value;
	
	
	

		const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/usuarioUpdate/'+ id, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		
		body: JSON.stringify(datos)

	});
	console.log(datos)
 window.location.href = 'usuarios.html'
	
	
}