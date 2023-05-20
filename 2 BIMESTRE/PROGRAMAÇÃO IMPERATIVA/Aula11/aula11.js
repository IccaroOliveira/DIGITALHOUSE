let filmes = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

// 1º ----

function converterMaiusculas(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase();
    };
    return array;
};

console.log(converterMaiusculas(filmes));

// 2º ----

let filmesSeries = ['star wars', 'matrix', 'mr. robot', 'o preço do amanhã', 'a vida é bela'];
let filmesAnimacao = ['toy story', 'finding Nemo', 'kung-fu panda', 'wally', 'fortnite'];

function juntarFilmes(array1, array2) {
    for (let i = 0; i < array2.length; i = i + i) {
        array1.push(array2.pop())
    };
    return converterMaiusculas(array1);
};

let ultimoFilmeAnimacao = filmesAnimacao.pop();

console.log(juntarFilmes(filmesSeries, filmesAnimacao));

// 3º ----

function comparaClassificacao() {

    const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
    const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
    let totalAsia = 0;
    let totalEuro = 0;

    for (let i = 0; i < asiaScores.length; totalAsia = totalAsia + asiaScores[i++]);
    for (let i = 0; i < euroScores.length; totalEuro += euroScores[i++]);

    if (totalAsia == totalEuro) {
        return console.log('Classificações iguais!');
    } else {
        return console.log('Classificações diferentes!');
    };
};

comparaClassificacao();


// 4º ----

let participanteA = [5, 8, 4, 9, 5];
let participanteB = [8, 7, 8, 6, 8];
let participanteC = [7, 5, 10, 8, 3];



function pontuacaoMedia(participante) {
    let mediaParticipante = 0;
    for (let i = 0; i < participante.length; mediaParticipante = mediaParticipante + participante[i++]);
    return mediaParticipante / participante.length;
};

console.log(pontuacaoMedia(participanteA));

// 5º ----

function pontuacaoMaior(participante) {
    return Math.max(...participante);
};

console.log(pontuacaoMaior(participanteA));

// 6º ----

function competicao(participanteA, participanteB, participanteC) {
    if (pontuacaoMedia(participanteA) > pontuacaoMedia(participanteB) && pontuacaoMedia(participanteA) > pontuacaoMedia(participanteC)) {
        `${console.log(`Participante A vencedor com a maior média! ${pontuacaoMedia(participanteA)}`)}`;
    } else if (pontuacaoMedia(participanteB) > pontuacaoMedia(participanteA) && pontuacaoMedia(participanteB) > pontuacaoMedia(participanteC)) {
        `${console.log(`Participante B vencedor com a maior média! ${pontuacaoMedia(participanteB)}`)}`;
    } else {
        `${console.log(`Participante C vencedor com a maior média! ${pontuacaoMedia(participanteC)}`)}`;
    };

    if (pontuacaoMaior(participanteA) > pontuacaoMaior(participanteB) && pontuacaoMaior(participanteA) > pontuacaoMaior(participanteC)) {
        `${console.log(`Participante A vencedor com a maior pontuação! ${pontuacaoMaior(participanteA)}`)}`;
    } else if (pontuacaoMaior(participanteB) > pontuacaoMaior(participanteA) && pontuacaoMaior(participanteB) > pontuacaoMaior(participanteC)) {
        `${console.log(`Participante B vencedor com a maior pontuação! ${pontuacaoMaior(participanteB)}`)}`;
    } else {
        `${console.log(`Participante C vencedor com a maior pontuação! ${pontuacaoMaior(participanteC)}`)}`;
    };
};

competicao(participanteA, participanteB, participanteC);