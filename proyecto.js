//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%

var propiedad_recargo = 0.35 // 35%

var salario_recargo = 0.05 // 5%

//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0

var propiedades;
var salario;
var salir = false;

while(salir === false) {
    //Mensajes de alerta para ingresar datos 
  var nombre = prompt("Ingrese su nombre, por favor")
  var edad = parseInt(prompt("¿Cuantos años tiene? Ingrese solamente números "))

  // Convertir la edad a numero
  while(isNaN(edad)) {
    alert('Por favor ingrese su edad en numeros')
    edad = parseInt(prompt("¿Cuantos años tiene? Ingrese solamente números "))
  }


  // Verificar si el cliente es mayor de edad
  if (edad >= 18) {
    var casado = prompt("¿Está casado actualmente?", "si/no")
    //Comprobamos la edad del cónyuge, solamente si se está casado/a
    var edad_conyuge
    if("SI" == casado.toUpperCase()){
      edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
    }
    //convirtiendo las edades ingresadas a números
    var edad_numero = edad
    var edad_conyuge_numero = 0
    
    //convirtiendo la edad del cónyuge si se esta casado/a
    if("SI" == casado.toUpperCase()){
      edad_conyuge_numero = parseInt(edad_conyuge)

      while(isNaN(edad_conyuge_numero)) {
        alert('Por favor ingrese la edad de su esposo/a en numeros')
        edad_conyuge_numero = parseInt(prompt("¿Que edad tiene su esposo/a?"))
      }
    }

    var hijos = prompt("¿Tiene hijos o hijas?", "si/no")
    //Comprobamos la cantidad de hijos solamente si los tienen
    var cantidad_hijos

    if('SI' == hijos.toUpperCase()) {
      cantidad_hijos = parseInt(prompt('¿Cuantos hijos tiene?'))

        /**
       * 1. convierta la cantidad de hijos a numero
       */
      while(isNaN(cantidad_hijos)) {
        alert('Por favor ingrese la cantidad de hijos en numeros')
        cantidad_hijos = parseInt(prompt("¿Cuantos hijos tiene?"))
      }
    }

    // Cantidad de propiedades
    propiedades = prompt('¿Cuantas propiedades tiene? Ingrese la respuesta en numeros')

    while(isNaN(propiedades)) {
      alert('Por favor ingrese la cantidad de propiedades en numeros')
      propiedades = parseInt(prompt("¿Cuantas propiedades tiene? Ingrese la respuesta en numeros?"))
    }

    // Salario
    salario = prompt('Ingrese su salario en numeros')

    while(isNaN(propiedades)) {
      alert('Por favor ingrese la cantidad en numeros')
      propiedades = parseInt(prompt("Ingrese su salario en numeros"))
    }

    //Aquí debe calcular el recargo total basado en las respuestas ingresadas

    //Aquí es donde debe de calcular los recargos y el valor final
    //Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
    if(edad_numero >=18 && edad_numero < 25){
      //Calculamos el recargo en base a la edad 
      recargo = precio_base * edad_18
      //Sumamos todos los recargos que hemos obtenido
      recargo_total = recargo_total + recargo
    } else if(edad_numero >=25 && edad_numero< 50) {
      recargo = precio_base * edad_25
      recargo_total = recargo_total + recargo
    } else {
      recargo = precio_base * edad_50
      recargo_total = recargo_total + recargo
    }
    //aqui puede colocar un else if() con el siguiente rango

    /** 
     * 2. Recargo por la edad del conyuge
     */

    if(edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
      recargo = precio_base * casado_18
      recargo_total = recargo_total + recargo
    } else if(edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
      recargo = precio_base * casado_25
      recargo_total = recargo_total + recargo
    } else if (edad_conyuge_numero > 50) {
      recargo = precio_base * casado_50
      recargo_total = recargo_total + recargo
    }


    /**
     * 3. Recargo por la cantidad de hijos 
     */ 
    if('SI' == hijos.toUpperCase()) {
      for(var i = 0; i < hijos.length; i++) {
        recargo = precio_base * hijos_recargo
        recargo_total = recargo_total + recargo
      }
    }


    /**
     * 4. Recargo por la cantidad de propiedades 
     */ 
    if(propiedades > 0) {
      for(var i = 0; i < propiedades; i++) {
        recargo = precio_base * propiedad_recargo
        recargo_total = recargo_total + recargo
      }
    }

    recargo = salario * salario_recargo
    recargo_total += recargo

    precio_final = precio_base + recargo_total
    //Resultado
    alert ("Para el asegurado "+nombre)
    alert ("El recargo total sera de: "+recargo_total)
    alert ("El precio sera de: "+precio_final)
  } else {
    alert('No tienes la edad suficiente para poder realizar una cotizacion')
  }

  salir = prompt('Para salir ingresa la palabra "Salir", de lo contrario deja el campo en blanco')

  if ('SALIR' === salir.toUpperCase()) {
    salir = true;
  } else {
    salir = false;
  }
}

