/*
JavaScript defines seven built-in types:

null
undefined
boolean
number
string
object
symbol
*/

const primitives = ['number', 'string', 'boolean', 'null', 'undefined',  'symbol'];
const nonPrimitives = ['object'];

console.dir(typeof(42));
console.dir(typeof(42.0));
console.dir(typeof(42.153));
console.dir(typeof(0));
console.dir(typeof(NaN));

console.dir(typeof('a'));
console.dir(typeof('word'));
console.dir(typeof('1'));
console.dir(typeof('true'));

console.dir(typeof(true));
console.dir(typeof(false));

console.dir(typeof(null));

console.dir(typeof(undefined));

console.dir(typeof({}));
console.dir(typeof([]));

console.dir(typeof(function(){}))