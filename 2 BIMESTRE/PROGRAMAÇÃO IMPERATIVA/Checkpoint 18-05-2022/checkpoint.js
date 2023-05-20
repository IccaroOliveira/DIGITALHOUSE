// CHECKPOINT 1 - MICROONDAS

// OPCOES DE COMIDA
// 1 - Pipoca
// 2 - Macarrão
// 3 - Carne
// 4 - Feijão
// 5 - Brigadeiro

function microONDAS(opcao, tempo) {

    let tempoPREPARO;

    if (opcao == 1) {
        tempoPREPARO = 10;
    } else if (opcao == 2) {
        tempoPREPARO = 8;
    } else if (opcao == 3) {
        tempoPREPARO = 15;
    } else if (opcao == 4) {
        tempoPREPARO = 12;
    } else if (opcao == 5) {
        tempoPREPARO = 8;
    } else {
        return "Prato inexistente!"
    }

    if (tempo < tempoPREPARO) {
        return "Tempo insuficiente! Prato pronto, bom apetite!!!";
    } else if (tempo >= (2 * tempoPREPARO) && tempo <= (3 * tempoPREPARO)) {
        return "A comida queimou! Prato pronto, bom apetite!!!";
    } else if (tempo > (3 * tempoPREPARO)) {
        return "Kabum! Prato pronto, bom apetite!!!";
    }

    return "Prato pronto, bom apetite!!!";
}

console.log(microONDAS(7, 20));