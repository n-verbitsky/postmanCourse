const array = ['alpha', 'beta', 'delta', 'sigma', 'omega']

for (let index = 0; index < array.length; index++) {
    const department = array[index];
    console.log(`${department} is the best!`)
}

console.log();

array.forEach(department => {
    console.log(`I love ${department}!`)
});

console.log();

for (const department of array) {
    console.log(`${department} is Heaven on Earth!`);
}