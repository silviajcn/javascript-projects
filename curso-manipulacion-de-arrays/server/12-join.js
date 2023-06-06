const elements = ['Fire', 'Air', 'Water'];

let rta = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rta = rta + element + separator;
}
console.log('rta for', rta);


const rta2 = elements.join('--');
console.log('join', rta2);

const title = 'Curso de manipulacion de arrays';
const rta3 = title.split(' ');
console.log('split', rta3);


const title2 = 'Curso de manipulacion de arrays';
const url = title2.split(' ').join('-').toLowerCase();
console.log('url', url);