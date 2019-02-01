console.log("ECMAScript 6");

import axios from 'axios';

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch(err) {
            console.warn('Erro na API');
        }
    }
}

Api.getUserInfo('guilhermedelemos');
Api.getUserInfo('guilhermedelemos140982595972274');
