const { logger } = require('../../../utils/logHelper.js');

const array = ['alpha', 'beta', 'delta', 'sigma', 'omega'];

for (let index = 0; index < array.length; index += 1) {
  const department = array[index];
  logger.inform(`${department} is the best!`);
}

array.forEach((department) => {
  logger.inform(`I love ${department}!`);
});

// eslint-disable-next-line no-restricted-syntax
for (const department of array) {
  logger.inform(`${department} is Heaven on Earth!`);
}
