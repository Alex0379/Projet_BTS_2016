jQuery(document).ready(function() {

    // Afficher/Masquer le Menu de navigation
    $('#boutonMenu').click(function() {
        $('#navMenu').slideToggle();
    });

    // Annimation sur la barre de recherche
    $('#barreRecherche').bind('focus',function() {
            $(this).css('box-shadow', '1px 1px 12px #555');
            $(this).parent().css('background-color', 'rgba(0, 173, 238, 0.7)');
        }).bind('blur',function() {
        $(this).css('box-shadow', '');
        $(this).parent().css('background-color', '');
        })

});