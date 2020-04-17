/* eslint-disable vars-on-top */
/* eslint-disable no-var */
const { logger } = require('../../../utils/logHelper.js');

let firstVariable = 'test';
logger.inform(firstVariable); // 'test'

firstVariable = 1;
logger.inform(firstVariable); // 1

// eslint-disable-next-line no-constant-condition
if (true) {
  firstVariable = true;
  var secondVariable = false;
}
logger.inform(firstVariable); // true
// eslint-disable-next-line block-scoped-var
logger.inform(secondVariable); // false

let thirdVariable;
logger.inform(thirdVariable); // undefined

const fourthVariable = {};
fourthVariable.firstKey = 'firstValue';
logger.inform(JSON.stringify(fourthVariable)); // { firstKey: 'firstValue' }
