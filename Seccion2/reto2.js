const presDiario = Number(prompt("Ingrese su presupuesto diario"));
const costosComer = Number(prompt("Ingrese el gasto estimado en comida"));
const costosLibro = Number(prompt("Ingrese el gasto estimado en libros"));
const ahorro = Number(prompt("Ingrese el ahorro diario que le gustaria alcanzar"));

let total = 0;

let gastoComer = confirm("¿El dia de hoy desea comer?");
if (gastoComer){
    total += costosComer;
}
let gastoLibro = confirm("¿El dia de hoy desea comprar un libro?");
if (gastoLibro){
    total += costosLibro;
}

if (presDiario>=total){
    alert("Tienes dinero para este o estos gastos");
}
else{
    alert("No te alcanza el dinero, realiza de nuevo el calculo");
}

if ((presDiario-total)<=0){
    alert ("No vas a ahorrar nada el dia de hoy")
}
else{
    if (ahorro<=(presDiario-total)){
        alert("Tu meta de ahorro se ha cumplido")
    }
    else{
        alert(`Tu meta de ahorro no se cumplio pero estas ahorrando ${presDiario-total}`)
    }
}

