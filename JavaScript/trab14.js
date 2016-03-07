function agregar(ncantidad){
	var arreglo=[];
	for(var i=0, i<ncantidad,i++) {
		var aleatorio = Math.round(Math.random()*10);
		arreglo.push(aleatorio);
	}
return arreglo;	
}



function orden (a, b)
   {
      return a-b;
   }

