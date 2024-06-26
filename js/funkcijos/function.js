/*
FUNCTION - funkcija, perpanaudojama logika
() - paramaetru blokas
{} - logikos blokas

Input => Function() => Output

*/

function funkcijosPavadinimas() {
}

const a = funkcijosPavadinimas();
console.log(a);

function empty(){
    return undefined;
}

console.log(empty());

function giveMeFive() {
    return 5;
}

console.log(giveMeFive());

function giveMeSix() {
    return 6;
}

console.log(giveMeSix());

/*
Input:
name: Jonas
surname: Jonaitis

Output:
Laba diena, as esu Jonas Jonaitis!

Laba diena, as esu Maryte Marytaite!
Laba diena, as esu Petras Petraitis!
Laba diena, as esu Ona Onaityte!
*/

function intro(name, lastname) {
    return 'Laba diena, as esu ' + name +' '+ lastname + '!';
}

console.log(intro('Jonas', 'Jonaitis'));
console.log(intro('Maryte', 'Marytaite'));
console.log(intro('Petras', 'Petraitis'));
console.log(intro('Ona', 'Onaityte'));


/*
Input:
- pirmas skaicius = 5
- antras skaicius = 7

Output:
35
*/

function multiplay(firstNumber, secondNuber){
    return firstNumber * secondNuber;
}

console.log(multiplay(5, 7));
console.log(multiplay(-2, 8));
console.log(multiplay(3.14, 2));

// Mano vardas yra Jonas, man 99 metai ir as megstu cepelinus.
// Mano vardas yra Maryte, man 88 metai ir as megstu balionus.

function iLike(name, age, item) {
    return 'Mano vardas yra ' + name + ',man ' + age + ' metai ir as megstu ' 
    + item + '.';
    //return 'Mano vardas yra VARDAS, man XX metai ir megstu DALYKAS.';
} 

console.log(iLike());
console.log(iLike('Jonas'));
console.log(iLike('Maryte', 88));
console.log(iLike('Petras', 77, 'cepelinus'));
console.log(iLike('Ona', 66, 'balionus'));

console.clear();

function price(value) {
    const PVM = 21;
    const priceIncrease = 1 + PVM / 100;
    const priceForSale = value * priceIncrease;

    return priceForSale;
}

console.log(price(100)); // 121
console.log(price(150)); // 121

// Dictionary: ZODIS, ZODIS, ZODIS.

function words(w1, w2, w3) {
    let sentence = 'Dictionary: ';
    sentence += w1;
    sentence += ', ';
    sentence += w2;
    sentence += ', ';
    sentence += w3;
    sentence += '.';

    return sentence;
}

console.log(words('labas', 'rytas',  ' Lietuva'));
