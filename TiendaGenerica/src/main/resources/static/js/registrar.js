// Call the dataTables jQuery plugin
$(document).ready(function() {
	//on ready
});

async function registrarUsuario() {


	let datos = {};
	datos.nombre = document.getElementById('txtNombre').value + ' ' + document.getElementById('txtApellido').value;
	datos.nick = document.getElementById('txtNick').value;
	datos.cedula = document.getElementById('txtCedula').value;
	datos.email = document.getElementById('txtEmail').value;
	datos.password = document.getElementById('txtPassword').value;

	let repetirPassword = document.getElementById('txtRepetirPassword').value;

	if (datos.cedula == '' || datos.nombre == '' || datos.nick == '' || datos.email == '' || datos.password == '') {
		alert("porfavorcito llena todos los campos, toy chiquito y me rompo con facilidad :c")
		return;

	}

	if (repetirPassword != datos.password) {

		alert("la contraseña que escribiste es diferente")
		return;
	}

	const request_email = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/FindByEmailUsuario/' + datos.email, {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},


	});

	var email = await request_email.blob();




	if (email.size != 0) {
		alert("Email registrado, porfavor ingresa otro email!")
		return;
	}









	/*	const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/usuario', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			
			body: JSON.stringify(datos)
	
		});*/

	alert("Usuario generado con Exito :D, te enviaremos a la ventana de inicio para que inicies sesion ")

	//	window.location.href = 'login.html'
}