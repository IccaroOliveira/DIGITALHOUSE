//1

function conversorPolCm(valor) {
    let pol = 2.54
    cm = pol * valor;
    return console.log(cm);
}
conversorPolCm(2);

//2
function conversorURL(texto) {
    return "http://www." + texto + ".com.br/";
}
conversorURL()
console.log(conversorURL("iccaro"));

//3
function somaFRASE(texto) {
    return texto + "!";
}

console.log(somaFRASE("Eu estou estudando JS"));

//4
function doguinhoIDADE(idadeH) {
    let idadeC = 7 * idadeH;
    console.log("A idade do cachorro é " + idadeC);
}

doguinhoIDADE(5);

//5
function horaTRAB(salario) {
    return ("O valor da hora trabalhada é R$" + salario / 160);
}
console.log(horaTRAB(4000));

//6
function imcATUAL(peso, altura) {
    return ("O seu imc é " + peso / (altura * altura));
};

console.log(imcATUAL(82, 1.79));

//7
function minPmai(texto) {
    let maiusc = texto.toUpperCase();
    console.log(maiusc);
};

minPmai("é so o começo!");

//8
function tipo(valor) {
    return typeof valor;
};

console.log(tipo(true));

//9
function calcCirc(num1) {
    return 2 * Math.PI * num1;
};

console.log(calcCirc(5));