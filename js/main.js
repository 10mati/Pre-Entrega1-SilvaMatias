// SIMULADOR DE PRESTAMO PERSONAL
const montoSolicitadoMax = 2000000;
const montoSolicitadoMin = 30000;
const interesCliente = 50;
const interesNoCliente = 90;
const impuestoGob = 50;
let cuotafinal;
// ENTRADA

let sosCliente = ingresarCliente ();


//solicitar monto correcto


let montoSolicitado = ingresarMontoPrestamo ();

// ingresar la cantidad de cuotas correctas

let cuotas = cantidadCuotas ();

// Calculo de intereses 

let cuotaPura = montoSolicitado /cuotas;

let totalInteresCliente =  montoSolicitado * interesCliente /100;

let interesesCuota = totalInteresCliente /cuotas;

let totalInteresNoCliente = montoSolicitado * interesNoCliente /100;

let interesCuotaNoCliente = totalInteresNoCliente /cuotas;

totalCuota();
