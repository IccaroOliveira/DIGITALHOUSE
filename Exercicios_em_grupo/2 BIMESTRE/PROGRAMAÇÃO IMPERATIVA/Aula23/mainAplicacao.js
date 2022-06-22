// mesa23
// Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e 
// a sua opinião em relação ao filme: ótimo - 3, bom - 2, regular -1.
// Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:
// a média das idades das pessoas que responderam ótimo;
// a quantidade de pessoas que responderam regular;
// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

// - 2 objs 
// - obj espectador -> idade, opnião 
// - obj filme -> espectadores
// - obj filme -> 3 methodos 
// - Arquivo main vai usar os dois modulos para criar a aplicação

// a média das idades das pessoas que responderam ótimo;

let Filmes = require("./modulos/filme");

function mediaO(Filmes) {
    var soma = 0;
    var qtde = 0;
    for (let i = 0; i < Filmes.length; i++) {
        if (Filmes[i].opiniao === 3) {
            soma += Filmes[i].idade;
            qtde++;
        }
    }
    return (soma / qtde);
};

//a quantidade de pessoas que responderam regular;

function qtdR(regular) {
    var qtde = 0;

    for (let i = 0; i < regular.length; i++) {
        if (regular[i].opiniao === 1) {
            qtde++;
        }
    }
    return qtde;
};

//a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

function porcB(bom) {
    var qtde = 0;

    for (let i = 0; i < bom.length; i++) {
        if (bom[i].opiniao === 2) {
            qtde++;
        }
    }
    return (qtde / bom.length) * 100;
};

console.log (mediaO(Filmes));
console.log (qtdR(Filmes));
console.log (porcB(Filmes));