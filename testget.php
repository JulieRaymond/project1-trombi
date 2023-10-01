<?php
$pageTitle = "Notre promo";
$pageName = "group";
include "includes/php/_head.php";
include "asset/scripts/biowrite.php";
?>


<main>
    <?php

    echo $_GET['name'] . "<br>";
    echo $_GET['autre'] . "<br>";

    ?>
    <a href="testget.php?name=nicolas&&autre=bla">cliquez ici pour tester la puissance du get</a>
    <p>
        <?php
        if (isset($_GET['name'])) {
            $whospage = $phpGroup[$_GET['name']];
            echo $whospage->getBio();
        }

        ?>
    </p>
</main>

<?php
include "includes/php/_footer.php";
?>