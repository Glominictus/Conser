$(document).ready(function() {

    $('#btnSend').click(function() {

        var errores = '';

        //validar nombre//
        if ($('#nombre').val() == '') {
            errores += '<p>Escriba un nombre</p>';
            $('#nombre').css("background-color", "#f14b4b")
        } else {
            $('#nombre').css("background-color", "white")
        }
        if ($('#email').val() == '') {
            errores += '<p>Escriba un email</p>';
            $('#email').css("background-color", "#f14b4b")
        } else {
            $('#email').css("background-color", "white")
        }
        if ($('#mensaje').val() == '') {
            errores += '<p>Escriba un mensaje</p>';
            $('#mensaje').css("background-color", "#f14b4b")
        } else {
            $('#mensaje').css("background-color", "white")
        }
        if (errores == '' == false) {
            var mensajeModal = '<div class="modal-wrap">' +
                '<div class="mensaje-modal">' +
                '<h3>Errores encontrados</h3>' +
                errores +
                '<span id="btnClose">Cerrar</span>' +
                '</div>' +
                '</div>'

            $('body').append(mensajeModal);
        }
        $('#btnClose').click(function() {
            $('.modal-wrap').remove();
        });
    });
});