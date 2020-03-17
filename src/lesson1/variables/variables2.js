firstVariable = 'test';
console.dir(firstVariable); // 'test'

firstVariable = 1;
console.dir(firstVariable); // 1

if (true) {
    firstVariable = true;
    secondVariable = false;
}
console.dir(firstVariable); //true
console.dir(secondVariable); //false

thirdVariable;
console.dir(thirdVariable); //undefined

fourthVariable = {};
fourthVariable.firstKey = 'firstValue';
console.dir(fourthVariable); //{ firstKey: 'firstValue' }