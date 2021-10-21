/**
 * 
 */

// Call the dataTables jQuery plugin
$(document).ready(function() {
//on ready
});

async function iniciarSesion() {
	
	let datos = {};
	datos.email = document.getElementById('txtEmail').value;
	datos.password = document.getElementById('txtPassword').value;
	
	
	const request = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/login', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		
		body: JSON.stringify(datos)

	});
	
	
	var respuesta = await request.text();
	
	console.log(respuesta)
	
	

	if (respuesta != "1") {
		
		localStorage.token = respuesta;
		localStorage.email = datos.email;
		
		
	window.location.href = 'usuarios.html'
		
		
	}else {
		alert("las credenciales son incorrectas: por favor intente nuevamente")
	}
}

/*
	if (document.getElementById('txtEmail').value == 'admininicial' && document.getElementById('txtPassword').value == 'admin123456' ){
		respuesta ="ok"
	}
	*/