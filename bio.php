<?php
include "asset/scripts/biowrite.php";
if (!empty($_GET) && in_array($_GET['name'], array_keys($phpGroup))) {
    $name = $phpGroup[$_GET['name']];
} else {
    $name = $phpGroup["sami"];
}
$pageTitle = "Bio";
$pageName = "bio";
include "includes/php/_head.php";
?>

<main>

    <div class="container">
        <div class="sub-contenair">
            <div class="photoProfile">
                <?= $name->getImgTag() ?>
            </div>
            <div class=" boxinfo">
                <h1>
                    <?= $name->getFirstName() ?> <?= $name->getLastName() ?>
                </h1>
                <a href="<?= $name->getLinkedIn() ?>"><img src="asset/logos/linkedin.svg" alt="logo linkedin"></a>
            </div>
        </div>
        <div class="sub-contenair">
            <div class="boxperso">
                <p>Signe astrologique : <?= $name->getAstro() ?><br>
                    Centre(s) d'intérêt : <?= $name->getInterest() ?><br>
                    Activités : <?= $name->getActivity() ?><br>
                    Animal: <?= $name->getAnimal() ?></p>
            </div>
            <div class="photoPerso">
                <?= $name->getImgTag() ?>
            </div>
        </div>
        <div class="boxBio">
            <p><?= $name->getBio() ?></p>
        </div>
    </div>



</main>


<?php
include "includes/php/_footer.php";
?>