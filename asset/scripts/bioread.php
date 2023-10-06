<?php

/**
 * used to pass a read cursor a number of lines
 *
 * @param mixed $fileToRead / a file opened with fopen
 * @param integer $nbOfLines 
 * @return void
 */
function passLines($fileToRead, int $nbOfLines): void
{
    for ($i = 0; $i < $nbOfLines; $i++) {
        fgets($fileToRead);
    }
}

function createVariable(string $variable, string $value, mixed $fileToWrite): void
{
    fwrite($fileToWrite, $variable . ' = "' . trim($value) . '";' . PHP_EOL);
}

function writeStartOfFile($fileToWrite): void
{
    fwrite($fileToWrite, '<?php' . PHP_EOL);
    fwrite($fileToWrite, 'include "classbio.php";' . PHP_EOL);
    fwrite($fileToWrite, '$phpGroup = [];' . PHP_EOL);
}

function writeObject($fileToWrite, $firstName): void
{

    $firstName = trim($firstName);
    $arguments = '$lastName, $firstName, $astro, $linkedIn, $interest, $activity, $animal, $bio';
    if ($firstName === "Côme") {
        $firstName = "come";
    } elseif ($firstName === "Mélissa") {
        $firstName = "melissa";
    } elseif ($firstName === "Séverine") {

        $firstName = "severine";
    }
    $firstName = strtolower($firstName);
    $stringToCreateObject = '$' . $firstName . ' = new Biography(' . $arguments . ');' . PHP_EOL;
    fwrite($fileToWrite, $stringToCreateObject);
    fwrite($fileToWrite, '$phpGroup["' . $firstName . '"] = $' . $firstName . ';' . PHP_EOL . PHP_EOL);
    echo trim($firstName) . " a bien été créé." . PHP_EOL;
}


function parseBios()
{
    $firstName = "";
    $fileToRead = fopen("biostext.txt", "r"); // on ouvre le fichier en mode lecture
    $fileToWrite = fopen("biowrite.php", "w");

    writeStartOfFile($fileToWrite);


    passLines($fileToRead, 19);
    $isBio = false;
    $bioText = '"';

    while (!feof(($fileToRead))) { // tant qu'on est pas à la fin du fichier
        $line = fgets($fileToRead);
        if ($line === PHP_EOL || $line === " " . PHP_EOL || str_starts_with($line, ">")) {
        } else if (str_starts_with($line, "Nom")) {
            if ($isBio) {
                $bioText = trim($bioText) . '";';

                fwrite($fileToWrite, '$bio = ' . nl2br($bioText) . PHP_EOL);

                writeObject($fileToWrite, $firstName);


                // reset des variables (la boucle est bouclée)

                $isBio = false;
                $bioText = '"';
            }

            $array = explode(" ", $line);

            $firstName = $array[count($array) - 1];
            //$firstName = trim($array[count($array) - 1]);
            createVariable('$lastName', $array[count($array) - 2], $fileToWrite);
            //fwrite($fileToWrite, '$lastName = "' . $lastName . '";' . PHP_EOL);
            //fwrite($fileToWrite, '$firstName = "' . $firstName . '";' . PHP_EOL);
            createVariable('$firstName', $firstName, $fileToWrite);
        } else if (str_starts_with($line, "Astro")) {
            $array = explode(":", $line);
            fwrite($fileToWrite, '$astro = "' . trim($array[count($array) - 1]) . '";' . PHP_EOL);
        } else if (str_starts_with($line, "url")) {
            $array = explode(":", $line);
            fwrite($fileToWrite, '$linkedIn = "https:' . trim($array[count($array) - 1]) . '";' . PHP_EOL);
        } else if (str_starts_with($line, "- Centre")) {
            $array = explode(":", $line);
            fwrite($fileToWrite, '$interest = "' . trim($array[count($array) - 1]) . '";' . PHP_EOL);
        } else if (str_starts_with($line, "- Sport")) {
            $array = explode(":", $line);
            fwrite($fileToWrite, '$activity = "' . trim($array[count($array) - 1]) . '";' . PHP_EOL);
        } else if (str_starts_with($line, "- Animal")) {
            $array = explode(":", $line);
            fwrite($fileToWrite, '$animal = "' . trim($array[count($array) - 1]) . '";' . PHP_EOL);
        } else if (str_starts_with($line, "- Bio")) {
            $isBio = true;
        } else if ($isBio) {
            $bioText .= $line;
        } else {
            //fwrite($fileToWrite, $line);
        }
    }

    $bioText = trim($bioText) . '"';
    fwrite($fileToWrite, '$bio = ' . nl2br($bioText) . ';' . PHP_EOL);
    writeObject($fileToWrite, $firstName);
    fclose($fileToRead);
    fclose($fileToWrite);
}
parseBios();
