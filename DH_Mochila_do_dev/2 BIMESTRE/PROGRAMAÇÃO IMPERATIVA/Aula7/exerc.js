/*
1. Escreva	 um	 programa	 para	 ler	 2	 valores	 (considere	 que	 não	 serão	
    informados	valores	iguais)	e	escrever	o	maior	deles.
    
2. Escreva	 um	 programa	 para	 ler	 o	 ano	 de	 nascimento	 de	 uma	 pessoa	 e	
    escrever	 uma	 mensagem	 que	 diga	 se	 ela	 poderá	 ou	 não	 votar	 este	 ano	
    (não	é	necessário	considerar	o	mês	em	que	ela	nasceu).
    
3. Escreva	 um	 programa	 que	 verifique	 a	 validade	 de	 uma	 senha	 fornecida	
    pelo	 usuário.	 A	 senha	 válida	 é	 o	 número	 1234.	Devem	 ser	impressas	 as	
    seguintes	mensagens:	
    ACESSO	PERMITIDO	caso	a	senha	seja	válida.	
    ACESSO	NEGADO	caso	a	senha	seja	inválida.
4. As	maçãs	 custam	 R$	 0,30	 cada	 se	 forem	 compradas	menos	 do	 que	 uma	
    dúzia,	 e	 R$	 0,25	 se	 forem	 compradas	 pelo	 menos	 doze.	 Escreva	 um	
    programa	 que	 leia	 o	 número	 de	 maçãs	 compradas,	 calcule	 e	 escreva	 o	
    valor	total	da	compra.
5. Tendo	 como	 entrada	 a	 altura	 e	 o	 sexo	 (codificado	 da	 seguinte	 forma:	
    1:feminino	 	 2:masculino)	 de	 uma	 pessoa,	 construa	 um	 programa	 que	
    calcule	e	imprima	seu	peso	ideal,	utilizando	as	seguintes	
    Fórmulas:	
    - para	homens:	(72.7	*	Altura)	– 58	
    - para	mulheres:	(62.1	*	Altura)	– 44.7
	
*/

//exerc 01
let numb1 = 5;
let numb2 = 2;

if (numb1 > numb2) {
    console.log("O maior é " + numb1)
} else {
    console.log("o maior é " + numb2)
}

//exerc 02

let nascimento = 2008

if (nascimento <= 2006) {
    console.log("Você pode votar")
} else {
    console.log("Você não pode votar")
}

//exerc 03

let senha = 1235

if (senha === 1234) {
    console.log("ACESSO PERMITIDO")
} else {
    console.log("ACESSO NEGADO")
}

//exerc 04

let macas = 13

if (macas <= 12) {
    console.log(("Total a pagar R$: " + macas * 0.30))
} else {
    console.log(("Total a pagar R$: " + macas * 0.25))
}

// exerc 05

let sexo = 3
let altura = 1.97

if (sexo === 1) {
    console.log("O peso ideal para o feminino é: " + ((62.1 * altura) - 44.7))
} else if (sexo === 2) {
    console.log("O peso ideal para o masculino é: " + ((72.7 * altura) - 58))
} else {
    console.log("Dado invalido")
}