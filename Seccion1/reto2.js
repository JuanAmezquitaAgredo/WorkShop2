listaSouvenir = [];
let valorTotal = 0;
const presupuesto = prompt("Ingrese su presupuesto actual");
do {
    a = prompt("Desea incluir un souvenir?").toUpperCase()
    if (a == "SI") {
        const nombre = prompt("Ingrese el nombre del souvenir")
        const valor = Number(prompt("Ingrese el valor  del souvenir"))
        const estado = confirm("Oprima OK si esta disponible")
        if (typeof (nombre) == "string" && typeof (valor) == "number" && !isNaN(valor)) {
            const souvenir = {
                nombre,
                valor,
                estado,
            }
            listaSouvenir.push(souvenir);
            if (estado == true){
                valorTotal += valor;
            }
        }
        else {
            alert("Hay datos mal ingresados")
        }
    }
    else {
        break;
    }

} while (true);

if (valorTotal > presupuesto){
    alert("Tu presupuesto no alcanza, ajustalo")
}
else{
    alert("Tienes el presupuesto indicado para comprar los souvenires DISPONIBLES")
}
console.log(listaSouvenir);
console.log(valorTotal);

