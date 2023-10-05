<?php
require_once "asset/scripts/genericfunction.php"; // used for cleanInput.php

class MessageForGoldBook
{
    private string $name;
    private string $message;

    public function __construct(string $contain)
    {
        $array = explode(PHP_EOL, $contain);
        $this->name = $array[0];
        unset($array[0]);
        $this->message = implode(PHP_EOL, $array);
    }

    public function getName()
    {
        return $this->name;
    }

    public function getMessage()
    {
        return $this->message;
    }
}

class GoldBook
{
    private string $path;
    private array $messages = [];

    public function __construct(string $path)
    {
        $this->path = $path;
    }
    public function saveMessage($sentName, $sentEmail, $sentMessage): void
    {
        $name = cleanInput($sentName) . PHP_EOL;
        $mail = cleanInput($sentEmail) . PHP_EOL;
        $message = cleanInput($sentMessage) . PHP_EOL;

        $gbFileToWrite = fopen($this->path, "a");
        fwrite($gbFileToWrite, "Nom : " . $name);
        fwrite($gbFileToWrite, "Mail : " . $mail);
        fwrite($gbFileToWrite, "Message :" . PHP_EOL . $message);
        fwrite($gbFileToWrite, "*******************************" . PHP_EOL);
        fclose($gbFileToWrite);
    }

    public function createMessages(): void
    {
        $fileToRead = fopen($this->path, "r");

        $contains = "";
        while (!feof(($fileToRead))) {
            $line = fgets($fileToRead);
            if (!str_starts_with($line, "***") && !str_starts_with($line, "Mail")) {
                $contains .= $line;
            } elseif (str_starts_with($line, "***")) {
                $this->messages[] = new MessageForGoldBook($contains);
                $contains = "";
            }
        }
        fclose($fileToRead);
    }

    public function getMessages(): array
    {
        $this->messages = [];
        $this->createMessages();
        return $this->messages;
    }
}
