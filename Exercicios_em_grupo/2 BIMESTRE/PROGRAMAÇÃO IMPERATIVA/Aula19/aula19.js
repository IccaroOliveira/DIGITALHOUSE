// Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas.

const pessoa = [
    { altura: 1.78, sexo: 'M' },
    { altura: 1.60, sexo: 'F' },
    { altura: 1.65, sexo: 'F' },
    { altura: 1.85, sexo: 'M' },
    { altura: 1.70, sexo: 'M' },
    { altura: 1.73, sexo: 'F' },
    { altura: 1.65, sexo: 'M' },
    { altura: 1.70, sexo: 'F' },
    { altura: 1.71, sexo: 'M' },
    { altura: 1.83, sexo: 'M' },
    { altura: 1.84, sexo: 'M' },
    { altura: 1.78, sexo: 'F' },
    { altura: 1.50, sexo: 'M' },
    { altura: 1.97, sexo: 'F' },
    { altura: 1.87, sexo: 'M' }
];


// Faça um programa que calcule e escreva:

// - a maior e a menor altura do grupo;

let maiorMenorAltura = obj => {
    let arrayAlturas = obj.map(e => e.altura);
    let menor = Math.min(...arrayAlturas).toFixed(2);
    let maior = Math.max(...arrayAlturas).toFixed(2);
    console.log(`A menor altura é ${menor}m.`);
    console.log(`A maior altura é ${maior}m.`);
};

maiorMenorAltura(pessoa);

// - a média de altura das mulheres;

let mediaAlturaMulheres = obj => {
    let arrayMulheres = obj.filter(e => e.sexo == 'F');
    let alturaMulheres = arrayMulheres.map(e => e.altura);
    let somaAlturaMulheres = 0;
    for (let i = 0; i < alturaMulheres.length; i++) {
        somaAlturaMulheres += alturaMulheres[i] / alturaMulheres.length;
    };
    console.log(`A média de altura das mulheres é ${somaAlturaMulheres.toFixed(2)}m.`);
};

mediaAlturaMulheres(pessoa);

// - o número de homens;

let qtdHomens = obj => {
    let arrayHomens = obj.filter(e => e.sexo == 'M');
    console.log(`O número de homens é de ${arrayHomens.length}.`);
};

qtdHomens(pessoa);