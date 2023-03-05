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
        var alumos = Number($('#alumnos_e2').val());
    };
    return Ejersicios3;
}());
var objeto = new Ejersicios3();
