const firstVariable = 'test';
console.dir(firstVariable); // 'test'

firstVariable = 1; // fails here
console.dir(firstVariable); 

if (true) {
    firstVariable = true; // fails here
    const secondVariable = false; 
}
console.dir(firstVariable); // true
console.dir(secondVariable); //fails here

const thirdVariable;
console.dir(thirdVariable); //fails here

const fourthVariable = {};
fourthVariable.firstKey = 'firstValue';
console.dir(fourthVariable); //{ firstKey: 'firstValue' }