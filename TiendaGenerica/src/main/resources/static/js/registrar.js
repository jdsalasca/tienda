// Call the dataTables jQuery plugin
$(document).ready(function() {
	//on ready
});

var validation = false;

const expresiones = {
	nick: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,15}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
	documentoIdentidad: /^.{5,20}$/ // 4 a 12 digitos.

}
const campos = {
	Nick: false,
	Nombre: false,
	Password: false,
	Email: false,
	Cedula: false,
	Apellido: false
}


const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const validarFormulario = (e) => {
	switch (e.target.name) {

		case "nick":
		console.log("nick")
			validarCampo(expresiones.nick, e.target, 'Nick');
			break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'Nombre');
			break;
			case "documentoIdentidad":
			validarCampo(expresiones.documentoIdentidad, e.target, 'Cedula');
			break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'Apellido');
			break;
		case "password":
			validarCampo(expresiones.password, e.target, 'Password');
			break;
		case "password2":
			break;
		case "email":
			validarCampo(expresiones.email, e.target, 'Email');
			break;



	}
}	


const validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)) {
		console.log("si")
		document.getElementById(`error-${campo}`).style.display = "none";
		document.getElementById(`txt${campo}`).classList.add('was-validated');
		campos[campo] = true;

	} else {
		console.log("no")
		campos[campo] = false;

		
		document.getElementById(`error-${campo}`).style.display = "block";
		
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
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

if(!(campos.Nick && campos.Nombre && campos.Password && campos.Email && campos.Cedula && campos.Apellido) ){
	alert("Hay datos incorrectos, porfavor revisa c:")
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

	var validation_email = await request_email.blob();

	if (validation_email.size != 0) {
		alert("este email ya esta registrado")
		return;

	}

	const request_nick = await fetch('/TiendaGenerica-0.0.1-SNAPSHOT/api/FindBynickUsuario/' + datos.nick, {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},


	});

	var validation_nick = await request_nick.blob()

	if (validation_nick.size != 0) {
		alert("Este nombre de usuario ya esta registrado")
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
		
	alert("Usuario generado con Exito :D, te enviaremos a la ventana de inicio para que inicies sesion ")

	window.location.href = 'login.html'
}