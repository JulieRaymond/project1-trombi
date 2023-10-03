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
    private string $page;
    private string $image; //a faire après avoir recadrer les images
    private string $srcset; // a faire après avoir redimmensionner une image

    const IMAGES_WIDTHS = [100, 256, 512, 1024];


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
        $this->page = $this->createPage();
        $this->image = $this->createImage();
        $this->srcset = $this->createScrset();
    }

    private function createPage(): string
    {
        if ($this->firstName === "Côme") {
            $firstName = "come";
        } elseif ($this->firstName === "Mélissa") {
            $firstName = "melissa";
        } elseif ($this->firstName === "Séverine") {
            $firstName = "severine";
        } else {
            $firstName = trim(strtolower($this->firstName));
        }
        return $firstName;
    }

    private function createImage(): string // ajouter alt ?
    {
        return 'asset/images/crop/' . $this->page . '.jpg';
    }

    private function createScrset(): string
    {

        $srcset = 'asset/images/' . $this->page . '.jpg ' . PHP_EOL;
        foreach (Biography::IMAGES_WIDTHS as $width) {
            $srcset .= 'asset/images/crop/images' . $width . '/' . $this->page . $width . '.jpg ' . $width . 'w,';
        }
        $srcset =  substr($srcset, 0, -1) . PHP_EOL;
        $srcset = str_replace(",", "," . PHP_EOL, $srcset);
        return $srcset;
    }

    public function getLastName(): string
    {
        return $this->lastName;
    }

    public function getFirstName(): string
    {
        return $this->firstName;
    }

    public function getAstro(): string
    {
        return $this->astro;
    }

    public function getLinkedIn(): string
    {
        return $this->linkedIn;
    }

    public function getInterest(): string
    {
        return $this->interest;
    }

    public function getActivity(): string
    {
        return $this->activity;
    }
    public function getAnimal(): string
    {
        return $this->animal;
    }

    public function getBio(): string
    {
        return $this->bio;
    }
    public function getPage(): string // pas sûr que cela serve
    {
        return $this->page;
    }
    public function getImage(): string
    {
        return $this->image;
    }

    public function getSrcset(): string
    {
        return $this->srcset;
    }
}
