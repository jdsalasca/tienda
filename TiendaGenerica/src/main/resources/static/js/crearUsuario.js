/**
 * 
 */

// Call the dataTables jQuery plugin
$(document).ready(function() {
//on ready
});


async function crearUsuario() {
	
	
	
	let datos = {};
	datos.nombre = document.getElementById('txtNombre').value;
	datos.nick = document.getElementById('txtNick').value;
	datos.email = document.getElementById('txtEmail').value;
	datos.password = document.getElementById('txtPassword').value;
	datos.cedula = document.getElementById('txtCedula').value;
	
	if (datos.cedula=='' ||datos.nombre=='' ||datos.nick==''||datos.email==''||datos.password==''){
		alert("porfavorcito llena todos los campos, toy chiquito y me rompo con facilidad :c")
		return;
		
	}
	
	let repetirPassword = document.getElementById('txtRepetirPassword').value;
	
	if (repetirPassword != datos.password) {
		
		alert("la contraseña que escribiste es diferente")
		return;	
	}
	


	const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/usuario', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		
		body: JSON.stringify(datos)

	});
	
	window.location.href = 'usuarios.html'
}


function cancelar (){
	
		if (!confirm('Estas seguro?')){
		return;
		
	}
	
	window.location.href = 'usuarios.html'
	
	
}
/*
	if (document.getElementById('txtEmail').value == 'admininicial' && document.getElementById('txtPassword').value == 'admin123456' ){
		respuesta ="ok"
	}
	*/