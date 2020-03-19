let firstVariable = 'test';
console.dir(firstVariable); // 'test'

firstVariable = 1; // 1
console.dir(firstVariable); 

if (true) {
    firstVariable = true;
    const secondVariable = false;
}
console.dir(firstVariable); // true
console.dir(secondVariable); //fails here

let thirdVariable;
console.dir(thirdVariable); //undefined

let fourthVariable = {};
fourthVariable.firstKey = 'firstValue';
console.dir(fourthVariable); //{ firstKey: 'firstValue' }