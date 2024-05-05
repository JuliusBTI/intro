/*
BOOLEAN - logines reiksmes

- true
- false

Boolean logikos operatoriai:
- && (and)
- || (or)
- ! (not)
*/

const username = 'Jonas';
const age = 99;
const isSunShining = true;
const hasFuel = false;

console.log(isSunShining);
console.log(hasFuel);

console.log('KAIP NENAUDOTI:', true + true);
console.log('KAIP NENAUDOTI:', true * false);

console.clear();

console.log('--------------------');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.clear();
console.log(true && true || true);
console.log(true && true || false);

console.log(true && false || false);
console.log(false && false || false);

console.log(false && true || true);
console.log(false && true || false);

console.log(false && false || true);
console.log(false && false || false);

console.log('-----------------');

console.log(true || true && true);
console.log(true || true && false);

console.log(true || false && false);
console.log(false || false && false);

console.log(false || true && true);
console.log(false || true && false);

console.log(false || false && true);
console.log(false || false && false);

console.log('---------------');

console.log(true && true && true && true);
console.log(true && true && true && false);
console.log(true && true && false && false);
console.log(true && false && false && false);
console.log(false && false && false && false);
console.log(false && false && false && true);
console.log(false && false && true && true);
console.log(false && true && true && true);
console.log(true && false && false && true);
console.log(false && true && true && false);
console.log(true && false && true && false);
console.log(false && true && false && true);
console.log(false && true && false && false);
console.log(false && false && true && false);
console.log(true && true && false && true);
console.log(true && false && true && true);
console.log('---------------');
console.log(true && true && true || true);
console.log(true && true && true || false);
console.log(true && true && false || false);
console.log(true && false && false || false);
console.log(false && false && false || false);
console.log(false && false && false || true);
console.log(false && false && true || true);
console.log(false && true && true || true);
console.log(true && false && false || true);
console.log(false && true && true || false);
console.log(true && false && true || false);
console.log(false && true && false || true);
console.log(false && true && false || false);
console.log(false && false && true || false);
console.log(true && true && false || true);
console.log(true && false && true || true);
console.log('---------------');
console.log(true && true || true || true);
console.log(true && true || true || false);
console.log(true && true || false || false);
console.log(true && false || false || false);
console.log(false && false || false || false);
console.log(false && false || false || true);
console.log(false && false || true || true);
console.log(false && true || true || true);
console.log(true && false || false || true);
console.log(false && true || true || false);
console.log(true && false || true || false);
console.log(false && true || false || true);
console.log(false && true || false || false);
console.log(false && false || true || false);
console.log(true && true || false || true);
console.log(true && false || true || true);
console.log('---------------');
console.log(true || true || true || true);
console.log(true || true || true || false);
console.log(true || true || false || false);
console.log(true || false || false || false);
console.log(false || false || false || false);
console.log(false || false || false || true);
console.log(false || false || true || true);
console.log(false || true || true || true);
console.log(true || false || false || true);
console.log(false || true || true || false);
console.log(true || false || true || false);
console.log(false || true || false || true);
console.log(false || true || false || false);
console.log(false || false || true || false);
console.log(true || true || false || true);
console.log(true || false || true || true);
console.log('---------------');
console.log(true || true && true || true);
console.log(true || true && true || false);
console.log(true || true && false || false);
console.log(true || false && false || false);
console.log(false || false && false || false);
console.log(false || false && false || true);
console.log(false || false && true || true);
console.log(false || true && true || true);
console.log(true || false && false || true);
console.log(false || true && true || false);
console.log(true || false && true || false);
console.log(false || true && false || true);
console.log(false || true && false || false);
console.log(false || false && true || false);
console.log(true || true && false || true);
console.log(true || false && true || true);
console.log('---------------');
console.log(true || true && true && true);
console.log(true || true && true && false);
console.log(true || true && false && false);
console.log(true || false && false && false);
console.log(false || false && false && false);
console.log(false || false && false && true);
console.log(false || false && true && true);
console.log(false || true && true && true);
console.log(true || false && false && true);
console.log(false || true && true && false);
console.log(true || false && true && false);
console.log(false || true && false && true);
console.log(false || true && false && false);
console.log(false || false && true && false);
console.log(true || true && false && true);
console.log(true || false && true && true);
console.log('---------------');