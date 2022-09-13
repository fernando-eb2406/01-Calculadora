/* TP01 - Calculadora */

console.clear();

const sumar = require("./sumar");
const restar = require("./restar");
const multiplicar = require("./multiplicar");
const dividir = require("./dividir");
const potencia = require("./potencia");

let operacion = process.argv[2];
//let operacion = process.argv[2].toLowerCase(); // -> Paso a minusculas para hacer comparacion con una sola condicion por operacion
let numA = +process.argv[3]; // --> Conversion a tipo numero para operar
let numB = +process.argv[4];

function operar(operacion) {
  if (operacion.toLowerCase() === "sumar") {
    return sumar(numA, numB);
  } else if (operacion === "restar") {
    return restar(numA, numB);
  } else if (operacion === "multiplicar") {
    return multiplicar(numA, numB);
  } else if (operacion === "dividir") {
    return dividir(numA, numB);
  } else if (operacion === "potencia") {
    return potencia(numA, numB);
  } else {
    return "La operacion ingresada no existe.\nLas operaciones validas son: Sumar - Restar - Multiplicar - Dividir\n";
  }
}

// --> Verifico que los datos a operar sean validos
function validacion(numA, numB) {
  if (!isNaN(numA) && !isNaN(numB)) {
    return operar(operacion);
  }
  return "Ingresar valores a operar.";
}

if (operacion === undefined) {
  console.log("Debe ingresar la operacion a realizar.");
} else {
  console.log(validacion(numA, numB));
}
