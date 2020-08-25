const ref = {
    titre: "",
    texte: "",
    choix: [
        {texte: "", lien: null}
    ],
};

const I0 = {
    titre: "Tu ne sais pas ce qui te réveille en premier.",
    texte: "La sonnerie stridente du téléphone qui vibre pour la troisième fois ou le rayon de soleil qui perce à travers le rideau mal fermé.  Après un long bâillement, tu regardes l’heure pour te rendre compte que tu es déjà en retard. Les cours commencent dans 40 minutes, et aller jusqu’à la fac t’en prend au moins 20. C’est toujours mieux que ta meilleure amie, Maya, qui doit prendre trois bus différents et prier pour que le trafic soit fluide, mais tout de même, c’est 20 minutes de trop. Et puis ce lit est si confortable…",
    choix: [
        {texte: "Se lever", lien: null},
        {texte: "Rester au fond du lit", lien: null}
        ],
};

const I1 = {
    titre: "A peine as-tu mis tes deux pieds hors du lit que tu regrettes déjà ta décision.",
    texte: "Le carrelage des résidences universitaires est toujours trop froid, tu frissonnes. Mais au moins, tu vas avoir le temps de manger un bout avant de partir. Une fois le bol de céréales rempli, tu ouvres en grand les rideaux pour être sûre de te réveiller. Il fait beau aujourd’hui, malgré les orages annoncés pour la soirée. Cette nouvelle te redonne le sourire. Sentir le soleil sur ton visage endormi te motive enfin à te changer pour partir à l’université. Tu auras même peut-être le temps de t’arrêter pour profiter du parc.",
    choix: [
        {texte: "Y aller à pied", lien: null},
        {texte: "Prendre le bus", lien: null}
    ],
};

const I1a = {
    titre: "Le soleil te fait de l’œil, tes baskets aussi, alors tu choisis de te rendre à la fac à la force de tes jambes.",
    texte: "Déjà, ça fait de l’exercice, et puis on ne peut gâcher un si beau temps en s’enfermant dans une boite de conserve roulante.",
    choix: [
        {texte: "C'est parti !", lien: null}
    ],
};

const I1b = {
    titre: "Restons sérieux, le bus est quand même plus rapide et tu n’es pas en avance.",
    texte: "Mais à peine es-tu arrivé à ton arrêt habituel que tu vois ton bus partir gaiement, sans toi. Tu grognes, il va te falloir faire le chemin à pied, voir même en courant pour rattraper le léger retard que t’as coûté ce détour.",
    choix: [
        {texte: "En avant !", lien: null}
    ],
};

const I2 = {
    titre: "Non, décidément, hors de question de sortir d’ici, le monde extérieur est trop agressif pour toi.",
    texte: "Cependant incapable de te rendormir, tu jettes un œil dans ta chambre étudiante pas plus grande qu’un cagibi. Le plafond n’est pas uniforme, tu t’étais un jour imaginé trouver des constellations parmi les tâches et points de saleté laissés par tes prédécesseurs. Là-bas, sur ton bureau, s’étalent les devoirs de la veille qui ont rapidement été abandonnés au profit d’une vidéo autrement plus passionnante traitant de la reproduction des phasmes. Au moins, la vaisselle est faite. Pas rangée, mais il n’y a de toutes manières pas d’espace où l’installer. Tu t’étires avec un sourire. Cet endroit, malgré tous ses petits défauts, fait bien office de chez-soi. Ton téléphone sonne pour la quatrième fois : il est temps de sortir du lit. A cette heure, ton bus est sûrement déjà passé. Il va falloir courir…",
    choix: [
        {texte: "Tu mets tes chaussures et tu t'en vas.", lien: null}
    ],
};

I0.choix[0].lien = I1;
I0.choix[1].lien = I2;

I1.choix[0].lien = I1a;
I1.choix[1].lien = I1b;

// TODO enlever ça et mettre une page d'accueil correcte
II0 = I0;

I1a.choix[0].lien = II0;
I1b.choix[0].lien = II0;
I2.choix[0].lien = II0;

