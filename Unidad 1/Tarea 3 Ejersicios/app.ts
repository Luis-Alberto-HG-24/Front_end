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
        let alumnos : number = Number($('#alumnos_e2').val());
        let cobroTotal : number;

        if (alumnos >= 100) {
            cobroTotal = (alumnos * 65);
        }else if(alumnos >= 50 && alumnos <= 99){
            cobroTotal = (alumnos * 70);
        }else if (alumnos >= 30 && alumnos <= 49) {
            cobroTotal = (alumnos * 95)
        } else {
            cobroTotal = Math.round( (4000/alumnos));
        }


        if (alumnos < 30) {
            Swal.fire(
                `Ejersicio 2`,
                `El cobro total por alumno es: $${cobroTotal}`,
                `success`
            );
        }else{
            Swal.fire(
                `Ejersicio 2`,
                `El cobro total es: $${cobroTotal}`,
                `success`
            );
        }
       
        $('#alumnos_e2').val('');
    }

    public vigilante(){
        $('#dia_e3').on('change', () =>{

            if($('#dia_e3').val() != 5){
                $('#seccion_input').removeClass('d-none');                
            }else{
                $('#seccion_input').addClass('d-none');                

            }
        })
    }

    public ejersicio3(){
        let minutos : number = Number($('#minutos_e3').val());
        let dia : number = Number($('#dia_e3').val());
        let turno : number = Number($('#turno_e3').val());
        let paquete1 :number = 5;
        let paquete2 :number = .80;
        let paquete3 :number = .70;
        let extra : number = .50;
        let cobroTotal : number;

        if (minutos <= 5) {
            cobroTotal = paquete1;
        } else if(minutos >= 6 && minutos <= 8){
            cobroTotal = paquete1 + paquete2;
        }else if (minutos >= 9 && minutos <= 10) {
            cobroTotal = paquete1 + paquete2 + paquete3;
        }else{
            minutos = minutos - 10 ;
            cobroTotal = (minutos * extra) + paquete1 + paquete2 + paquete3;
        }

        if (dia !=  5) {
            if (turno == 1 ) {
                cobroTotal = (cobroTotal * 15)/100;
            } else {
                cobroTotal = (cobroTotal * 10)/100; 
            }
        } else {
            cobroTotal = (cobroTotal * 3)/100;
        }
       
        Swal.fire(
            `Ejersicio 3`,
            `El cobro total por ${minutos} minutos es de $${cobroTotal}`,
            `success`
        )
    }
}

let objeto = new Ejersicios3();
objeto.vigilante();