//MA FONCTION D'ORIGINE A AMELIORER
// function distributeFields() {
//   let radius = 280;
//   let fields = document.querySelectorAll(".field"),
//     totalFields = fields.length,
//     angleIncrement = (2 * Math.PI) / totalFields,
//     currentAngle = 0;

//   fields.forEach((field, index) => {
//     let x = Math.cos(currentAngle) * radius;
//     let y = Math.sin(currentAngle) * radius;

//     field.style.transform = `translate(${x}px, ${y}px)`;
//     currentAngle += angleIncrement;
//   });
// }
// distributeFields();

/////////////ENFIN TROUVE A GARDER RESPONSIVE MAIS 15 DIV UNIQUEMENT////////////////////

// function distributeFields(radius) {
//   let fields = document.querySelectorAll(".field"),
//     totalFields = fields.length,
//     angleIncrement = (2 * Math.PI) / totalFields,
//     currentAngle = 0;

//   fields.forEach((field, index) => {
//     let x = Math.cos(currentAngle) * radius;
//     let y = Math.sin(currentAngle) * radius;

//     field.style.transform = `translate(${x}px, ${y}px)`;
//     currentAngle += angleIncrement;
//   });
// }

// function updateRadius() {
//   const windowWidth = window.innerWidth;

//   // Réduit le rayon à 100 lorsque la largeur de la fenêtre est inférieure à 685px, sinon revenir à 280.
//   let radius = windowWidth < 685 ? 170 : 280;

//   distributeFields(radius); // Appele la fonction pour mettre à jour les positions avec le nouveau rayon.
// }

// // Appele la fonction de mise à jour initiale du rayon au chargement de la page.
// window.addEventListener("load", updateRadius);

// // Écoute l'événement de redimensionnement de la fenêtre et mettre à jour le rayon en temps réel.
// window.addEventListener("resize", updateRadius);

/////////////////////////////ESSAYE AVEC DEUX CERCLES////////////////
function distributeFields() {
  let windowWidth = window.innerWidth;
  let radius = 280;

  if (windowWidth < 685) {
    // Si la largeur de la fenêtre est inférieure à 685px, répartissez les 15 div en deux cercles.
    let fields = document.querySelectorAll(".field"),
      totalFields = fields.length,
      angleIncrement1 = (Math.PI * 2) / 10,
      angleIncrement2 = (Math.PI * 2) / 5,
      currentAngle1 = 0,
      currentAngle2 = 0,
      radius1 = 200,
      radius2 = radius1 / 2; // Rayon pour le deuxième cercle (la moitié du premier cercle)

    fields.forEach((field, index) => {
      let x, y;

      if (index < 10) {
        x = Math.cos(currentAngle1) * radius1;
        y = Math.sin(currentAngle1) * radius1;
        currentAngle1 += angleIncrement1;
      } else {
        x = Math.cos(currentAngle2) * radius2;
        y = Math.sin(currentAngle2) * radius2;
        currentAngle2 += angleIncrement2;
      }

      field.style.transform = `translate(${x}px, ${y}px)`;
    });
  } else {
    // Si la largeur de la fenêtre est supérieure à 685px, répartissez les 15 div sur un seul cercle.
    let fields = document.querySelectorAll(".field"),
      totalFields = fields.length,
      angleIncrement = (2 * Math.PI) / totalFields,
      currentAngle = 0;

    fields.forEach((field, index) => {
      let x = Math.cos(currentAngle) * radius;
      let y = Math.sin(currentAngle) * radius;

      field.style.transform = `translate(${x}px, ${y}px)`;
      currentAngle += angleIncrement;
    });
  }
}

// Appeler la fonction de distribution initiale au chargement de la page.
window.addEventListener("load", distributeFields);

// Écouter l'événement de redimensionnement de la fenêtre et mettre à jour la distribution en temps réel.
window.addEventListener("resize", distributeFields);
