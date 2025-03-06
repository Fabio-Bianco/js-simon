

// Funzione per generare un numero casuale tra un minimo e un massimo;
function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}

console.log('Random number generated');