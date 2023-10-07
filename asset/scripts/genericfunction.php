<?php

/**
 * return input after cleaned
 *
 * @param string $data
 * @return string
 */
function cleanInput($data): string
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
