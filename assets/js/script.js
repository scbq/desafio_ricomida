$(document).ready(function() {
    // Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Click event for alert
    $('#enviarCorreo').click(function() {
        alert('El correo fue enviado correctamente...');
    });

    // Double click event for changing text color
    $('h2').on('dblclick', function() {
        $(this).css('color', 'red');
    });

    // Toggle visibility of card content
    $('.card-title').click(function() {
        $(this).siblings('.card-text').toggle();
    });
    
    // Initialize carousel
    $('.carousel').carousel({
        interval: 2000
    });
});
