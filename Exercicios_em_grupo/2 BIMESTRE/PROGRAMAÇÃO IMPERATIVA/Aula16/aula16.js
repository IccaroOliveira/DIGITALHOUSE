
//1º

let fizzBuzz = (num1, num2, str1, str2) => {
    for (let i = 1; i <= 100; i++) {
        if (i % num1 == 0 && i % num2 != 0) {
            console.log(`${i} - É múltiplo de ${num1} - ${str1}`);
        } else if (i % num2 == 0 && i % num1 != 0) {
            console.log(`${i} - É múltiplo de ${num2} - ${str2}`);
        } else if (i % num1 == 0 && i % num2 == 0) {
            console.log(`${i} - É múltiplo de ${num1} e ${num2} - ${str1 + str2}`);
        } else {
            console.log(`${i} - NÃO é multiplo de ${num1} nem de ${num2}`);
        };
    };
};
fizzBuzz(2, 5, 'Fizz', 'Buzz');

//2º

let fatorialFor = num => {
    let fatorial = 1;
    for (let i = num; i > 1; i--) {
        fatorial *= i
    };
    console.log(fatorial);
};
fatorialFor(5);

let fatorialIf = num => {
    if (num == 0) {
        return 1;
    }
    else {
        return num * fatorialIf(num - 1);
    };
};
console.log(fatorialIf(5));