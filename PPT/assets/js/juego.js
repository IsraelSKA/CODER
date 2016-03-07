//Nombre del jugar y buena suerte//
alert("funciona");
var jugador = prompt("Ingrese su nombre:");
	var subtitle = document.createElement("h3");
	var suerte = document.createTextNode("¡Buena suerte " + jugador + "!");
	subtitle.appendChild(suerte);
	var h2 = document.getElementsByTagName('h2')[0];
	h2.appendChild(subtitle);
//-- T H E  E N D --//

var eleccionJugador = prompt("elige piedra papel o tijeras");

function opcionComputador(){
	var aleatorio = Math.round(Math.random()*10);
	return aleatorio;
}

var eleccionComputador = opcionComputador;
	if (eleccionComputador<=3)
	{
		console.log("Piedra");
	}
	else if(eleccionComputador<=7)
	{
		console.log("Papel");
	}
	else if(eleccionComputador<=10)
	{
		console.log("Tijera");
	}


var piedra = 0;
var papel = 1;
var tijera = 2;

var eleccionJugador;
var eleccionComputador;

eleccionJugador =;
