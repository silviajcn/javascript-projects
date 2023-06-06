const letters = ['a', 'b', 'c'];

for (let i= 0; i < letters.length; i++) {
    const element = letters[i];
    console.log(`Imprimir con ciclo for: ${element}`);
}

letters.forEach((item) => console.log(`Imprimir con ciclo for: ${item}`));


const products = [
    {title: 'Burger', price: 121},
    {title: 'Pizza', price: 20}
];

const app = document.getElementById('app');

products.forEach(item => {
    app.innerHTML += `
        <li>${item.title} -- $${item.price}</li>
    `
});


const todoList = [
    { id: 01, content: 'Comprar ingredientes para hacer galletas', status: true, emoji: '🛒' },
    { id: 02, content: 'Hacer galletas', status: false, emoji: '🍪' },
    { id: 03, content: 'Vender galletas', status: false, emoji: '🤳' },
    { id: 04, content: 'Contabilizar ganancias de galletas vendidas', status: false, emoji: '🤑' },
];
const app2 = document.getElementById('app2');

todoList.forEach(item => {
    app2.innerHTML += `
        <li id=${item.id}><input type="checkbox" ${item.status ? 'checked' : ''}  /><span class=${item.status ? 'line' : ''}>${item.content} ${item.emoji}</span></li>
    `    
});
