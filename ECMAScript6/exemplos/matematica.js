class Matematica {
    
    constructor() {
        let a = 10;
        if(a >= 10) {
            let a =15;
            console.log('Variável de escopo: ' + a);
        }
    }

    static soma(a, b) {
        return a + b;
    }

}