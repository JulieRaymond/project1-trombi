  <?php
  $pageTitle = "Trombinoscope PHP 09-2023";
  $pageName = "index";
  include "includes/php/_head.php";
  include "asset/scripts/biowrite.php";
  $counter = 0;
  ?>

  <main>
    <div id="container">
      <h1>Trombinoscope</h1>
      <?php foreach ($phpGroup as $person) { ?>
        <div class="field 
        <?php if ($counter < 10) {
          echo "desktop";
        } else {
          echo "mobil";
        }
        ?>">
          <a href="<?php echo $person->getPhpPage(); ?>">
            <?= $person->getImgTag() ?>
          </a>
        </div>
      <?php
        $counter += 1;
      } ?>
    </div>
  </main>

  <?php
  include "includes/php/_footer.php";
  ?>
  <script src="includes/js/index.js"></script>