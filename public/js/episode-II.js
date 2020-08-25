const II0 = {
    titre: "Tu arrives à la fac en sueur, épuisée d’avoir fourni un effort si intense dès le matin. Tu arrives à la fac en sueur, épuisée d’avoir fourni un effort si intense dès le matin.",
    texte: "En entrant dans l’amphi, tu t’aperçois avec un sourire que le professeur est encore plus en retard que toi. Ça n’est pas étonnant, M. Blanchet est toujours en retard. Ton professeur de psychologie est considéré comme l’un des meilleurs : des cours clairs et intelligibles, un charisme assuré et des anecdotes intéressantes, bref, tout ce qu’on attend d’un bon prof. Mais personne n’est parfait, et le principal défaut de M. Blanchet est d’être toujours en retard. Et de mauvaise foi, il refuse d’entendre toute critique lorsqu’on lui demande d’arriver à l’heure. Enfin, cela te laisse du temps pour souffler. \n" +
        "Tes amis sont là, et Maya est avec eux. Elle relit son cours de la veille comme si elle y cherchait de nouveaux potins. Quelques rangs plus haut, tu croises brièvement le regard de Mathieu. Le Mathieu, qui obnubile tes pensées depuis le début de l’année. Le Mathieu qui est à la fois si détendu et si inaccessible. Puis, une fois que tu contiens le rouge sur tes joues, ton regard se perd vers les premiers rangs. Là, tu vois un jeune homme, Léo, qui ne semble pas dans son assiette. Tu te souviens de lui comme l’étudiant joyeux qui t’avait aidée pour le contrôle de stats, mais aujourd’hui, ses yeux sont rouges, il ne parle à personne et regarde fixement l’estrade pour l’instant inhabitée.",
    choix: [
        {texte: "Mathieu est beaucoup trop beau, mais tu l’es aussi : il est temps d’aller lui parler", lien: null},
        {texte: "Maya aura sûrement de nouveaux potins à partager ", lien: null},
        {texte: "Léo n’a vraiment pas l’air bien… ", lien: null}
    ],
};

const II1 = {
    titre: "Sûre de toi, tu t’avances dans les rangées pour rejoindre Mathieu et son groupe de potes.",
    texte: "Mais à peine t’es-tu mise en marche que tu vois le groupe se déplacer pour aller quelques rangs plus hauts.",
    choix: [
        {texte: "Tu persistes à aller le voir quitte à le pourchasser dans tout l’amphi", lien: null},
        {texte: "Ça ne sert à rien, autant aller voir Maya pour lui raconter ta détresse", lien: null},
        {texte: "Léo a de plus gros soucis que toi ; il a peut-être besoin d’aide", lien: null}
    ],
};

const II1a = {
    titre: "Tu parviens finalement à la hauteur de Mathieu.",
    texte: "Il rit, et cela le rend encore plus beau. Quand il te voit approcher, il te sourit. Avant de perdre tous tes moyens, tu lui lance un « salut » moins assuré que tu ne l’aurais souhaité. Il te semble qu’il s’apprête à te répondre quand son ami lui donne un coup de coude et lui enfile un casque sur les oreilles. Mathieu perd tout intérêt pour ta présence. Un peu déprimée, tu comprends que tu n’arriveras pas à grand-chose pour le moment.",
    choix: [
        {texte: "Tu as décidément besoin du réconfort de ton amie", lien: null},
        {texte: "Tu vas voir Léo", lien: null},
        {texte: "Tu vas t’asseoir en boudant à côté de Maya sans plus parler à personne", lien: null}
    ],
};

const II2 = {
    titre: "Maya te voit arriver de loin et sourit largement lorsque tu poses tes affaires à côté d’elle.",
    texte: "Comme d’habitude, elle est surexcitée, par tout et tout le monde. Pour le moment, elle s’extasie sur le cours de M. Blanchet, et sur le prof en question. Maya aime beaucoup, trop, M. Blanchet. Mais tu as déjà entendu ses éloges et tu lui coupes la parole :",
    choix: [
        {texte: "L’interroger sur l’état de Léo", lien: null},
        {texte: "Lui demander comment se rapprocher de Mathieu", lien: null},
    ],
};

const II2a = {
    titre: "Maya prend tout de suite un air désolé.",
    texte: "Elle lance un regard au concerné : « Ah ça… J’ai entendu dire que ses parents étaient morts la semaine dernière. » Tu grimaces, bouleversée par la nouvelle.",
    choix: [
        {texte: "« Comment ça s’est passé ? »", lien: null},
        {texte: "« Tu sais s’il a pu en parler à quiconque ? »", lien: null},
    ],
    // TODO debloque:  3bis;
};

const II2aa = {
    titre: "« Accident de voiture, il me semble. Ils ont pas soufferts mais ouais, c’est violent. »",
    texte: "Tu lâches un petit « Merde », les yeux fixés sur Léo. ",
    choix: [
        {texte: "Il a sûrement besoin d’aide, tu vas lui parler", lien: null},
        {texte: "Tu changes de sujet de conversation, et demande à Maya si elle sait quoi que ce soit sur Mathieu", lien: null},
        {texte: "Tu vas voir Mathieu pour te changer les idées", lien: null},
        {texte: "Il est l’heure de se concentrer : tu reportes ton attention sur tes cours en attendant l’arrivée du professeur", lien: null},
    ],
};

const ref = {
    titre: "",
    texte: "",
    choix: [
        {texte: "", lien: null},
    ],
};

II0.choix[0].lien = II1;
II0.choix[1].lien = II2;
II0.choix[2].lien = II3;

II1.choix[0].lien = II1a;
II1.choix[1].lien = II2;
II1.choix[2].lien = II3;

II1a.choix[0].lien = II2;
II1a.choix[1].lien = II3;
II1a.choix[2].lien = II4;

II2.choix[0].lien = II2a;
II2.choix[1].lien = II2b;

II2a.choix[0].lien = II2aa;
II2a.choix[1].lien = II2ab;

II2aa.choix[0].lien = II3bis;
II2aa.choix[1].lien = II2b;
II2aa.choix[2].lien = II1;
II2aa.choix[3].lien = II4;

// TODO 3bis : faire mieux
