/**
 * Condiciones basicas de la maleta:
 * 1. Peso maximo = 20 Kg
 * 2. Espacio maximo = 3 objetos adicionales
 */
var listalluvia = [];
var listaNombresEle = [];
var listaPesoEle = [];
var pesoTotal = 0;

do {
    a = confirm("¿Deseas agregar un artulo a la maleta?");
    if (a) {
        let nombre = prompt("Ingresa el nombre del articulo");
        let peso = Number(prompt("Ingrese el peso"));
        let lluvia = confirm("¿Este objeto es para lluvia?");
        listaNombresEle.push(nombre);
        listaPesoEle.push(peso);
        listalluvia.push(lluvia);
        pesoTotal += peso;
    }
    else {
        break;
    }
} while (true)


if (listaNombresEle.length > 3) {
    alert("Tienes mas objetos de los que puedes llevar");
    listalluvia.forEach((element, index) => {
        if (element) {
            let pos = index;
            let nom = listaNombresEle[pos];
            alert(`Deberias llevar ${nom}`);
        }
    })
}
else{
    if (pesoTotal>20){
        alert("Tienes el espacio necesario, pero los articulos estan muy pesados");
    }
    else{
        alert("Puedes llevar todos los articulos elegidos")
    }
}
console.log(listalluvia);




// const array = [true, false, true, false, true]

// array.forEach((element,index) => {
//     if (element){
//         console.log(index)
//     }
// })


