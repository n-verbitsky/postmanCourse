/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const { logger } = require('../../../utils/logHelper.js');

firstVariable = 'test';
logger.inform(firstVariable); // 'test'

firstVariable = 1;
logger.inform(firstVariable); // 1

// eslint-disable-next-line no-constant-condition
if (true) {
  firstVariable = true;
  secondVariable = false;
}
logger.inform(firstVariable); // true
logger.inform(secondVariable); // false

try {
  thirdVariable;
} catch (error) {
  logger.error(error);
} // fails here
logger.inform(thirdVariable);

fourthVariable = {};
fourthVariable.firstKey = 'firstValue';
logger.inform(JSON.stringify(fourthVariable)); // { firstKey: 'firstValue' }
