let alice = [23, 82, 46];
let bob = [45, 8, 32];

function Ganhador(participanteA, participanteB) {

    let totalParticipanteA = 0;
    let totalParticipanteB = 0;

    for (let i = 0; i < participanteA.length && i < participanteB.length; i++) {
        if (participanteB[i] > participanteA[i]) {
            totalParticipanteB++;
        }
        else if (participanteA[i] > participanteB[i]) {
            totalParticipanteA++;
        };
    };

    if (totalParticipanteA > totalParticipanteB) {
        return `${console.log(`Participante A ganhou!`)}`;
    } else {
        return `${console.log(`Participante B ganhou!`)}`;
    };
};

Ganhador(alice, bob);       