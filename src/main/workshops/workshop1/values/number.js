const { logger } = require('../../../utils/logHelper.js');

const number1 = 3.14;

logger.inform(number1); // 3.14
logger.inform(number1.toFixed(1)); // 3.1
logger.inform(number1.toFixed(4)); // 3.1400

logger.inform();

logger.inform(36E6); // 36000000

logger.inform();

logger.inform(1 + 1); // 0
logger.inform(1 - 1); // 0
logger.inform(6 * 8); // 48
logger.inform(6 / 2); // 3
logger.inform(6 / 0); // Infinity
logger.inform(6 / -0); // -Infinity

logger.inform();

logger.inform(0.1 + 0.2 === 0.3); // false
