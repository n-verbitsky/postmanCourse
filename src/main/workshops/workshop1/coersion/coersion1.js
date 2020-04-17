/* eslint-disable eqeqeq */
/* eslint-disable no-self-compare */
const { logger } = require('../../../utils/logHelper.js');

logger.inform(1 === 1); // true
logger.inform(1 + 1 == 2); // true
logger.inform(2 == '2'); // true
logger.inform(`1${1}` == 11); // true

logger.inform();

logger.inform(1 === 1); // true
logger.inform(1 + 1 === 2); // true
logger.inform(2 === '2'); // false
logger.inform(`1${1}` === 11); // false

logger.inform();

logger.inform(1 !== 2); // true
logger.inform(1 != '1'); // false

logger.inform();

logger.inform(1 !== 2); // true
logger.inform(1 !== '1'); // true

logger.inform(true); // true
logger.inform(!true); // true

logger.inform(1 > 0); // true
logger.inform(0 < 1); // true
logger.inform(1 + 2 >= 3); // true
