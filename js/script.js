

// // Funzione per generare un numero casuale tra un minimo e un massimo;
function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}
// ciclo per generare 5 numeri casuali;
for (let i = 0; i < 5; i++) {
    console.log(getRandInt(1, 50))
};
 
// seleziono l'elemento html con id generate-btn;
const generateBtn = document.getElementById('generate-btn');

// aggiungo un event listener al bottone;
generateBtn.addEventListener('click', function() {
    const numbers = []; // array vuoto per contenere i numeri generati;

    // ciclo per generare 5 numeri casuali;
    for (let i = 0; i < 5; i++) {
        const number = getRandInt(1, 50);
        // istruzioni condizionali per evitare che si ripetano numeri;
        if (!numbers.includes(number)) {
            numbers.push(number); // aggiungo il numero all'array;
        } else {
            i--;
        }
    }
    console.log(numbers);
        
    // seleziono l'elemento html con id numbers-list;
    const numbersList = document.getElementById('numbers-list');
    numbersList.innerHTML = '';
    // ciclo per stampare i numeri generati;
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        const listItem = document.createElement('li'); // creo un elemento 'li' assente nell'html;
        listItem.innerHTML = number;  // inserisco il numero nell'elemento 'li';
        numbersList.appendChild(listItem); // inserisco l'elemento 'li' nell'elemento 'ul';
    }

})

const countdownElement = document.getElementById('countdown');
const instructionsElement = document.getElementById('instructions');
let interval = null; // Variabile per gestire il setInterval

countdownElement.addEventListener('click', function() {
    if (interval !== null) return; // Evita di avviare più countdown contemporaneamente

    let secondi = 10; // Imposta il valore iniziale del countdown
    countdownElement.textContent = secondi; // Mostra subito il numero iniziale

    interval = setInterval(function() {
        secondi--; // Decrementa il valore di secondi
        
        if (secondi >= 0) {
            countdownElement.textContent = secondi; // Aggiorna il testo nel div
        }

        if (secondi < 0) {
            clearInterval(interval); // Ferma il countdown
            countdownElement.textContent = "Stop"; // Mostra "Stop"
            instructionsElement.style.display = "none"; // Nasconde le istruzioni
            interval = null; // Reset per permettere un nuovo avvio
        }
    }, 1000);
});
