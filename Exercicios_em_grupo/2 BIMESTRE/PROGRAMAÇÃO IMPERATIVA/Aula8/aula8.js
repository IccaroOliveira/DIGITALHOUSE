// EXC DO PG

function podeSubir ( altura , acomp ) {
    if ( altura >= 1.40 && altura < 2.00 ) {
        return "Acesso autorizado";
    } else if ( ( altura < 1.40 && acomp) || ( altura < 1.20 && acomp ) ) {
        return "Permitido com acompanhante";
    } else  {
        return "Acesso negado";
    } 
}

let altura = 1.80 ;
let acomp = false ; 

console.log (podeSubir( altura , acomp ));

// 1. Escreva     um     programa     para     ler     2     valores     (considere     que          não     serão
//     informados    valores    iguais)    e    escrever    o    maior    deles.

// 2. Escreva     um     programa     para     ler     o     ano     de     nascimento     de     uma     pessoa     e
//     escrever     uma     mensagem     que     diga     se     ela     poderá     ou     não     votar     este     ano
//     (não    é    necessário    considerar    o    mês    em    que    ela    nasceu).

// 3. Escreva     um     programa     que     verifique     a     validade     de     uma     senha     fornecida
//     pelo     usuário.     A     senha     válida     é     o     número     1234.    Devem     ser    impressas     as
//     seguintes    mensagens:
//     ACESSO    PERMITIDO    caso    a    senha    seja    válida.
//     ACESSO    NEGADO    caso    a    senha    seja    inválida.

// 4. As    maçãs     custam     R$     0,30     cada     se     forem     compradas    menos     do     que     uma
//     dúzia,     e     R$     0,25     se     forem     compradas     pelo     menos     doze.     Escreva     um
//     programa     que     leia     o     número     de     maçãs     compradas,     calcule     e     escreva     o
//     valor    total    da    compra.

// 5. Tendo     como     entrada     a     altura     e     o     sexo     (codificado     da     seguinte     forma:
//     1:feminino          2:masculino)     de     uma     pessoa,     construa     um     programa     que
//     calcule    e    imprima    seu    peso    ideal,    utilizando    as    seguintes
//     Fórmulas:
//     - para    homens:    (72.7    *    Altura)    – 58
//     - para    mulheres:    (62.1    *    Altura)    – 44.7


// EXC 1


function maiorQue (num1, num2) {
    if (num1 > num2) {
    console.log(`${num1} é maior que ${num2}`);
    } else {
        console.log(`${num2} é maior que ${num1}`);
    }
} 

maiorQue(3, 8);

// EXC 2


function podeVOTAR ( ano_idade ) {
    if( 2022 - ano_idade  >= 16 ){
        return "Pode votar!";
    } else {
        return "Não pode votar!";
    }
}

console.log (podeVOTAR ( 2015 ));


// EXC 3


function validarSenha ( senha ) {
    if ( senha == 1234 ) {
        return "ACESSO PERMITIDO" ;
    } else {
        return "ACESSO NEGADO";
    }
}
let senha = 1234;

console.log ( validarSenha ( senha ));



// EXC 4

function valorCompra ( qtd ) {
    if ( qtd < 12 ) {
        return ( qtd * 0.30) ;
    } else {
        return ( qtd * 0.25);
    }
}
let qtd = 12;

console.log ( valorCompra ( qtd ));


// EXC 5


function pesoIdeal ( alt , sexo ) {
    if ( sexo == 1 ) {
        return ( ( 62.1 * alt ) - 44.7 ) ;
    } else {
        return ( ( 72.7 * alt ) - 58 ) ;
    }
    }

let alt = 1.83 ;
let sexo = 2 ;

console.log ( pesoIdeal ( alt , sexo ));