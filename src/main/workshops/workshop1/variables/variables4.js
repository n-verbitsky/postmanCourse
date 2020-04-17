const { logger } = require('../../../utils/logHelper.js');

const firstVariable = 'test';
logger.inform(firstVariable); // 'test'

try {
// eslint-disable-next-line no-const-assign
  firstVariable = 1; // fails here
  logger.inform(firstVariable);
} catch (error) {
  logger.error(error);
}

try {
  // eslint-disable-next-line no-constant-condition
  if (true) {
  // eslint-disable-next-line no-const-assign
    firstVariable = true; // fails here
    // eslint-disable-next-line no-unused-vars
    const secondVariable = false;
  }
  logger.inform(firstVariable); // true
  // eslint-disable-next-line no-undef
  logger.inform(secondVariable); // fails here
} catch (error) {
  logger.error(error);
}

// const thirdVariable;
// logger.inform(thirdVariable); //fails here

const fourthVariable = {};
fourthVariable.firstKey = 'firstValue';
logger.inform(fourthVariable); // { firstKey: 'firstValue' }
