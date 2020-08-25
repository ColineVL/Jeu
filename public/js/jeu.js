const afficher = (page) => {
    $('#titre').html(page.titre);
    $('#texte').html(page.texte);
    $('#choix').html("");
    (page.choix).forEach(function (choix) {
        const ligne = "<li>" + choix.texte + "</li>";
        $('#choix').append(ligne);
        const elt = $('#choix')[0].lastElementChild;
        elt.onclick = function(){ afficher(choix.lien); } ;
    });
    if (page.hasOwnProperty(debloque)) {
        // TODO
    }
};

$(document).ready(function () {
    afficher(I0);
});