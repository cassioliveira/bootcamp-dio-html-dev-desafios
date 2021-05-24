let inputValue = parseInt(gets());

let values = [100, 50, 20, 10, 5, 2, 1];
let quantity = [0, 0, 0, 0, 0, 0, 0];

let rest = inputValue;

while (rest >= 1) {
    bankNote = values.findIndex(valor => valor <= rest);
    quantity[bankNote] = Math.trunc(rest / values[bankNote]);
    rest = rest % values[bankNote];
}

console.log(inputValue);
for (let i in values) {
    console.log(`${quantity[i]} nota(s) de R$ ${values[i]},00`);
}