// Ejersicio para saber si alguien es mayor de edad

let edad : number = 21;

if(edad >= 18){
    console.log("Eres mayor de edad");
}else{
    console.log("No eres mayor de edad");
}

let numeros : number[] = [1,2,3,4,5];
// console.log(numeros);

// Iterando
// for (let index : number = 0; index < numeros.length; index++) {  
//     console.log(numeros[index]);
// }

// Funciones

function saludar(saludo:string):string{
    return saludo;
}

let mensaje : string = "hola buenas buenas";
console.log(saludar(mensaje));
