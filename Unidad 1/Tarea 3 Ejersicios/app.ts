class Ejersicios3{

    public ejersicio1(){
        let precioUva : number = Number($('#uva_e1').val());
        let tipo : string = String($('#tipo_e1').val());
        let tama : number = Number($('#tama_e1').val());
        
        let total : number;

        if (tipo == "A") {
            if (tama == 1) {
                total  = precioUva + .20;
            } else {
                total  = precioUva + .30;
            }
        } else {
            if (tama == 1) {
                total  = precioUva - .30;
            } else {
                total  = precioUva - .50;
            }
        }





       Swal.fire(
            `Precio de la uva`,
            `Precio inicial de la uva:  $${precioUva} <br>
             Tipo de uva: ${tipo} <br>
             Tamaño de la uva:  ${tama} <br>
             <b>Precio total de la uva:  $${total}</b>
            `,
            `success`
       )
    }

    public ejersicio2(){
        let alumos : number = Number($('#alumnos_e2').val());
    }
}

let objeto = new Ejersicios3();