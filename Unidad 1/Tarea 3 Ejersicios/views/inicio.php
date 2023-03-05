<div class="container p-5">
    <div class="row">
        <div class="col text-center">
            <div class="lead fs-1">Ejersicios 3</div>
        </div>
    </div>
    <div class="row my-5">
        <div class="col-6">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="lead fs-5">Ejersicio 1</div>
                    </div>
                    <div class="col-12">
                        <p class="lead small">
                            La asociación de vinicultores tiene como política fijar un precio inicial al kilo de uva,
                            la cual se clasifica en tipos A y B
                            y además en tamaños 1 y 2.
                            Cuando se realiza la venta del producto, ésta es de un solo tipo y tamaño
                            se requiere determinar cuánto recibirá un productor por la uva que entrega en un embarque
                            considerando lo siguiente:

                            si es de tipo A,
                            se le cargan 20 céntimos al precio inicial cuando es de tamaño 1;
                            y 30 céntimos si es de tamaño 2

                            Si es de tipo B,
                            se rebajan 30 céntimos cuando es de tamaño 1,
                            y 50 céntimos cuando es de tamaño 2
                        </p>
                    </div>
                </div>
                <div class="row my-4">
                    <div class="col-4">
                        <div class="form-floating">
                            <input type="number" class="form-control" id="uva_e1" placeholder="Precio de la uva">
                            <label for="">Precio de la uva</label>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="form-floating">
                            <select class="form-select" id="tipo_e1">
                                <option selected>Selecciona</option>
                                <option value="A">Tipo A</option>
                                <option value="B">Tipo B</option>
                            </select>
                            <label for="">Tipo</label>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="form-floating">
                            <select class="form-select" id="tama_e1">
                                <option selected>Selecciona</option>
                                <option value="1">Tamaño 1</option>
                                <option value="2">Tamaño 2</option>
                            </select>
                            <label for="">Tamaño</label>
                        </div>
                    </div>
                    <div class="col-12 text-center mt-3">
                        <button type="button" class="btn btn-primary mt-2" onclick="objeto.ejersicio1()">Calcular</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="lead fs-5">Ejersicio 2</div>
                    </div>
                    <div class="col-12">
                        <p class="lead">
                            El director de una escuela está organizando un viaje de estudios
                            y requiere determinar cuánto debe cobrar a cada alumno y cuánto debe pagar
                            a la compañía de viajes por el servicio. La forma de cobrar es la siguiente:

                            si son 100 alumnos o más, el costo por cada alumno es de 65 euros
                            de 50 a 99 alumnos, el costo es de 70 euros
                            de 30 a 49, de 95 euros,
                            y si son menos de 30, el costo de la renta del autobús es de 4000 euros,
                            sin importar el número de alumnos
                        </p>
                    </div>
                </div>
                <div class="row my-5">
                    <div class="col">
                        <div class="form-floating">
                            <input type="number" class="form-control" id="alumnos_e2" placeholder="Cantidad de alumnos">
                            <label for="alumnos_e2">Cantidad de alumnos</label>
                        </div>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-primary" onclick="objeto.ejersicio2()">Calcular</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

