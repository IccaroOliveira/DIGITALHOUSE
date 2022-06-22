let numPar = [10, 20, 40, 60, 80];
let numImpar = numPar.map(num => num + 1);
console.log(numImpar);

let nomes = ["Vagner", "Bruno", "Maria", "José", "Carlos"];
let maria = nomes.filter(nome => nome === "Maria");
console.log(maria);

let arrayNum = [1, 5, 9, 3, 7];
let stringNum = arrayNum.reduce((acc, cur) => {
    return `${acc} - ${cur}`
})

console.log(stringNum);
let animais = ["Cachorro", "Gato", "Vaca", "Cavalo"];
animais.forEach(animal => console.log(`O animal é ${animal}`));