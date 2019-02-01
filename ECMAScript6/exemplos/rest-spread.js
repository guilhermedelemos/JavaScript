// REST operator
const usuario = {
    nome: 'Fulano',
    idade: 30,
    empresa: 'GitHub'
}

const { nome, ...restante } = usuario;
console.log(nome);
console.log(restante);


const meuVetor = [1, 2, 3, 4, 5];

const [ a, b, ...c ] = meuVetor;

console.log(a);
console.log(b);
console.log(c);


function soma(a, b) {
    return a + b;
}
console.log(soma(1, 2));

function subtracao( ...params ) {
    return params.reduce((total, next) => total - next);
}
console.log(subtracao(10, 5, 2));

function multiplicacao(a, b, ...params) {
    return a * b * params.reduce((total, next) => total * next);
}



// SPREAD
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2 ];
console.log(arr3);


const usuario2 = {
    ...usuario, nome: "Cicrano"
};
console.log(usuario2);
