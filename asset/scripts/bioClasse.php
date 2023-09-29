<?php
class Biography
{
    protected string $lastName;
    protected string $firstName;
    protected string $astro;
    protected string $linkedIn;
    protected string $interest;
    protected string $activity;
    protected string $animal;
    protected string $bio;

    public function __construct($lastName, $firstName, $astro, $linkedIn, $interest, $activity, $animal, $bio)
    {
        $this->$lastName = $lastName;
        $this->$firstName = $firstName;
        $this->$astro = $astro;
        $this->$linkedIn = $linkedIn;
        $this->$interest = $interest;
        $this->$activity = $activity;
        $this->$animal = $animal;
        $this->$bio = $bio;
    }

    public function getLastName()
    {
        return $this->lastName;
    }
}
