let Energia = prompt("Ingrese su nivel de energia alto ó bajo").toUpperCase();
let Clima = confirm("Si el clima es bueno oprima OK");

if (Energia=="ALTO"){
    Energia = 1;
}
else if(Energia=="BAJO"){
    Energia = 0;
}

if(Energia==1 && Clima){
    alert("Puedes salir a trotar")
}
else if (Energia==1 && !Clima){
    alert("Esta lloviendo, pero puedes trabajar en casa")
}
else if (Energia==0 && Clima){
    alert("El clima es bueno pero deberias trabajar desde casa")
}
else if (Energia==0 && !Clima){
    alert("El dia de hoy es mejor descansar")
}