const presInicial = Number(prompt("Ingrese su presupuesto inicial"));
const alojamiento = Number(prompt("Ingrese los costos aporximados de alojamiento"));
const transporte = Number(prompt("Ingrese los costos aporximados de transporte"));
const comida = Number(prompt("Ingrese los costos aporximados de comida"));

var dineroDis = presInicial-(alojamiento+transporte+comida);

const umbral = Number(prompt("Ingrese la cantidad fija para imprevistos"));

if (dineroDis >= umbral){
    listaNomProducto = [];
    listaCostProducto = [];
    do{
        const a = prompt("¿Desea ingresar un producto?").toUpperCase();
        if (a == "SI"){
            const nombre = prompt("Ingrese el nombre del producto");
            const costo = prompt("Ingrese el costo del producto");
            listaNomProducto.push(nombre);
            listaCostProducto.push(costo);
        }
        else{
            break;
        }
    }while(true)

    var posMin = Math.min(...listaCostProducto);
    var posCosto = listaCostProducto.indexOf(String(posMin));
    var proSugerido = listaNomProducto[posCosto];
    alert(`El articulo sugerido a comprar es: ${proSugerido}`);
}
else{
    alert("Evita gastos adicionales, estas ajustado")
}
