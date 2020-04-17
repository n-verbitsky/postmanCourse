const { logger } = require('../../../utils/logHelper.js');

const condition = 4;

if (condition < 5) {
  logger.inform("Yay, I'm here!");
} else if (condition < 10) {
  logger.inform("Ugh, I'm here!");
} else {
  logger.inform('Hmm, how I got here?');
}
