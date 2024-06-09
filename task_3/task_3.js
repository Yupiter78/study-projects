/*const n = 10;
const productsData = ["A 1971", "A 248", "C 772", "C 781",
    "B 2801", "A 533", "A 2524", "Y 1516", "A 18036", "A 15007"];
const maxWeight = 20000;

const categoryA = productsData.filter(product => product.startsWith("A"));
const weightCategoryA = categoryA.map(product => Number(product.slice(2)));
const sortWeight = weightCategoryA.sort((a, b) => a - b);

let count = 0;
let sum = 0;
for (let i = 0; i < sortWeight.length; i++) {
    if (sum + sortWeight[i] <= maxWeight) {
        sum += sortWeight[i];
        count++;
    } else {
        break;
    }
}

console.log("count: ", count);*/


const n = Number(prompt("Введите количество товаров", "1"));
const productsData = [];
for (let i = 0; i < n; i++) {
    const product = prompt("Введите данные о категории товара и его весе через пробел",
        "A 0000");
    productsData.push(product);
}
const maxWeight = 20000;

const {count, sum} = productsData.filter(product => product.startsWith("A"))
    .map(product => Number(product.slice(2)))
    .sort((a, b) => a - b)
    .reduce(({sum, count}, weight) => ({
        sum: sum + weight,
        count: sum + weight <= maxWeight ? count + 1 : count
    }), {sum: 0, count: 0});

console.log("count: ", count);









