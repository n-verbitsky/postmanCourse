const { logger } = require('../../../utils/logHelper.js');

function power(base, exponent = 2) {
  return base ** exponent;
}

logger.inform(power(3));
logger.inform(power(3, 3));
