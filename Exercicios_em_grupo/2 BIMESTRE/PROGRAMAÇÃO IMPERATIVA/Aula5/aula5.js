//1

function conversorPolCm(valor){
    let pol = 2.54
    cm = pol * valor;
    return console.log(cm);
}
conversorPolCm(2);

//2
function conversorURL(texto){
    return console.log("http://www."+ texto + ".com.br/");
}

//3
conversorURL("iccaro");

function somaFRASE(texto){
    return console.log(texto  + "!");
}

//4
somaFRASE("Eu estou estudando JS");

//5
function doguinhoIDADE ( idade ) {
    return idade * 7;
}

//6
function horaTRAB( salario ) {
    return ("O valor da hora trabalhada é R$" + salario / 160);
}
console.log (horaTRAB (4000));

//7
function imcATUAL ( peso , altura ) {
    return ("O seu imc é "+ peso / (altura * altura));
};

console.log (imcATUAL (82 , 1.79));

//8
function dadosTIPO( dados ) {
    console.log( typeof dados );
}

dadosTIPO("10");