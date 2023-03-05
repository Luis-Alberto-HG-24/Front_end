/**
 *  EJERSICIO 1
 *  Para ejecutar el compilado de TS es con el comando tsc nombre del archivo.ts -w
 *  Relizar un programa que defina un arreglo de 10 enteros
 *  a continuacion hay que inicializarlo con numeros aleatorios
 *  posteriormente hay que mostrar los datos del arreglo pero elevados al cubo
 *
 *  EJERSICIO 2
 *  Crear un arreglo de 5 elementos de cadenas de texto
 *  inicializar el arreglo con elementos obtenidos desde teclado
 *  copiamos los elementos del arreglo en otro arreglo y lo mostramos de manera inversa
 *
 * EJERSICIO 3
 * Realizar un programa que obtenga por teclado 5 calificaciones comprendidas entres 0 y 10
 * A continuacion debe mostrar todas las notas
 * la nota media, la nota mas alta y la menor nota.
 *
 * EJERSICIO 4
 * realizar un programa que pida 10 numeros por teclado
 * cuando se ingrese un numero negativo por teclado debe mostrarse el arreglo hasta donde haya sido llenado.
 *
 * EJERSICIO 5
 *
 * hacer un programa que inicialice un arreglo de numeros con valores aleatorios
 * y posteriormente ordene los elementos de menor a mayor y los muestre
*/
// EJERSICIO 1
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < numeros.length; i++) {
    numeros[i] = Math.round(Math.random() * 10);
}
$('#numeros_random').html("Numeros random: [ ".concat(numeros, " ]"));
for (var i = 0; i < numeros.length; i++) {
    numeros[i] = Math.pow(numeros[i], 3);
}
$('#numeros_cubo').html("Numeros al cubo: [ ".concat(numeros, " ]"));
// EJERSICIO 2
var cadenas = ['hola', 'buenas', 'tardes', 'a', 'todos'];
var inverso = [];
$('#arreglo_cadena').html("Cadena inicial: [ ".concat(cadenas, " ]"));
var valor = 1;
$('#valor').html("".concat(valor));
function inversa(cadena) {
    var posicion = 4;
    for (var i = 0; i < cadena.length; i++) {
        inverso[i] = cadena[posicion];
        posicion--;
    }
    return inverso;
}
function inicalizar() {
    if (valor <= 5) {
        $('#valor').html("".concat(valor));
        valor++;
    }
    else {
        valor = 1;
        $('#valor').html("".concat(valor));
        $('#inversa').html("Cadena inversa: [ ".concat(inversa(cadenas), " ]"));
    }
    cadenas[valor - 2] = "".concat($('#nueva_cadena').val());
    $('#arreglo_cadena').html("Cadena inicial: [ ".concat(cadenas, " ]"));
    $('#nueva_cadena').val('');
}
// EJERSICIO 3
var calificaciones = [0, 0, 0, 0, 0];
var num_calif = 1;
$('#calificaciones').html("Calificaciones: [ ".concat(calificaciones, " ]"));
$('#num_calif').html("".concat(num_calif));
function media(arreglo) {
    var media = 0;
    arreglo.map(function (numero) {
        media += numero;
    });
    media = media / 5;
    return media;
}
function ingresa_num() {
    if (num_calif <= 5) {
        if (!($('#nueva_calif').val() > 10)) {
            $('#error_mensaje').html('');
            console.log('es menor a 10');
            $('#num_calif').html("".concat(num_calif));
            num_calif++;
            calificaciones[num_calif - 2] = Number($("#nueva_calif").val());
            $('#calificaciones').html("Calificaciones: [ ".concat(calificaciones, " ]"));
            $("#nueva_calif").val('');
        }
        else {
            $('#error_mensaje').html('El numero ingresado es mayor a 10 , intenta de nuevo');
        }
    }
    else {
        num_calif = 1;
        $('#num_calif').html("".concat(num_calif));
        var destacados = " \n        <div class=\"mb-3\"> Nota mas alta: ".concat(Math.max.apply(null, calificaciones), "</div>\n        <div class=\"mb-3\"> Nota media: ").concat(media(calificaciones), "</div>\n        <div class=\"mb-3\"> Nota baja: ").concat(Math.min.apply(null, calificaciones), "</div>\n        ");
        $('#destacados').html("".concat(destacados));
    }
}
// EJERSICIO 4
var numerosLista = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var contador = 1;
$('#numeros').html("Numeros: [ ".concat(numerosLista, " ]"));
$('#contador_num').html("".concat(contador));
function verifica_numero() {
    if ($('#nuevo_numero').val() > 0) {
        if (contador <= 10) {
            $('#numeros_final').html("");
            $('#contador_num').html("".concat(contador));
            contador++;
            numerosLista[contador - 2] = Number($('#nuevo_numero').val());
            $('#numeros').html("Numeros: [ ".concat(numerosLista, " ]"));
            $('#nuevo_numero').val('');
        }
        else {
            contador = 1;
            $('#contador_num').html("".concat(contador));
        }
    }
    else {
        $('#numeros_final').html("Numeros finales: [ ".concat(numerosLista, " ]"));
    }
}
// EJERSICIO 5 
var numerosAleatorios = [0, 0, 0, 0, 0];
for (var i = 0; i < numerosAleatorios.length; i++) {
    numerosAleatorios[i] = Math.round(Math.random() * 100);
}
$('#numeros_aleatorios').html("Numero aleatorios: [ ".concat(numerosAleatorios, " ]"));
$('#numeros_ordenados').html("Numeros ordenados: [ ".concat(numerosAleatorios.sort(), " ]"));
