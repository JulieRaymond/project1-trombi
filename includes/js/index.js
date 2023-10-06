function distributeFields() {
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  let radiusmobil = windowHeight / 6;
  let radiusdektop = windowHeight / 3;
  let container = document.getElementById("container");

  if (windowWidth < 685) {
    // Si la largeur de la fenêtre < à 685px, div avec la classe "desktop" en un cercle.
    let fieldsDesktop = document.querySelectorAll(".desktop");
    let totalFieldsDesktop = fieldsDesktop.length;
    let angleIncrement1 = (Math.PI * 2) / totalFieldsDesktop;
    let currentAngle1 = 0;

    fieldsDesktop.forEach((field, index) => {
      let x, y;
      x = Math.cos(currentAngle1) * radiusmobil;
      y = Math.sin(currentAngle1) * radiusmobil;
      currentAngle1 += angleIncrement1;
      field.style.transform = `translate(${x}px, ${y}px)`;
    });

    // div avec la classe "mobil" en un cercle à l'intérieur du cercle formé par les "desktop".
    let fieldsMobil = document.querySelectorAll(".mobil");
    let totalFieldsMobil = fieldsMobil.length;
    let angleIncrement2 = (Math.PI * 2) / totalFieldsMobil;
    let currentAngle2 = 0;
    let innerRadius = radiusmobil / 2.5; //rayon en fonction de la distance entre les cercles.

    fieldsMobil.forEach((field, index) => {
      let x, y;
      x = Math.cos(currentAngle2) * innerRadius;
      y = Math.sin(currentAngle2) * innerRadius;
      currentAngle2 += angleIncrement2;
      field.style.transform = `translate(${x}px, ${y}px)`;
    });
  } else {
    // Si la largeur de la fenêtre est > à 685px, 15 div en un seul cercle.
    let fields = document.querySelectorAll(".field");
    let totalFields = fields.length;
    let angleIncrement = (2 * Math.PI) / totalFields;
    let currentAngle = 0;

    fields.forEach((field, index) => {
      let x = Math.cos(currentAngle) * radiusdektop;
      let y = Math.sin(currentAngle) * radiusdektop;

      field.style.transform = `translate(${x}px, ${y}px)`;
      currentAngle += angleIncrement;
    });
  }
}

// Appele la fonction de distribution initiale au chargement de la page.
window.addEventListener("load", distributeFields);

// Écoute l'événement de redimensionnement de la fenêtre et met à jour en temps réel.
window.addEventListener("resize", distributeFields);
