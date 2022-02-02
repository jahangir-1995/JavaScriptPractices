function animaleCount(miles){
    const animaleDencesityFst10Mile = 10;
    const animaleDencesitySnd10Mile = 50;
    const animaleDencesityRestMile = 100;

    if (miles <= 10) {
        const count = miles *10;
        return count;
    }
    else if(miles <=20){
        const fstAnimale = 10 * animaleDencesityFst10Mile;
        const restMiles = miles - 10;
        const sndAnimale = restMiles * animaleDencesitySnd10Mile;
        const totalAnimals = fstAnimale + sndAnimale;
        return totalAnimals;
    }
    else{
        const fstAnimale = 10 * animaleDencesityFst10Mile;
        const sndAnimale = 10 * animaleDencesitySnd10Mile;
        const restMiles = miles - 20;
        const RestAnimals = restMiles * animaleDencesityRestMile;
        const totalAnimals = fstAnimale + sndAnimale + RestAnimals;
        return totalAnimals;
    }
}

const animals = animaleCount(35);
console.log(animals);