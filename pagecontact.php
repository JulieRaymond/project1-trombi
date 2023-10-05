<?php
$pageTitle = "Contact";
$pageName = "pagecontact";

include "includes/php/_head.php";


?>
<main>

    <h1>Contactez-nous !</h1>

    <p> Prêt à rencontrer nos super-devs ? <br>

        Remplisser le formulaire et laissez-nous coder !</p>


    <field>
        <form action="goldbook.php" method="post">


            <label>Nom et Prénom</label>

            <input type="text>" name="nom&prénom" id="nom&prénom" size="40" placeholder="ex: WILDER Paul" autofocus required>


            <label>Email</label>

            <input type="email" placeholder="frg@gmail.com" required>


            <label for="ameliorer">Message</label>

            <textarea name="message" id="message" placeholder="Bonjour, ...." row="10" required> </textarea>

            <input type="submit" value="Envoyer" class="cta">


        </form>
    </field>

</main>
<?php
include "includes/php/_footer.php";
?>