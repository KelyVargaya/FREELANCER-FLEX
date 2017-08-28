/*Mostrar los label cuando los input estan seleccionados*/
var arrayInput = document.getElementsByClassName("js-input");

for(var i=0; i<arrayInput.length; i++){
	arrayInput[i].onkeypress = mostrarLabel;
}

function mostrarLabel(){
	var label = this.previousElementSibling;
	label.classList.add("mostrar-label");
}

/*Cambiar el background de las anclas del header*/
window.addEventListener("scroll",function(){
	var indexScroll = window.pageYOffset;
	var resetScroll = 0;
	if(indexScroll>resetScroll){
		document.getElementById("js-header").classList.add("adelgazar");
	}else{
		document.getElementById("js-header").classList.remove("adelgazar");
	}

	if(indexScroll<634){
		document.getElementById("js-portafolio").classList.remove("active");
	}

	if(indexScroll>=634 && indexScroll<=1414){
		document.getElementById("js-portafolio").classList.add("active");
		document.getElementById("js-portafolio").nextElementSibling.classList.remove("active");
	}

	if(indexScroll>1414 && indexScroll<1947){
		document.getElementById("js-about").previousElementSibling.classList.remove("active");
		document.getElementById("js-about").nextElementSibling.classList.remove("active");
		document.getElementById("js-about").classList.add("active");
	}

	if(indexScroll>=1947 && indexScroll<2144){
		document.getElementById("js-contact").previousElementSibling.classList.remove("active");
		document.getElementById("js-contact").classList.add("active");
	}
});

//hover a la imagenes del portafolio
var arrayImagen = document.getElementsByClassName("js-img-portafolio");
for(var i=0; i<arrayImagen.length; i++){
	arrayImagen[i].addEventListener("mouseover", function(){
		this.lastElementChild.style.visibility = "visible";
	})
	arrayImagen[i].addEventListener("mouseout", function(){
		this.lastElementChild.removeAttribute("style");
	})
	//mostrar el modal
	arrayImagen[i].addEventListener("click", function(){
		var url = this.firstElementChild.getAttribute("src");
		console.log(url);
		document.body.classList.add("hideen-scroll");
		document.getElementById("modal-box-img").firstElementChild.setAttribute("src",url);
		document.getElementsByClassName("modal-box")[0].style.display = "block";
	});
}

//cerrar el modal
document.getElementById("btn-close-modal").addEventListener("click", closeModal);
document.getElementById("ancla-close-modal").addEventListener("click", closeModal);

function closeModal(e){
	e.preventDefault();
	this.parentNode.removeAttribute("style");
	document.body.classList.remove("hideen-scroll");
}