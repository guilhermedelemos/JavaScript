// Variável
var a = 1;
console.log('a: ' + a);

// Constante
const b = 2;
console.log('b: ' + b);

// Variável de escopo
let c = 3;
console.log('c: ' + c);

if(c>0) {
    let c = 4;
    console.log('c: ' + c);
}

//
const meuVetor = [1, 2, 3, 4, 5];

const novoVetor = meuVetor.map(function(item, index) {
    return item * index;
});

console.log(novoVetor);

// soma de todos os itens do vetor
const soma = meuVetor.reduce(function(total, next) {
    return total + next;
});
console.log(soma);

// filtrar apenas os números pares
const filtro = meuVetor.filter(function(item) {
    return item % 2 === 0;
});
console.log(filtro);

// busca
const busca = meuVetor.find(function(item) {
    return item === 4;
});
console.log(busca);