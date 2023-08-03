export function contacEvent() {
    const btnEnviar = document.getElementById('btnEnviar');

    btnEnviar.addEventListener('click', function () {
        const email = document.getElementById('inputEmail').value;
        const nombre = document.getElementById('inputNombre').value;
        const asunto = document.getElementById('inputAsunto').value;
        const mensaje = document.getElementById('inputMensaje').value;

        if (!email || !nombre || !asunto || !mensaje) {
            const myModal = document.getElementById('myModal');
            const modal = new bootstrap.Modal(myModal);
            modal.show();
        } else {
            const cuerpoCorreo = `Hola, mi nombre es ${nombre}. ${mensaje}. Mi contacto es: ${email}`;
            const emailto = 'cras991@hotmail.com'
            const mailtoLink = `mailto:${emailto}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpoCorreo)}`;

            window.location.href = mailtoLink;
        }
    });
};