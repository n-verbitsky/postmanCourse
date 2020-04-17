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
const { logger } = require('../../../utils/logHelper.js');

const primitives = ['number', 'string', 'boolean', 'null', 'undefined', 'symbol'];
const nonPrimitives = ['object'];

logger.inform(typeof (42));
logger.inform(typeof (42.0));
logger.inform(typeof (42.153));
logger.inform(typeof (0));
logger.inform(typeof (NaN));

logger.inform(typeof ('a'));
logger.inform(typeof ('word'));
logger.inform(typeof ('1'));
logger.inform(typeof ('true'));

logger.inform(typeof (true));
logger.inform(typeof (false));
logger.inform(typeof (null));
logger.inform(typeof (undefined));

logger.inform(typeof ({}));
logger.inform(typeof ([]));

// eslint-disable-next-line func-names
logger.inform(typeof (function () {}));

module.exports = {
  primitives,
  nonPrimitives,
};
