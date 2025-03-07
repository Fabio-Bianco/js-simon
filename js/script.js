
// Seleziona gli elementi
const startCountdownMessage = document.getElementById('start-countdown-message');
const countdownElement = document.getElementById('countdown');
const instructionsElement = document.getElementById('instructions');
const numbersList = document.getElementById('numbers-list');
const answersForm = document.getElementById('answers-form');
let interval = null; // Variabile per gestire il setInterval

// Funzione per generare un numero casuale
function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Genera i numeri casuali
function generateRandomNumbers() {
    const numbers = [];
    for (let i = 0; i < 5; i++) {
        const number = getRandInt(1, 50);
        if (!numbers.includes(number)) {
            numbers.push(number);
        } else {
            i--;
        }
    }
    return numbers;
}

// Aggiungi un event listener per il click sul messaggio per avviare il countdown
startCountdownMessage.addEventListener('click', function() {
    console.log("Messaggio cliccato!");

    if (interval !== null) return; // Evita di avviare più countdown contemporaneamente

    // Genera e mostra i numeri casuali prima di iniziare il countdown
    const numbers = generateRandomNumbers();
    numbersList.innerHTML = ''; // Pulisce la lista precedente
    numbers.forEach(function(number) {
        const listItem = document.createElement('li'); // Crea un elemento 'li'
        listItem.innerHTML = number;  // Inserisci il numero nell'elemento 'li'
        numbersList.appendChild(listItem); // Aggiungi l'elemento 'li' nell'elemento 'ul'
    });

    // Imposta il countdown
    let secondi = 10;
    countdownElement.textContent = secondi; // Mostra subito il numero iniziale
    console.log("Countdown avviato, secondi:", secondi);

    // Cambia il testo e nascondi il messaggio iniziale
    startCountdownMessage.innerHTML = "Countdown in corso...";
    startCountdownMessage.classList.add('d-none');
    console.log("Messaggio nascosto con class d-none.");

    // Avvia il countdown
    interval = setInterval(function() {
        secondi--; // Decrementa il valore di secondi

        if (secondi >= 0) {
            countdownElement.textContent = secondi; // Aggiorna il testo nel div
        }

        if (secondi < 0) {
            clearInterval(interval); // Ferma il countdown
            countdownElement.textContent = "Stop"; // Mostra "Stop"
            instructionsElement.textContent = "Inserisci la combinazione di numeri"; // Cambia il messaggio
            interval = null; // Reset per permettere un nuovo avvio
            console.log("Countdown fermato, 'Stop' mostrato.");
            
            // Rimuovi i numeri dopo che il countdown è finito
            numbersList.innerHTML = '';
            console.log("Numeri rimossi dalla lista.");

            // Mostra il form per l'inserimento della combinazione
            answersForm.classList.remove('d-none');
        }
    }, 1000);
});
