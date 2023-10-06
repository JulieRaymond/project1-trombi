let width = window.window.innerWidth;
let height = window.innerHeight;

if (width > height) {
  let img = document.getElementById("group-picture");
  img.setAttribute("src", "asset/images/groupe/groupe-paysage.jpg");
  img.setAttribute(
    "srcset",
    "asset/images/images256/groupe-paysage256.jpg 256w, asset/images/images512/groupe-paysage512.jpg 512w, asset/images/images1024/groupe-paysage1024.jpg 1024w, asset/images/group/groupe-paysage.jpg 2024w"
  );
}
