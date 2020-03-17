const array = [ 1, "2", [3], {key: 'value'} ];
const testKey = 'key'

console.log(array.length); // 3
console.log(array[0] === 1); // true
console.log(array[2][0] === 3);	// true
console.log(array[3].key === 'value');	// true
console.log(array[3][testKey] === 'value');	// true

console.log();

console.log(array); //[ 1, '2', [ 3 ], { key: 'value' } ]
array.push(5);
console.log(array); //[ 1, '2', [ 3 ], { key: 'value' }, 5 ]
console.log(array.pop()); //5
console.log(array); //[ 1, '2', [ 3 ], { key: 'value' } ]
array.unshift('zero');
console.log(array); //[ 'zero', 1, '2', [ 3 ], { key: 'value' } ]
console.log(array.shift()); //zero
console.log(array); //[ 1, '2', [ 3 ], { key: 'value' } ]