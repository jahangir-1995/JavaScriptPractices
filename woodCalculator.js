function woodCalculate (chairQuantity,tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    
    const chairQuantityWood = chairQuantity * perChairWood;
    const tabelQuantityWood = tableQuantity * perTableWood;
    const bedQuantityWood = bedQuantity * perBedWood;

    const totalWood = chairQuantityWood + tabelQuantityWood + bedQuantityWood;

    return totalWood;
}

const fstOftion = woodCalculate(1, 1, 1);
console.log(fstOftion);