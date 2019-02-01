class List {

    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }

}

class TodoList extends List {
    constructor() {
        super();
        this.usuario = 'Fulano';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }

    static info() {
        console.log('Lista de tarefas');
    }
}

const minhaLista = new TodoList();

document.getElementById('exemplo').onclick = function() {
    TodoList.info();
    minhaLista.add("Exemplo");
    minhaLista.mostraUsuario();
}