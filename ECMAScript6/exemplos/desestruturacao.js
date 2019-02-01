const usuario = {
    nome: 'Fulano',
    idade: 30,
    endereco: {
        cidade: 'Londrina',
        estado: 'SC',
    },
};

// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;

// Desestruturação
const { nome, idade, endereco: { cidade } } = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome(usuario) {
    console.log(usuario.nome);
}
mostraNome(usuario);

function mostrarAtributos({ nome, idade }) {
    console.log(nome, idade);
}
mostrarAtributos(usuario);
