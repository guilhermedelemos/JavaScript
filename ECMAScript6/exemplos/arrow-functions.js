const criarVetor = () => {
    return [1, 2, 3, 4, 5, 6, 7];
}
console.log(criarVetor());

const criarVetorNegativo = () => [-1, -2, -3, -4, -5, -6, -7];
console.log(criarVetorNegativo());

const criarObjeto = () => ({ nome: 'Fulano' });
console.log(criarObjeto());


const meuVetor = [1, 2, 3, 4, 5, 6, 7];

// const novoVetor = meuVetor.map(function(item) {
// Arrow functions - v1
const novoVetor1 = meuVetor.map((item) => {
    return item * 2;
});
console.log(novoVetor1);

// Arrow functions - v2 (se a funciton possui apenas um parâmetro)
const novoVetor2 = meuVetor.map(item => {
    return item * 3;
});
console.log(novoVetor2);

// Arrow functions - v3 (quando a function faz um retorno simples)
const novoVetor3 = meuVetor.map(item => item * 4);
console.log(novoVetor3);
