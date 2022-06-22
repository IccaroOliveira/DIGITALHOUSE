// CRIE UM METODO CONSTRUTOR ALUNO COM A PROPRIEDADES : NOME, SEXO, ID, NOTAS, TURMA

// DEPOIS CRIE UM ARRAY LISTA DE ALUNOS E CRIE UM OBJETO POR ALUNO

// E APLIQUE OS EXERCICIOS DE MEDIA DAS AULAS PASSADAS 

// MEDIA TOTAL DE NOTAS 

// MEDIA DE ALUNOS HOMENS E MULHERES

// CRIE UM METODO CONSTRUTOR ALUNO COM A PROPRIEDADES :  NOME, SEXO, ID, NOTAS, TURMA

// DEPOIS CRIE UM ARRAY LISTA DE ALUNOS E CRIE UM OBJETO POR ALUNO

// E APLIQUE OS EXERCICIOS DE MEDIA DAS AULAS PASSADAS 

// MEDIA TOTAL DE NOTAS 

// MEDIA DE ALUNOS HOMENS E MULHERES 

function Aluno(nome, sexo, id, notas, turma, media){
    this.nome = nome;
    this.sexo = sexo;
    this.id = id;
    this.notas = notas;
    this.turma = turma;
    this.media = function(){
        let media = this.notas.reduce( function(acumulador, item ){
            // console.log(acumulador, item)
            return acumulador + item;
        } );
        media = media / this.notas.length;
        return media.toFixed(2);
    }
}

let listaAlunos = [];
listaAlunos.push(new Aluno("Kelvin", "M", "20", [8,7,8], 2));
listaAlunos.push(new Aluno("Fulano", "M", "20", [8,7,8], 5));
listaAlunos.push(new Aluno("beutrano", "M", "20", [8,7,8], 3));

//console.log(listaAlunos[2].notas[2]);result 8
//console.log(listaAlunos[1].notas[1]); result 7
//console.log(listaAlunos);result
// console.log(listaAlunos[2].media());

console.log( listaAlunos);

function Aluno(altura, sexo){
    this.altura = altura;
    this.sexo = sexo;
}

let listaAlunos2 = [];
listaAlunos2.push(new Aluno(1.78, 'M' ));
listaAlunos2.push(new Aluno(1.60, 'F' ));
listaAlunos2.push(new Aluno(1.65, 'F' ));
listaAlunos2.push(new Aluno(1.85, 'M' ));
listaAlunos2.push(new Aluno(1.70, 'M' ));
listaAlunos2.push(new Aluno(1.73, 'F' ));
listaAlunos2.push(new Aluno(1.65, 'M' ));
listaAlunos2.push(new Aluno(1.70, 'F' ));
listaAlunos2.push(new Aluno(1.71, 'M' ));
listaAlunos2.push(new Aluno(1.83, 'M' ));


console.log(listaAlunos2);