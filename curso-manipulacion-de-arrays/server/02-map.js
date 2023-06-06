const letters = ['a', 'b', 'c'];

const newArray = [];
for (let i = 0; i < letters.length; i++) {
    const element = letters[i];
    newArray.push(element + '++');
}

const newArray2 = letters.map(i => i + '++');

console.log('Original: ', letters);
console.log('New array con ciclo For: ', newArray);
console.log('New array con map: ', newArray);


const products = [
    {title: 'Burger', price: 121},
    {title: 'Pizza', price: 20}
];

const app = document.getElementById('app');

const list = products.map(item => {
    return `<li>${item.title} -- $${item.price}</li>`
});

app.innerHTML = list.join('');