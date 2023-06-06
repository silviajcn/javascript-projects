const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

const newArray = [];
for (let i= 0; i < matriz.length; i++) {
    const array = matriz[i];
    
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}
console.log('for', newArray);


const matriz2 = [
    [1, 2, 3],
    [4, 5, 6, [1, 2, [1, 3]]],
    [7, 8, 9]
]

// se debe indicar en el metodo el nivel al que se quiere llegar para unir los arrays
const rta = matriz2.flat(3);
console.log('flat', rta);