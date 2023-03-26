const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];

class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages;
        this.militaryImages = militaryImages;
    }
    
    getRandomCivil() {
        const randomImage = Math.floor(Math.random() * this.civilImages.length);
        return this.civilImages[randomImage];
        
    }
    
    getRandomMilitary() {
        const randomImage = Math.floor(Math.random() * this.militaryImages.length);
        return this.militaryImages[randomImage];
    }
    
    getAll() {
        return `${this.civilImages},${this.militaryImages}`.split(",");
            // devuelve un nuevo array que contiene todos los elementos


    }
}

class Painter {
    constructor() {
        this.createGallery();
    }

    createGallery() {
        let section = document.createElement('section');
        section.innerHTML += '<section></section>';
        this.gallery = document.querySelector('body section');
    }

    createImageTag(imageUrl) {
        return `
            <picture>
                <img src="${imageUrl}" />
            </picture>
        `
    }

    paintSingleImage(imageUrl) {
        let imageTag = this.createImageTag(imageUrl);
        this.gallery.innerHTML += imageTag;
    }

    paintMultipleImages(arrayOfImages) {
        let imagesHTML = '';

        for (let i = 0; i < arrayOfImages.length; i++) {
          imagesHTML += this.createImageTag(arrayOfImages[i]);
        }       
        
        this.gallery.innerHTML += imagesHTML;
    }
}





const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();

