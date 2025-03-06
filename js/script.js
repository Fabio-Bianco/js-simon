

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

