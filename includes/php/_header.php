<?php
if (isset($_GET["name"])) {
    $pageTitle = $_GET["name"];
} else {
    if (!isset($pageTitle)) {
        $pageTittle = $pageName;
    }
}
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $pageTittle ?></title>
    <link rel="stylesheet" href="../includes/css/generalStyle.css">
    <?php
    if (isset($pageName)) {
        echo '<link rel="stylesheet" href="../includes/css/' . $pageName . '.css">';
    }
    ?>
</head>

<body>