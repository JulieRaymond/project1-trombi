// Cette fonction distribue les éléments dans une mise en page circulaire en fonction de la largeur de la fenêtre.
function distributeFields() {
  // Je récupère la largeur et la hauteur de la fenêtre.
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;

  // Je définis les rayons pour le cercle en fonction de la taille de la fenêtre.
  let radiusmobil = windowHeight / 6;
  let radiusdektop = windowHeight / 3;

  // Je récupère l'élément avec l'ID "container".
  let container = document.getElementById("container");

  if (windowWidth < 685) {
    // Si la largeur de la fenêtre est inférieure à 685px, je distribue les éléments en cercle.

    // Je sélectionne tous les éléments avec la classe "desktop".
    let fieldsDesktop = document.querySelectorAll(".desktop");
    let totalFieldsDesktop = fieldsDesktop.length;

    // Je calcule l'angle d'incrémentation en fonction du nombre d'éléments.
    let angleIncrement1 = (Math.PI * 2) / totalFieldsDesktop;
    let currentAngle1 = 0;

    // Je parcours chaque élément "desktop" et les place en cercle.
    fieldsDesktop.forEach((field, index) => {
      let x, y;
      x = Math.cos(currentAngle1) * radiusmobil;
      y = Math.sin(currentAngle1) * radiusmobil;
      currentAngle1 += angleIncrement1;
      field.style.transform = `translate(${x}px, ${y}px)`;
    });

    // Je distribue les éléments avec la classe "mobil" à l'intérieur du cercle formé par les "desktop".
    let fieldsMobil = document.querySelectorAll(".mobil");
    let totalFieldsMobil = fieldsMobil.length;

    // Je calcule l'angle d'incrémentation pour les éléments "mobil".
    let angleIncrement2 = (Math.PI * 2) / totalFieldsMobil;
    let currentAngle2 = 0;

    // Je définis le rayon intérieur pour les éléments "mobil".
    let innerRadius = radiusmobil / 2.5;

    // Je place les éléments "mobil" en cercle à l'intérieur du cercle "desktop".
    fieldsMobil.forEach((field, index) => {
      let x, y;
      x = Math.cos(currentAngle2) * innerRadius;
      y = Math.sin(currentAngle2) * innerRadius;
      currentAngle2 += angleIncrement2;
      field.style.transform = `translate(${x}px, ${y}px)`;
    });
  } else {
    // Si la largeur de la fenêtre est supérieure à 685px, je distribue tous les éléments en un seul cercle.

    // Je sélectionne tous les éléments avec la classe "field".
    let fields = document.querySelectorAll(".field");
    let totalFields = fields.length;

    // Je calcule l'angle d'incrémentation en fonction du nombre d'éléments.
    let angleIncrement = (2 * Math.PI) / totalFields;
    let currentAngle = 0;

    // Je place tous les éléments en cercle.
    fields.forEach((field, index) => {
      let x = Math.cos(currentAngle) * radiusdektop;
      let y = Math.sin(currentAngle) * radiusdektop;
      field.style.transform = `translate(${x}px, ${y}px)`;
      currentAngle += angleIncrement;
    });
  }
}

// J'appelle la fonction de distribution initiale lorsque la page se charge.
window.addEventListener("load", distributeFields);

// J'écoute l'événement de redimensionnement de la fenêtre et je mets à jour la disposition en temps réel.
window.addEventListener("resize", distributeFields);
