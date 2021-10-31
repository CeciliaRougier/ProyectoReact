//Array de productos
const productos = [
    { id: 1, title: 'Prod 1', price: 100, pictureUrl: 'Url1' },
    { id: 2, title: 'Prod 2', price: 200, pictureUrl: 'Url2' },
    { id: 3, title: 'Prod 3', price: 300, pictureUrl: 'Url3' },
];

//Promise con setTimeout de 2 seg
const getFetch = new Promise((resolve, rej) => {
    setTimeout(() => {
        resolve(productos);
    }, 2000);
})

export default getFetch