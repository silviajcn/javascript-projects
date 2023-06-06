const totals = [1, 2, 3, 4];

let suma = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    suma = suma + element;
}

console.log(suma);

// el metodo reduce recibe 2 parametros: una funcion y el estado
// Aqui el 0 hace referencia al estado inicial de la suma:
const rta = totals.reduce((sum, item) => sum + item, 0);
console.log('rta', rta);


// Mas sobre Reduce:
const items = [1, 3, 2, 3];

const respuesta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }

    return obj;
}, {});

console.log('respuesta', respuesta);


const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const respuesta2 = data
    .map(item => item.level)
    .reduce((obj, item) => {
        if (!obj[item]) {
            obj[item] = 1;
        } else {
            obj[item] = obj[item] + 1;
        }

        return obj;
    }, {});

console.log(respuesta2);

// devolver el rango en el que se encuentran los numeros:
const numbers = [4, 6, 3, 8, 2, 5, 6, 1, 0, 3, 7, 2, 8, 4, 3, 0, 4, 9];

const range = numbers.reduce((obj, item) => {
    if (item >= 0 && item < 6) {
        obj["1-5"] += 1
    } else if (item > 5 && item < 9) {
        obj["6-8"] += 1
    } else {
        obj["9-10"] += 1
    }

    return obj;
}, { "1-5": 0, "6-8": 0, "9-10": 0 });

console.log(numbers);
console.log(range);