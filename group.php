<?php
$pageTitle = "Notre promo";
$pageName = "group";
include "includes/php/_head.php";
?>

<main>
    <h1>Page du groupe</h1>

    <img id="group-picture" src="asset/images/groupe-portrait.jpg" srcset="
            asset/images/images256/groupe-portrait256.jpg 256w,
            asset/images/images512/groupe-portrait512.jpg 512w,
            asset/images/images1024/groupe-portrait1024.jpg 1024w,
            asset/images/groupe-portrait.jpg 2024w" sizes="(max-width: 250px) 100px, (max-width: 750px) 512px, (max-width: 2000px) 1024px, 1365px" alt="image du groupe">

</main>


<?php
include "includes/php/_footer.php";
?>
<script src="includes/js/group.js"></script>