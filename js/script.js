

// Funzione per generare un numero casuale tra un minimo e un massimo;
function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}

console.log('Random number generated');

// ciclo per generare 5 numeri casuali;
for (let i = 0; i < 5; i++) {
    console.log(getRandInt(1, 50));
}