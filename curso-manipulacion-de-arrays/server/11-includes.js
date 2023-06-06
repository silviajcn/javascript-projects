const pets = ["cat", "dog", "bat"];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];

    if (element === 'cat') {
        includeInArray = true;
        break;
    }
}
console.log('For', includeInArray);

const rta2 = pets.includes('dog');
console.log('Includes', rta2);