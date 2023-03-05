
class Ejersicios2{


    limpiar(ids : string[]){
        ids.map(campo =>{
            $(`#${campo}`).val('');
        })
       
    }

    ejersicio1(){
        let campos : string[] = ['nombre_e1'];
        Swal.fire(
            'Hola',
            `${$('#nombre_e1').val()}`,
            'success'
          );
        this.limpiar(campos)
    }

    ejersicio2(){
        let campos : string[] = ['base_2','altura_2'];
        let perimetro : number = Number( 2 * (Number($('#base_2').val()) + Number($('#altura_2').val())));
        let area : number = Number(Number($('#base_2').val()) * Number($('#altura_2').val()))
        Swal.fire(
            'El resultado es',
            `Perimetro: ${perimetro} <br> Area: ${area}`,
            'success'
          );
        this.limpiar(campos);
    }

    ejersicio3(){
        let campos : string[] = ['cateto_o_3', 'cateto_o_3'];
        let hipotenusa : number = Math.round(Math.sqrt(Math.pow( Number($('#cateto_o_3').val()),2) + Math.pow( Number($('#cateto_a_3').val()),2))*100)/100;
        Swal.fire(
            'La hipotenusa',
            `El valor de la Hipotenusa es: ${hipotenusa}`,
            'success'
        );
        this.limpiar(campos);
    }

    ejersicio4(){
        let campos : string[] = ['num_1','num_2']
        let num1 : number = Number($('#num_1').val());
        let num2 : number = Number($('#num_2').val());
        
        Swal.fire(
            'Calculos basicos',
            `Suma: ${num1} + ${num2} = ${num1 + num2} <br>
            Resta: ${num1} - ${num2} = ${num1 - num2} <br>
            Multiplicacion: ${num1} * ${num2} = ${num1 * num2} <br>
            Division: ${num1} / ${num2} = ${num1 / num2}`,
            'success'
        );
        this.limpiar(campos);
    }

    ejersicio5(){
        let campos : string[] = ['grado_f'];
        let celsius : number = Math.round(( Number($('#grado_f').val()) -32) * 5 / 9 * 100) /100 ;
        Swal.fire(
            'Conversion de grados',
            `${$('#grado_f').val()} grados Fahrenheit es igual a ${celsius} grados Celsius`,
            'success'
        );
        this.limpiar(campos);
    }

    ejersicio6(){
        let campos : string [] = ['num1_e6','num2_e6','num3_e6'];
        let media : number = ( Number($('#num1_e6').val()) +  Number($('#num2_e6').val()) +  Number($('#num3_e6').val())) / 3;
        Swal.fire(
            'Media',
            `La media de ${$('#num1_e6').val()} , ${$('#num2_e6').val()} y ${$('#num3_e6').val()} es: ${media}`,
            'success'
        );
        this.limpiar(campos);
    }

    ejersicio7(){
        let campos : string[] = ['minutos_e7']
        let horas : number = Math.trunc(Number($('#minutos_e7').val())/60);
        let minutos : number = Number($('#minutos_e7').val())%60

        Swal.fire(
            'Conversion de minutos',
            `${$('#minutos_e7').val()} minutos es igual a : ${horas} horas y ${minutos} minutos`,
            'success'
        )
        this.limpiar(campos)
    }

    ejersicio8(){
        let campos : string[] = ['sueldo_e8','venta1_e8','venta2_e8','venta3_e8'];
        let ventaTotal : number = Number($('#venta1_e8').val()) + Number($('#venta2_e8').val()) + Number($('#venta3_e8').val());
        let comision : number = Math.round(((ventaTotal * 10)/100)*100)/100;
        Swal.fire(
            'Calculo de sueldo',
            `Sueldo base: ${$('#sueldo_e8').val()} <br>
            Venta 1: ${$('#venta1_e8').val()} <br>
            Venta 2: ${$('#venta2_e8').val()} <br>
            Venta 3: ${$('#venta3_e8').val()} <br>
            Venta total: ${ventaTotal} <br>
            Comision del 10% : ${comision} <br>
            <b>Sueldo total: ${Number($('#sueldo_e8').val()) + comision}</b>
            `,
            'success'
        )
        this.limpiar(campos)
    }

    ejersicio9(){
        let campos : string[] = ['compra_e9'];
        let descuento : number = (Number($('#compra_e9').val())*15) / 100
        Swal.fire(
            'Descuento de compra',
            `Total de la compra: $${$('#compra_e9').val()} <br>
             Descuento del 15%: $${descuento} <br>
             <b>Total a pagar con el 15% de descuento: $${Number($('#compra_e9').val())-descuento }</b>
            `,
            'success'
        )
    }

    ejersicio10(){
        let campos : string[] = ['parcial1_e10','parcial2_e10','parcial3_e10','exam_e10','trabajo_e10'];
        let parciales : number = Math.round(((( Number($('#parcial1_e10').val()) + Number($('#parcial2_e10').val()) + Number($('#parcial3_e10').val()) ) / 3)*55)/100*100)/100
        let examen = ( Number($('#exam_e10').val()) * 30)/100;
        let trabajo = ( Number($('#trabajo_e10').val()) * 15 ) /100;
        Swal.fire(
            `Calificacion final`,
            `55% del Promedio de las 3 calificaciones: <b>${parciales}</b><br>
            30% de calificacion del examen final : <b>${examen}</b> <br>
            15% de la calificación de un trabajo final: <b>${trabajo}</b> <br>
            <b>Calificacion final: ${parciales + examen + trabajo}</>
            `,
            `success`
        )
        this.limpiar(campos);
    }

  
}

let objeto = new Ejersicios2();

