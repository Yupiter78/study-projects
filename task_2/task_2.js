/*let number = Number(prompt("Введите число от 1 до 10000", "1"));
let count = 0;
for (let i = 1; i < number; i++) {
    let strArr = i.toString().split("");
    console.log("strArr: ", strArr);
    let sum = strArr.reduce((prev, next) => {
        return Number(prev) + Number(next);
    }, 0);
    console.log("sum: ", sum);
    if (sum > 6) {
        if (i % 7 === 0) {
            count++;
        }
    }
}
console.log("count: ", count);*/


const number = Number(prompt("Введите число от 1 до 10000", "1"));
let count = 0;

for (let i = 1; i <= number; i++) {
    let num = i;
    let sum = 0;

    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    if (sum > 6 && i % 7 === 0) {
        count++;
    }
}

console.log("count: ", count);
