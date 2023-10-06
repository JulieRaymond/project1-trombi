// Je déclare un tableau contenant les motifs des cartes.
let motifsCartes = [
  1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12,
  13, 13, 14, 14, 15, 15,
];

// Je déclare un tableau pour suivre l'état des cartes.
let etatsCartes = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0,
];

// Je déclare un tableau pour stocker les cartes retournées.
let cartesRetournees = [];

// Je déclare une variable pour compter le nombre de paires trouvées.
let nbPairesTrouvees = 0;

// Je récupère toutes les images dans l'élément avec l'ID "tapis".
let imgCartes = document.getElementById("tapis").getElementsByTagName("img");

// J'attribue une propriété "noCarte" à chaque image pour suivre sa position.
for (let i = 0; i < imgCartes.length; i++) {
  imgCartes[i].noCarte = i;

  // J'ajoute un gestionnaire d'événements "onclick" à chaque image.
  imgCartes[i].onclick = function () {
    controleJeu(this.noCarte);
    // Cette ligne appelle la fonction "controleJeu" avec l'argument "this.noCarte",
    // ce qui signifie que la carte cliquée est passée en tant que numéro de carte
    // à la fonction pour être gérée.
  };
}

// J'appelle la fonction d'initialisation du jeu.
initialiseJeu();

// Cette fonction met à jour l'affichage de la carte en fonction de son état.
function majAffichage(noCarte) {
  switch (etatsCartes[noCarte]) {
    case 0:
      // Si l'état de la carte est 0, je montre le dos de la carte.
      imgCartes[noCarte].src = "/asset/logos/logoP.png";
      break;
    case 1:
      // Si l'état de la carte est 1, je montre l'image correspondant au motif de la carte.
      imgCartes[noCarte].src =
        "/asset/images/crop/cartes/carte" + motifsCartes[noCarte] + ".jpg";
      break;
    case -1:
      // Si l'état de la carte est -1, je cache la carte en la rendant invisible.
      imgCartes[noCarte].style.visibility = "hidden";
      break;
  }
}

// Cette fonction redirige vers la page "bravo.php" lorsque le jeu est terminé.
function rejouer() {
  window.location.href = "bravo.php";
}
// Cette fonction initialise le jeu en mélangeant aléatoirement les motifs des cartes.
function initialiseJeu() {
  // Je parcours le tableau des motifs de cartes en partant de la fin.
  for (let position = motifsCartes.length - 1; position >= 1; position--) {
    // Je génère un index aléatoire entre 0 et la position actuelle.
    let hasard = Math.floor(Math.random() * (position + 1));

    // J'échange le motif de la carte à la position actuelle avec celui à l'index aléatoire.
    let sauve = motifsCartes[position];
    motifsCartes[position] = motifsCartes[hasard];
    motifsCartes[hasard] = sauve;
  }
}

// Cette fonction gère le contrôle du jeu lorsqu'une carte est cliquée.
function controleJeu(noCarte) {
  if (cartesRetournees.length < 2) {
    if (etatsCartes[noCarte] == 0) {
      // Si l'état de la carte est 0, je la retourne.
      etatsCartes[noCarte] = 1;
      cartesRetournees.push(noCarte);
      majAffichage(noCarte);
    }
    if (cartesRetournees.length == 2) {
      let nouveauEtat = 0;
      if (
        motifsCartes[cartesRetournees[0]] == motifsCartes[cartesRetournees[1]]
      ) {
        // Si les cartes retournées sont identiques, je les marque comme trouvées.
        nouveauEtat = -1;
        nbPairesTrouvees++;
      }

      etatsCartes[cartesRetournees[0]] = nouveauEtat;
      etatsCartes[cartesRetournees[1]] = nouveauEtat;

      // J'attends un moment avant de masquer les cartes retournées.
      setTimeout(function () {
        majAffichage(cartesRetournees[0]);
        majAffichage(cartesRetournees[1]);
        cartesRetournees = [];

        // Si toutes les paires ont été trouvées, je redirige vers la page "bravo.php".
        if (nbPairesTrouvees == 15) {
          rejouer();
        }
      }, 750);
    }
  }
}
