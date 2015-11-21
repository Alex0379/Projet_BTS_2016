jQuery(document).ready(function() {

    // Afficher/Masquer le Menu de navigation
    $('#boutonMenu').click(function() {
        $('#navMenu').slideToggle();
    });

    // Annimation sur la barre de recherche
    $('#barreRecherche').bind("focus",function() {
            $(this).css('box-shadow', '1px 1px 12px #555');
            $(this).parent().css("background-color", "rgba(192, 180, 203, 0.7");
        }).bind("focusout",function() {
        $(this).css('box-shadow', '0px 0px 0px #555');
        $(this).parent().css("background-color", "#795A99");
        })

});