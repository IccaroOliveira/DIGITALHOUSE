let arrayEntrada = [1, 2, 4, 8];

let soma = 0;
for (let i = 0; i < arrayEntrada.length - 1; i++) {
  soma = arrayEntrada[i] + soma;
  console.log(`${soma} + ${arrayEntrada[i + 1]}`);
}
