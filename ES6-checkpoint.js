const pets = [
    { name: `Max`, type: `dog`, bornOn: 2018 },
    { name: `Angel`, type: `cat`, bornOn: 2015 },
    { name: `Jasper`, type: `dog`, bornOn: 2016 }
];

const getAge = (pet) => {
    return new Date().getFullYear() - pet.bornOn;
}

let petsWithAge = [];
pets.forEach(pet => {
    pet.age = getAge(pet);
    petsWithAge.push(pet);
})
console.log(pets)

const filterPets = (pet) => {
    return pet.type == `dog`
}
console.log(pets.filter(filterPets))

const findPets = (pet) => {
    return pet.name == `Jasper`
}

console.log(`jasper is ${pets.find(findPets).age} years old`)