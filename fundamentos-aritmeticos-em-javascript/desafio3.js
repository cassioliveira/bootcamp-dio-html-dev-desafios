let numbers = [];

numbers.push(Number(gets()));
numbers.push(Number(gets()));
numbers.push(Number(gets()));
numbers.push(Number(gets()));
numbers.push(Number(gets()));

let pairs = (numbers.filter(num => (num % 2) == 0)).length
let odds = (numbers.filter(num => (num % 2) != 0)).length
let positives = (numbers.filter(num => num > 0)).length
let negatives = (numbers.filter(num => num < 0)).length

console.log(pairs + " valor(es) par(es)")
console.log(odds + " valor(es) impar(es)")
console.log(positives + " valor(es) positivo(s)")
console.log(negatives + " valor(es) negativo(s)")