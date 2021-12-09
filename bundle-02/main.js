/*******************************************************************************
​
    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
console.log(checkAge()); 

/*******************************************************************************
​
    Risposta domande esercizio 1:

    1- Che cosa fa questo codice?

        Da' un messaggio in base a cosa è impostato myAge.

    2- Sono presenti errori di sintassi?

        no

    3- Sono presenti errori logici?

        Si, message non può essere const in quanto ha un valore variabile.
    ​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();

/*******************************************************************************
​
    Risposta domande esercizio 1:
    
    1- Che cosa fa questo codice?

        Ti dà la lunghezza della const colors.

    2- Sono presenti errori di sintassi?

        è presente un errore di battitura a riga 49

    3- Sono presenti errori logici?

        no
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/

// ESERCIZIO 3
function addNumbers() {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

/*******************************************************************************
​
    Risposta domande esercizio 1:
    
    1- Che cosa fa questo codice?

        Somma ad un numero dato dall'utente tramite promp dodici

    2- Sono presenti errori di sintassi?

        Si, mancava parseInt() per assicurarsi che il numero dato dall'utente sia un int e non sommi due stringhe

    3- Sono presenti errori logici?

        no
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/

// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

/*******************************************************************************
​
    Risposta domande esercizio 1:
    
    1- Che cosa fa questo codice?

    2- Sono presenti errori di sintassi?

        Erano stati inseriti gli apici nel let a riga 107 e dentro l'if a riga 110, e di conseguenza === true era sbagliato e ridondante quando corretto.

    3- Sono presenti errori logici?

        no
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/

// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];
            
        if (userEmail.length > 5) {
                
            if (email === userEmail) {
            grantAccess = true;         
                
            }
            
        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
}
checkAccessImproved();

/*******************************************************************************
​
    Risposta domande esercizio 1:
    
    1- Che cosa fa questo codice?

        Controlla che la mail inserita sia presente nel server con un controllo della lunghezza in più

    2- Sono presenti errori di sintassi?

        Si, mancava la graffa che chiudeva la funzione, e ho anche corretto l'aggiornamento di grantAccess che partiva come booleano e viene aggiornato in stringa

    3- Sono presenti errori logici?

        no
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/



























