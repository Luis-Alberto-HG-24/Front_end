var Ejersicios2 = /** @class */ (function () {
    function Ejersicios2() {
    }
    Ejersicios2.prototype.limpiar = function (ids) {
        ids.map(function (campo) {
            $("#".concat(campo)).val('');
        });
    };
    Ejersicios2.prototype.ejersicio1 = function () {
        var campos = ['nombre_e1'];
        Swal.fire('Hola', "".concat($('#nombre_e1').val()), 'success');
        this.limpiar(campos);
    };
    Ejersicios2.prototype.ejersicio2 = function () {
        var campos = ['base_2', 'altura_2'];
        var perimetro = Number(2 * (Number($('#base_2').val()) + Number($('#altura_2').val())));
        var area = Number(Number($('#base_2').val()) * Number($('#altura_2').val()));
        Swal.fire('El resultado es', "Perimetro: ".concat(perimetro, " <br> Area: ").concat(area), 'success');
        this.limpiar(campos);
    };
    Ejersicios2.prototype.ejersicio3 = function () {
        var campos = ['cateto_o_3', 'cateto_o_3'];
        var hipotenusa = Math.round(Math.sqrt(Math.pow(Number($('#cateto_o_3').val()), 2) + Math.pow(Number($('#cateto_a_3').val()), 2)) * 100) / 100;
        Swal.fire('La hipotenusa', "El valor de la Hipotenusa es: ".concat(hipotenusa), 'success');
        this.limpiar(campos);
    };
    Ejersicios2.prototype.ejersicio4 = function () {
        var campos = ['num_1', 'num_2'];
        var num1 = Number($('#num_1').val());
        var num2 = Number($('#num_2').val());
        Swal.fire('Calculos basicos', "Suma: ".concat(num1, " + ").concat(num2, " = ").concat(num1 + num2, " <br>\n            Resta: ").concat(num1, " - ").concat(num2, " = ").concat(num1 - num2, " <br>\n            Multiplicacion: ").concat(num1, " * ").concat(num2, " = ").concat(num1 * num2, " <br>\n            Division: ").concat(num1, " / ").concat(num2, " = ").concat(num1 / num2), 'success');
        this.limpiar(campos);
    };
    Ejersicios2.prototype.ejersicio5 = function () {
        var campos = ['grado_f'];
        var celsius = Math.round((Number($('#grado_f').val()) - 32) * 5 / 9 * 100) / 100;
        Swal.fire('Conversion de grados', "".concat($('#grado_f').val(), " grados Fahrenheit es igual a ").concat(celsius, " grados Celsius"), 'success');
        this.limpiar(campos);
    };
    Ejersicios2.prototype.ejersicio6 = function () {
        var campos = ['num1_e6', 'num2_e6', 'num3_e6'];
        var media = (Number($('#num1_e6').val()) + Number($('#num2_e6').val()) + Number($('#num3_e6').val())) / 3;
        Swal.fire('Media', "La media de ".concat($('#num1_e6').val(), " , ").concat($('#num2_e6').val(), " y ").concat($('#num3_e6').val(), " es: ").concat(media), 'success');
        this.limpiar(campos);
    };
    Ejersicios2.prototype.ejersicio7 = function () {
        var campos = ['minutos_e7'];
        var horas = Math.trunc(Number($('#minutos_e7').val()) / 60);
        var minutos = Number($('#minutos_e7').val()) % 60;
        Swal.fire('Conversion de minutos', "".concat($('#minutos_e7').val(), " minutos es igual a : ").concat(horas, " horas y ").concat(minutos, " minutos"), 'success');
        this.limpiar(campos);
    };
    Ejersicios2.prototype.ejersicio8 = function () {
        var campos = ['sueldo_e8', 'venta1_e8', 'venta2_e8', 'venta3_e8'];
        var ventaTotal = Number($('#venta1_e8').val()) + Number($('#venta2_e8').val()) + Number($('#venta3_e8').val());
        var comision = Math.round(((ventaTotal * 10) / 100) * 100) / 100;
        Swal.fire('Calculo de sueldo', "Sueldo base: ".concat($('#sueldo_e8').val(), " <br>\n            Venta 1: ").concat($('#venta1_e8').val(), " <br>\n            Venta 2: ").concat($('#venta2_e8').val(), " <br>\n            Venta 3: ").concat($('#venta3_e8').val(), " <br>\n            Venta total: ").concat(ventaTotal, " <br>\n            Comision del 10% : ").concat(comision, " <br>\n            <b>Sueldo total: ").concat(Number($('#sueldo_e8').val()) + comision, "</b>\n            "), 'success');
        this.limpiar(campos);
    };
    Ejersicios2.prototype.ejersicio9 = function () {
        var campos = ['compra_e9'];
        var descuento = (Number($('#compra_e9').val()) * 15) / 100;
        Swal.fire('Descuento de compra', "Total de la compra: $".concat($('#compra_e9').val(), " <br>\n             Descuento del 15%: $").concat(descuento, " <br>\n             <b>Total a pagar con el 15% de descuento: $").concat(Number($('#compra_e9').val()) - descuento, "</b>\n            "), 'success');
    };
    Ejersicios2.prototype.ejersicio10 = function () {
        var campos = ['parcial1_e10', 'parcial2_e10', 'parcial3_e10', 'exam_e10', 'trabajo_e10'];
        var parciales = Math.round((((Number($('#parcial1_e10').val()) + Number($('#parcial2_e10').val()) + Number($('#parcial3_e10').val())) / 3) * 55) / 100 * 100) / 100;
        var examen = (Number($('#exam_e10').val()) * 30) / 100;
        var trabajo = (Number($('#trabajo_e10').val()) * 15) / 100;
        Swal.fire("Calificacion final", "55% del Promedio de las 3 calificaciones: <b>".concat(parciales, "</b><br>\n            30% de calificacion del examen final : <b>").concat(examen, "</b> <br>\n            15% de la calificaci\u00F3n de un trabajo final: <b>").concat(trabajo, "</b> <br>\n            <b>Calificacion final: ").concat(parciales + examen + trabajo, "</>\n            "), "success");
        this.limpiar(campos);
    };
    return Ejersicios2;
}());
var objeto = new Ejersicios2();
