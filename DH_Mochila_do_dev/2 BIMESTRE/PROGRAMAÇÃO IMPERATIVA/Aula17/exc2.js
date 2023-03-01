let divisaoArray = array => {
    let novaArray = array.map(num => num / array.reduce((acc, cur) => {
        return acc + cur;
    }));
    console.log(novaArray);
};

let arrayNum = [1, 2, 3];
divisaoArray(arrayNum);

let separarPalavras = (array, num) => {
    let novaArray = array.filter(nomes => nomes.length > num);
    console.log(novaArray);
};

let cores = ["Azul", "Roxo", "Verde", "Cinza", "Branco"];
separarPalavras(cores, 6);

let ordernarNomeAluno = obj => {
    let novoObj = obj.sort((a, b) => {
        if (a.nome > b.nome) {
            return 1;
        };
        if (a.nome < b.nome) {
            return -1;
        };
    });
    console.log(novoObj);
};

let ordernarNotaAluno = obj => {
    let novoObj = obj.sort((a, b) => {
        return b.nota - a.nota;
    });
    console.log(novoObj);
};

let alunos = [
    { nome: 'Maria', nota: 5 },
    { nome: 'Paulo', nota: 9 },
    { nome: 'Eduardo', nota: 8 },
    { nome: 'Carlos', nota: 10 },
    { nome: 'Bianca', nota: 3 }
];

ordernarNomeAluno(alunos);
ordernarNotaAluno(alunos);