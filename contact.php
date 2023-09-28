<?php
$pageTitle = "Contact";
$pageName = "contact";

include "includes/php/_head.php";


?>
<main> 
 
    <h1> Contactez-nous !</h1>
    
<p> Prêt à rencontrer nos super-devs ? <br>
    
    Remplisser le formulaire et laissez-nous coder !</p>

          
            <field> 
            <form action="" method="get">
              
<div class="form-nom-email">

        <div class="form-column"> 
             <label>Nom et Prénom</label>
              <input type="text>" name="nom&prénom" id="nom&prénom" size="40" placeholder="ex: WILDER Paul" autofocus required>
        </div>

        <div class="form-column"> 
              <label>email</label>
              <input type="email" placeholder="frg@gmail.com" required>
        </div class>

</div>

              <label for="ameliorer">Message</label><br>
              <textarea name="message" id="message" placeholder="Bonjour, ...." row="10" required> </textarea>
              <input type="submit" value="envoyer">

              </field>
            
            </form>
        </main>
        <?php
include "includes/php/_footer.php";
?>