// Seleziona gli elementi
const startCountdownMessage = document.getElementById(
  "start-countdown-message"
);
const countdownElement = document.getElementById("countdown");
const instructionsElement = document.getElementById("instructions");
const numbersList = document.getElementById("numbers-list");
const answersForm = document.getElementById("answers-form");
const messageElement = document.getElementById("message");
let interval = null; // Variabile per gestire il setInterval

let correctNumbers = []; // Variabile per memorizzare i numeri corretti

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
startCountdownMessage.addEventListener("click", function () {
  console.log("Messaggio cliccato!");

  if (interval !== null) return; // Evita di avviare più countdown contemporaneamente

  // Genera e mostra i numeri casuali prima di iniziare il countdown
  correctNumbers = generateRandomNumbers();
  numbersList.innerHTML = ""; // Pulisce la lista precedente
  correctNumbers.forEach(function (number) {
    const listItem = document.createElement("li"); // Crea un elemento 'li'
    listItem.innerHTML = number; // Inserisci il numero nell'elemento 'li'
    numbersList.appendChild(listItem); // Aggiungi l'elemento 'li' nell'elemento 'ul'
  });

  // Imposta il countdown
  let secondi = 10;
  countdownElement.textContent = secondi; // Mostra subito il numero iniziale

  // Cambia il testo e nascondi il messaggio iniziale
  startCountdownMessage.innerHTML = "Countdown in corso...";
  startCountdownMessage.classList.add("d-none");

  // Avvia il countdown
  interval = setInterval(function () {
    secondi--; // Decrementa il valore di secondi

    if (secondi >= 0) {
      countdownElement.textContent = secondi; // Aggiorna il testo nel div
    }

    if (secondi < 0) {
      clearInterval(interval); // Ferma il countdown
      countdownElement.textContent = "Stop"; // Mostra "Stop"
      instructionsElement.textContent = "Inserisci la combinazione di numeri"; // Cambia il messaggio
      interval = null; // Reset per permettere un nuovo avvio

      // Rimuovi i numeri dopo che il countdown è finito
      numbersList.innerHTML = "";
      // Mostra il form per l'inserimento della combinazione
      answersForm.classList.remove("d-none");
    }
  }, 1000);
});

/// Gestisci l'invio del form per confrontare la risposta
answersForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Previene il comportamento predefinito del form (ricarica della pagina)

  const inputs = answersForm.querySelectorAll("input");
  const userAnswer = Array.from(inputs).map((input) => parseInt(input.value)); // Ottieni i numeri inseriti dall'utente
  console.log("Numeri inseriti dall'utente:", userAnswer);

  // Confronta la risposta dell'utente con i numeri corretti
  const correct = userAnswer.every(
    (number, index) => number === correctNumbers[index]
  );
  console.log("Combinazione corretta:", correct);

  if (correct) {
    messageElement.textContent =
      "Complimenti! Hai inserito la combinazione corretta!";
    messageElement.classList.remove("text-danger");
    messageElement.classList.add("text-success");
    console.log("Risposta corretta, messaggio di successo visualizzato.");
  } else {
    messageElement.textContent = "Ops! Combinazione sbagliata. Riprova.";
    messageElement.classList.remove("text-success");
    messageElement.classList.add("text-danger");
    console.log("Risposta sbagliata, messaggio di errore visualizzato.");
  }

  // Rendi il messaggio visibile
  messageElement.style.display = "block";

  // Nascondi il form e il messaggio dopo la risposta
  answersForm.classList.add("d-none");
  setTimeout(function () {
    messageElement.textContent = ""; // Svuota il messaggio dopo un po'
    messageElement.style.display = "none"; // Nasconde il messaggio
    console.log("Messaggio svuotato e nascosto.");
  }, 3000);
});
