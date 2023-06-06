const numbers = [1, 2, 3, 4];
const othersNumbers = [3, 3, 4, 4, 5];

const rta = numbers.concat(othersNumbers);
console.log('Concat: ', rta);

const newArray = [...numbers];
for (let index = 0; index < othersNumbers.length; index++) {
    const element = othersNumbers[index];
    newArray.push(element);
}

console.log('For', newArray);

const rta2 = numbers.concat(othersNumbers);
console.log('Concat: ', rta2);


//Utilizar spread operation para clonar los elementos de los Array:
const rta3 = [...numbers, ...othersNumbers];
console.log('Spread operation: ', rta3);


// Agregar elementos a un array sin tener que clonarlo
// el problema es que no agrega elemento por elemento sino quew agrega el array completo:
//numbers.push(othersNumbers);
//console.log('push', numbers);

// para solucionar el problema de agregar elemento por elemento, usamos el spread operator:
numbers.push(...othersNumbers);
console.log('push con spread operator:', numbers);