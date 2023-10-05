<?php
$pageTitle = "Livre d'or";
$pageName = "goldbook";
include "includes/php/_head.php";
require_once "asset/scripts/classgoldbook.php";


$goldBook = new GoldBook("includes/txt/goldbook.txt");
if (isset($_POST["name"])) {

    //récupérer et nettoyer les infos postées
    $name = cleanInput($_POST["name"]);
    $mail = cleanInput($_POST["email"]);
    $message = cleanInput($_POST["message"]);

    $goldBook->saveMessage($name, $mail, $message);
}
?>

<main>
    <h1>Livre d'or</h1>
    <div class="gbcontenair">

        <section>
            <?php
            foreach ($goldBook->getMessages() as $message) {
            ?>
                <article>
                    <h2><?= htmlspecialchars_decode($message->getName()) ?></h2>
                    <p><?= htmlspecialchars_decode(nl2br($message->getMessage())) ?></p>
                </article>
            <?php
            }
            ?>
        </section>
    </div>



</main>


<?php
include "includes/php/_footer.php";
?>