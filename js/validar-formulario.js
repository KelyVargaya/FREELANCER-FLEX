window.addEventListener("load", function(){
	var name = document.getElementById("name");
	var email = document.getElementById("email");
	var phone = document.getElementById("phone");
	var mensaje = document.getElementById("mensaje");

	var btnSend = document.getElementById("send");
	btnSend.addEventListener("click", function(e){
		e.preventDefault();
		if(name.value.trim().length==0){
			name.nextElementSibling.innerText = "ingrese Name";
		}

		if(email.value.trim().length==0){
			email.nextElementSibling.innerText = "ingrese Email";
		}

		if(phone.value.trim().length==0){
			phone.nextElementSibling.innerText = "ingrese Phone";
		}

		if(mensaje.value.trim().length==0){
			mensaje.nextElementSibling.innerText = "ingrese mensaje";
		}
	});
});