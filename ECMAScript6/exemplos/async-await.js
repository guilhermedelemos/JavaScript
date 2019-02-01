const minhaPromisse = () => new Promise({
    setTimeout(() => { resolve('OK') }, 2000);
});

// minhaPromisse().then

// MODO 1
async function executaPromise() {
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
}

// MODO 2 - arrow 
const executaPromise2 = async () => {
    console.log(await minhaPromisse());
};