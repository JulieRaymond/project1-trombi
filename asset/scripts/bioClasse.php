<?php
class Biography
{
    private string $lastName;
    private string $firstName;
    private string $astro;
    private string $linkedIn;
    private string $interest;
    private string $activity;
    private string $animal;
    private string $bio;

    public function __construct($lastName, $firstName, $astro, $linkedIn, $interest, $activity, $animal, $bio)
    {
        $this->lastName = $lastName;
        $this->firstName = $firstName;
        $this->astro = $astro;
        $this->linkedIn = $linkedIn;
        $this->interest = $interest;
        $this->activity = $activity;
        $this->animal = $animal;
        $this->bio = $bio;
    }

    public function getLastName()
    {
        return $this->lastName;
    }
}
