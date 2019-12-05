var link = document.querySelector(".map__button");
var popup = document.querySelector(".modal__writeus");
var close = popup.querySelector(".close");

var login = popup.querySelector(".writeus__name");

link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal__show");
	login.focus();
});

close.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal__show");
	
});

window.addEventListener("keydown", function(evt) {
		if(evt.keyCode === 27) {
			evt.preventDefault();		
			if(popup.classList.contains("modal__show")) {
				popup.classList.remove("modal__show");
			}
		}
	});

var mapLink = document.querySelector(".map__wrapper");
var mapPopup = document.querySelector(".modal__map");
var mapClose = mapPopup.querySelector(".close");

mapLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapPopup.classList.add("modal__show");
});

mapClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapPopup.classList.remove("modal__show");
	
});

window.addEventListener("keydown", function(evt) {
		if(evt.keyCode === 27) {
			evt.preventDefault();		
			if(mapPopup.classList.contains("modal__show")) {
				mapPopup.classList.remove("modal__show");
			}
		}
	});
