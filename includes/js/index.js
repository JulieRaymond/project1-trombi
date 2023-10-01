function distributeFields() {
  let windowWidth = window.innerWidth;
  let radius = 275;

  if (windowWidth < 685) {
    // Si la largeur de la fenêtre < à 685px, répartis les 15 div en 2 cercles.
    let fields = document.querySelectorAll(".field"),
      totalFields = fields.length,
      angleIncrement1 = (Math.PI * 2) / 10,
      angleIncrement2 = (Math.PI * 2) / 5,
      currentAngle1 = 0,
      currentAngle2 = 0,
      radius1 = 150,
      radius2 = radius1 / 2; // Rayon pour le deuxième cercle (la moitié du 1er cercle)

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
    // Si la largeur de la fenêtre est > à 685px, répartis les 15 div sur un seul cercle.
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

// Appele la fonction de distribution initiale au chargement de la page.
window.addEventListener("load", distributeFields);

// Écoute l'événement de redimensionnement de la fenêtre et met à jour en temps réel.
window.addEventListener("resize", distributeFields);
