// alert("Si funciona");

function herencia(jose, juan, herencia) {
  var herenciaindividual = herencia/2;
  jose = jose + herenciaindividual;
  juan = juan + herenciaindividual;
  var dineroTotal = jose + juan;
  alert(dineroTotal);
  console.log('el dinero total es: $' + dineroTotal);
}

// herencia(100, 200, 5000);

function horasDormidas(dormir, despertar) {
  if (dormir > despertar) {
    var horasDormidas = despertar + ( 24 - dormir);
  } else if(dormir == despertar) {
    var horasDormidas = 24;
  } else {
    var horasDormidas = despertar - dormir;
  }
  console.log('Dormiste ' + horasDormidas + ' horas');
}

// horasDormidas(10, 12);

function Super(Sal, Azucar, cereal, Arroz, Helado) {
  var Super = Sal + Azucar + cereal + Arroz + Helado;
  var totalSuper = Super;
  alert(totalSuper);
  console.log('el total del super es: $' + totalSuper);
}

// Super(25, 12, 22, 10, 40);

function ingreso(ingreso1, ingreso2, gasto1, gasto2, gasto3) {
  var ingresoTotal = ingreso1 + ingreso2;
  var gastoTotal = gasto1 + gasto2 + gasto3;
  var totalGastos = ingresoTotal - gastoTotal;
  alert(totalGastos);
  console.log('el total de gastos es: $' +totalGastos);
}

// ingreso(24000, 24000, 15000, 8000, 2500);

function startup(valor_startup) {
  var totalSocio = valor_startup/2;
  var CostoIva = 0.16;
  var TotalRecibido = totalSocio - totalSocio * CostoIva;
  alert(TotalRecibido);
  console.log('el total por socio es: $ ' + TotalRecibido);
}

startup(20000000);

function compu(compu) {
  var CostoIva = 0.16;
  var totalCompu = compu * CostoIva + compu;
  alert(totalCompu);
  console.log('el costo total de la compu es; $' + totalCompu);
}

// compu(24000);

function pagoTotal(precio, individuos) {
  var totalCuenta = precio * 1.10;
  var totalFinal = precio/individuos;
  alert(totalFinal);
  console.log('total a pagar por individuo es: $' + totalFinal);
}

// pagoTotal(2000, 5);
