/* Input utente */
//- chiedo il numero all'utente e lo salvo in una  cariabile (kmUser)
const kmUser = Number(prompt('Inserisci il numero di km che vuoi percorrere (10.2, 10)'));
console.log({kmUser});

//- chiedo l'età al passeggero e la salvo in una variabile(ageUser)
const ageUser = parseInt(prompt('Inserisci la tua età'));
console.log({ageUser});

/* Prezzi sconti */
// Salvo prezzo base dei km in una variabile (kmPrice)
const kmPrice = 0.21;


// Imposto variabile che definisce etè minorenni(ageUnder = 18)
const ageUnder = 18;
// Imposto variabile che definisce etè maggiorenni(ageOver = 65)
const ageOver = 65;


//- setto una variabile discountUnder = 20
const discountUnder = 20
//- setto una variabile discountOver = 40
const discountOver = 40

// calcolo il prezzo totale del biglietto 
let price = kmPrice * kmUser;
let priceDiscount = 0;

//  console.log({price});

if (ageUser < ageUnder){ 
    //cas 1. minorenne
    console.log('utente minorenne, calcolo sconto');

    // price = price - (price / 100 * discountUnder);

    priceDiscount = (price / 100 * discountUnder);
}

else if (ageUnder >= ageOver){
    console.log('utente over, calcolo sconto');

    priceDiscount = (price / 100 * discountOver);

    price = price - (price / 100 * discountOver);
}

//price -= priceDiscount;
price = price - priceDiscount;
console.log(`il prezzo finale del biglietto è ${price.toFixed(2)}€`);