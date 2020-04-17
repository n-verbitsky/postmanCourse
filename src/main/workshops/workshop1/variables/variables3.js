const { logger } = require('../../../utils/logHelper.js');

let firstVariable = 'test';
logger.inform(firstVariable); // 'test'

firstVariable = 1; // 1
logger.inform(firstVariable);

// eslint-disable-next-line no-constant-condition
if (true) {
  firstVariable = true;
  // eslint-disable-next-line no-unused-vars
  const secondVariable = false;
}

logger.inform(firstVariable); // true
try {
  // eslint-disable-next-line no-undef
  logger.inform(secondVariable); // fails here
} catch (error) {
  logger.error(error);
}

let thirdVariable;
logger.inform(thirdVariable); // undefined

const fourthVariable = {};
fourthVariable.firstKey = 'firstValue';
logger.inform(fourthVariable); // { firstKey: 'firstValue' }
