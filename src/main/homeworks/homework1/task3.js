/*
There are 2 arrays: "names1" and "names2". Create a function that:
- returns array, that has names from array names1 excluding names from array names2
*/

const names1 = ['Alex', 'Dima', 'Kate', 'Galina', 'Ivan'];
const names2 = ['Dima', 'Ivan', 'Kate'];

module.exports = {
  names1,
  names2,
};

function task3 () {
  const unicNames = []
  for (let index = 0; index < names1.length; index++) {
    const nameFrom1 = names1[index];
    if (names2.includes(nameFrom1)) {}
    else {unicNames.push(nameFrom1)}};
  console.log(`The unic names are ${unicNames}`);      
}
task3 ();