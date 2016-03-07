function aleatorio(){
	var numero=Math.floor(Math.random()*3);
	return numero;
}
var piedra=0;
var papel=1;
var tijera=2;
var opcionJugador=prompt("Elige piedra, papel o tijera");
var opcionComputador=aleatorio();

var opciones=["piedra","papel","tijera"];

alert("Elegiste "+ opciones[opcionJugador]);
alert("Computador elige "+opciones[opcionComputador]);

if(opcionJugador==piedra)
{
	if (opcionComputador==piedra) {
		alert("Empate");
	}
	else if(opcionComputador==papel){
		alert("Perdiste");
	}
	else if(opcionComputador==tijera){
		alert("Ganaste")
	}
}
else if(opcionJugador==papel)
{
	if (opcionComputador==piedra) {
		alert("Ganaste");
	}
	else if(opcionComputador==papel){
		alert("Empate");
	}
	else if(opcionComputador==tijera){
		alert("Perdiste")
	}
}
else if(opcionJugador==tijera) 
{
	if (opcionComputador==piedra) {
		alert("Perdiste");
	}
	else if(opcionComputador==papel){
		alert("Ganaste");
	}
	else if(opcionComputador==tijera){
		alert("Empate")
	}
}
else
{
	alert("debes elegir una alternativa");
}