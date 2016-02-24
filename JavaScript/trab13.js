function esPrimo(argumento){
	for(var i = 2; i<argumento; i++){
		if (argumento % i == 0) {
			console.log("no es primo");
			return false;
		}
}
return true;
}

var j;
var primo;

for(i=2;i<=100;i++){
    primo=0;
    for(j=3;j<i;j++){
		if(i%j==0) primo=1;
    }
    if (primo==0) {console.log(i);
    }
}