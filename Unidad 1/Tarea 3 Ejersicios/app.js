var Ejersicios3 = /** @class */ (function () {
    function Ejersicios3() {
    }
    Ejersicios3.prototype.ejersicio1 = function () {
        var precioUva = Number($('#uva_e1').val());
        var tipo = String($('#tipo_e1').val());
        var tama = Number($('#tama_e1').val());
        var total;
        if (tipo == "A") {
            if (tama == 1) {
                total = precioUva + .20;
            }
            else {
                total = precioUva + .30;
            }
        }
        else {
            if (tama == 1) {
                total = precioUva - .30;
            }
            else {
                total = precioUva - .50;
            }
        }
        Swal.fire("Precio de la uva", "Precio inicial de la uva:  $".concat(precioUva, " <br>\n             Tipo de uva: ").concat(tipo, " <br>\n             Tama\u00F1o de la uva:  ").concat(tama, " <br>\n             <b>Precio total de la uva:  $").concat(total, "</b>\n            "), "success");
    };
    Ejersicios3.prototype.ejersicio2 = function () {
        var alumnos = Number($('#alumnos_e2').val());
        var cobroTotal;
        if (alumnos >= 100) {
            cobroTotal = (alumnos * 65);
        }
        else if (alumnos >= 50 && alumnos <= 99) {
            cobroTotal = (alumnos * 70);
        }
        else if (alumnos >= 30 && alumnos <= 49) {
            cobroTotal = (alumnos * 95);
        }
        else {
            cobroTotal = Math.round((4000 / alumnos));
        }
        if (alumnos < 30) {
            Swal.fire("Ejersicio 2", "El cobro total por alumno es: $".concat(cobroTotal), "success");
        }
        else {
            Swal.fire("Ejersicio 2", "El cobro total es: $".concat(cobroTotal), "success");
        }
        $('#alumnos_e2').val('');
    };
    Ejersicios3.prototype.vigilante = function () {
        $('#dia_e3').on('change', function () {
            if ($('#dia_e3').val() != 5) {
                $('#seccion_input').removeClass('d-none');
            }
            else {
                $('#seccion_input').addClass('d-none');
            }
        });
    };
    Ejersicios3.prototype.ejersicio3 = function () {
        var minutos = Number($('#minutos_e3').val());
        var dia = Number($('#dia_e3').val());
        var turno = Number($('#turno_e3').val());
        var paquete1 = 5;
        var paquete2 = .80;
        var paquete3 = .70;
        var extra = .50;
        var cobroTotal;
        if (minutos <= 5) {
            cobroTotal = paquete1;
        }
        else if (minutos >= 6 && minutos <= 8) {
            cobroTotal = paquete1 + paquete2;
        }
        else if (minutos >= 9 && minutos <= 10) {
            cobroTotal = paquete1 + paquete2 + paquete3;
        }
        else {
            minutos = minutos - 10;
            cobroTotal = (minutos * extra) + paquete1 + paquete2 + paquete3;
        }
        if (dia != 5) {
            if (turno == 1) {
                cobroTotal = (cobroTotal * 15) / 100;
            }
            else {
                cobroTotal = (cobroTotal * 10) / 100;
            }
        }
        else {
            cobroTotal = (cobroTotal * 3) / 100;
        }
        Swal.fire("Ejersicio 3", "El cobro total por ".concat(minutos, " minutos es de $").concat(cobroTotal), "success");
    };
    return Ejersicios3;
}());
var objeto = new Ejersicios3();
objeto.vigilante();
