var boton = document.getElementById("boton");
let v = document.getElementsByTagName("audio")[0];
var reproductor = document.getElementById("reproductor");
var sound = false;

boton.addEventListener("click", function(){
	if (!sound) {
		console.log("Prendido");
		v.play();
		reproductor.classList.replace("fa-volume-up","fa-volume-off");
		sound = true;
    v.volume ="0.4"; 
		} else {
			console.log("Apagado");
			v.pause();
			reproductor.classList.replace("fa-volume-off","fa-volume-up");
			sound = false;
			} 
    });

	function iniciarPagina() {
		var pantallaInicio = document.querySelector(".pantalla-inicial");
		//var audio = new Audio('sound/audio3.mp3');
		document.body.removeAttribute("style");
        //audio.play();
		pantallaInicio.style.display = "none";
        //$("#modal").modal('hide');



		/*var conAudio = document.querySelector(".iniciar-audio");
		
		pantallaInicio.classList.add("pantalla-inicial-cerrada");
		document.body.removeAttribute("style");
		setTimeout(function() {
			pantallaInicio.style.display = "none";
		}, 1600);
	
		if(conAudio) {
			document.getElementById("musicaFondo").play();
		}*/
	}
