<?php
if (isset($_GET["name"])) {
    $pageTitle = $_GET["name"];
} else {
    if (!isset($pageTitle)) {
        $pageTitle = $pageName;
    }
}
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $pageTitle ?></title>
    <link rel="icon" href="asset/logos/faviconclaire.png" />
    <link rel="stylesheet" href="../includes/css/generalStyle.css">
    <link rel="stylesheet" href="../includes/css/_navbar.css">

    <?php
    if (isset($pageName)) {
        echo '<link rel="stylesheet" href="../includes/css/' . $pageName . '.css">';
    }
    ?>
    <link rel="stylesheet" href="../includes/css/_footer.css">
</head>
<?php include "includes/php/_navbar.php" ?>

<body>