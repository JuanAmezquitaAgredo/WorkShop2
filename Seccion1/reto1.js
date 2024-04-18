const destino = prompt("Ingrese el destino de su viaje");
let dias = prompt("Ingrese el numero de dias que dura el viaje");
let presupuesto = prompt("Ingrese el presupuesto inicial de su viaje");

const actDiarias = 100000;
const alimDiarios = 70000;


const i = 0;
do {
    let presDiario = presupuesto / dias;

    if (presDiario >= (actDiarias + alimDiarios)) {
        alert("Tienes suficiente dinero para el viaje")
        i = 1;
    }
    else {
        alert("Tu presupuesto no es suficiente, ajustalo")
        dias = prompt("Ingrese un nuevo numero de dias")
        presupuesto = prompt("Ingrese un nuevo presupuesto")
    }

} while (i == 0)


