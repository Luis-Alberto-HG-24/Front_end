
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

let numeros : number[] = [1,2,3,4,5,6,7,8,9,10];
for (let i : number = 0; i < numeros.length; i++) {
    numeros[i] = Math.round(Math.random() * 10);
}
$('#numeros_random').html(`Numeros random: [ ${numeros} ]`);
for (let i = 0; i < numeros.length; i++) {
    numeros[i] = Math.pow(numeros[i],3);
}
$('#numeros_cubo').html(`Numeros al cubo: [ ${numeros} ]`);



// EJERSICIO 2

let cadenas : string[] = ['hola','buenas','tardes','a','todos'];
let inverso : string[] = [];
$('#arreglo_cadena').html(`Cadena inicial: [ ${cadenas} ]`);
let valor : number = 1;
$('#valor').html(`${valor}`);


function inversa(cadena : string[]): string[]{
    let posicion: number = 4;

    for (let i = 0; i < cadena.length; i++) {
        inverso[i] = cadena[posicion];
        posicion --;
    }
    return inverso;
}

function inicalizar() {
   if (valor <= 5) {
        $('#valor').html(`${valor}`);
        valor++;
   } else {
       valor = 1;
       $('#valor').html(`${valor}`);
       $('#inversa').html(`Cadena inversa: [ ${inversa(cadenas)} ]`);
       
   }
    cadenas[valor-2] =  `${$('#nueva_cadena').val()}`
    $('#arreglo_cadena').html(`Cadena inicial: [ ${cadenas} ]`);
    $('#nueva_cadena').val('');
}


// EJERSICIO 3


let calificaciones : number[] = [0,0,0,0,0];
let num_calif : number = 1;
$('#calificaciones').html(`Calificaciones: [ ${calificaciones} ]`);
$('#num_calif').html(`${num_calif}`);

function media(arreglo : number[]): number{
    let media : number = 0;
    arreglo.map(numero => {
        media += numero;
    })
    media = media/5;
    return media;
}

function ingresa_num(){

    if (num_calif <= 5) {

        if (!($('#nueva_calif').val() > 10)) {
            $('#error_mensaje').html('');
            console.log('es menor a 10');
            $('#num_calif').html(`${num_calif}`);
            num_calif++;

            calificaciones[num_calif-2] = Number($(`#nueva_calif`).val());
            $('#calificaciones').html(`Calificaciones: [ ${calificaciones} ]`);
            $(`#nueva_calif`).val('');
        } else {
            $('#error_mensaje').html('El numero ingresado es mayor a 10 , intenta de nuevo');
        }


    } else {
        num_calif = 1;
        $('#num_calif').html(`${num_calif}`);
        let destacados : string = ` 
        <div class="mb-3"> Nota mas alta: ${Math.max.apply(null,calificaciones)}</div>
        <div class="mb-3"> Nota media: ${media(calificaciones)}</div>
        <div class="mb-3"> Nota baja: ${Math.min.apply(null, calificaciones)}</div>
        `;

        $('#destacados').html(`${destacados}`);
    } 
}


// EJERSICIO 4


let numerosLista : number[] = [0,0,0,0,0,0,0,0,0,0];
let contador : number = 1;
$('#numeros').html(`Numeros: [ ${numerosLista} ]`);
$('#contador_num').html(`${contador}`)

function verifica_numero(){
    if ($('#nuevo_numero').val() > 0) {
        if (contador <= 10) {
            $('#numeros_final').html(``)
            $('#contador_num').html(`${contador}`)
            contador++;
            numerosLista[contador-2] = Number($('#nuevo_numero').val());
            $('#numeros').html(`Numeros: [ ${numerosLista} ]`);
            $('#nuevo_numero').val('');
    
        } else {
            contador = 1;
            $('#contador_num').html(`${contador}`);
        }
    }else{
        $('#numeros_final').html(`Numeros finales: [ ${numerosLista} ]`)
    }
}

// EJERSICIO 5 

let numerosAleatorios : number [] = [0,0,0,0,0];
for (let i = 0; i < numerosAleatorios.length; i++) {
    numerosAleatorios[i] = Math.round(Math.random() * 100)
}

$('#numeros_aleatorios').html(`Numero aleatorios: [ ${numerosAleatorios} ]`);



$('#numeros_ordenados').html(`Numeros ordenados: [ ${numerosAleatorios.sort()} ]`);