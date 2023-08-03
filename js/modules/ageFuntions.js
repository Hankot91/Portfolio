function actualizarAnho() {
    var anhoActual = new Date().getFullYear();
    var spanAnho = document.getElementById("year");
    spanAnho.textContent = anhoActual;
}


function calcularEdad() {
    const fechaNacimiento = '1999-08-19';
    const age = document.getElementById('date-age');
    const fechaNacimientoDate = new Date(fechaNacimiento);
    const fechaActual = new Date();

    let edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();

    if (
        fechaActual.getMonth() < fechaNacimientoDate.getMonth() ||
        (fechaActual.getMonth() === fechaNacimientoDate.getMonth() &&
            fechaActual.getDate() < fechaNacimientoDate.getDate())
    ) {
        edad--;
    }

    age.textContent = edad;
}

export {actualizarAnho, calcularEdad};