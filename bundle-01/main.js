/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log("esercizio uno",i);
}
/*******************************************************************************

    risposta domande esecizio 1:

    1- Che cosa fa questo codice?
        Conta da 0 a 4 in console log 
    2- Sono presenti errori di sintassi?
        No
    3- Sono presenti errori logici?
        Si, i era messo a maggiore di 5, quindi avrebbe fatto un unico ciclo perché era già soddisfatta la condizione
    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}
/*******************************************************************************

    risposta domande esecizio 2:

    1- Che cosa fa questo codice?
        ritorna un numero più 5 se il numero dato è pari
    2- Sono presenti errori di sintassi?
        Si, mancavano due "=" per definire un controllo di uguaglianza
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
/*******************************************************************************

    risposta domande esecizio 3:

    1- Che cosa fa questo codice?
        Come esercizio uno
    2- Sono presenti errori di sintassi?
        Si, erano messe delle virgole al posto delle ; nelle condizioni del loop
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length ; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
displayEvenNumbers();
 // dovrebbe restituire [2,4,6,8]


/*******************************************************************************

    risposta domande esecizio 4:

    1- Che cosa fa questo codice?
        crea un array contenente i numeri pari della lista che gli viene data
    2- Sono presenti errori di sintassi?
        Si:
        1- Non serve il "-1" a riga 78
        2- Non ci va il ; dopo l' i++ a riga 78
        3- Va controllato se è pari numbers[i] non solo numbers
        4- servono almeno due == dentro l'if di riga 79
        5- deve pushare numbers[i] e non i
        6- c'è un ; di troppo a riga 79 dopo l'if
        7- il return a riga 82 va spostato a riga 83 perché deve stare fuori dal ciclo
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/