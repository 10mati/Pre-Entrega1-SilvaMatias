function ingresarCliente() {
    let sosCliente = prompt ("Sos cliente del banco? \n - Si\n - No").toUpperCase();
while (sosCliente !== "SI" && sosCliente !== "NO") {
    alert ("El valor ingresado no es correcto");
    sosCliente = prompt ("Sos cliente del banco? \n - Si\n - No").toUpperCase();
}
    return sosCliente;
}

function ingresarMontoPrestamo(){
    let montoSolicitado = parseFloat(prompt ("Ingrese el monto del prestamo:   (Max:$" + montoSolicitadoMax +")"));

while (montoSolicitado > montoSolicitadoMax) {
    alert("El valor del monto ingresado no es valido");
    montoSolicitado = parseFloat(prompt ("Ingrese el monto del prestamo a solicitar:$     ( Max:$" + montoSolicitadoMax +")"));
}
return montoSolicitado;
}

function cantidadCuotas(){
    let cuotas = parseInt (prompt("ingrese la cantidad de cuotas:   (Max:48)"));

while(cuotas > 48 ){
    alert( "La cantidad de cuotas no es valida");
    cuotas = parseInt(prompt("ingrese la cantidad de cuotas:   (Max:48)"));
}
return cuotas;
}

function totalCuota() {
    if(sosCliente == "SI"){
        cuotafinal = cuotaPura + interesesCuota;
        
        }else if (sosCliente == "NO"){
        cuotafinal = cuotaPura + interesCuotaNoCliente;
        } 

        let salida = "SIMULADOR DE PRESTAMO \n\n";
        salida += "Sos cliente: " + sosCliente +"\n";
        salida += "El monto del prestamo solicitado es : " + montoSolicitado + "\n";
        salida +=  "Cuotas: " + cuotas + "\n\n";
        salida += "Total a pagar:\n";
        salida += cuotas + " cuotas de $ " + cuotafinal;
        alert (salida);
}
