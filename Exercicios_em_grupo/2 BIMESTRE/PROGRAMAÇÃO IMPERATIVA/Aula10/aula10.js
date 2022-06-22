let a = ["Desodorante", "Sabonete", "Chocolate", "Carne", "Frango"]

console.log("O comando Join junta os elementos de um array usando um separador que definirmos.")
let compras1 = a.join ()
console.log(a)

console.log("O comando Pop elimina o último elemento de um array.")
let compras2 = a.pop ()
console.log(a)

a.push("Final")
console.log("O comando Push adiciona um ou mais elementos ao final do array.")
let compras3 = a.push("Tilapia")
console.log(a)

console.log("O comando Shift elimina o primeiro elemento de um array.")
let compras4 = a.shift()
console.log(a)

console.log("O método Unshift adiciona um ou mais elementos ao início de um array.")
let compras5 = a.unshift("Rapadura")
console.log(a)