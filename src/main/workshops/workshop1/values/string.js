const { logger } = require('../../../utils/logHelper.js');

const string = 'test';

logger.inform(string.length);
logger.inform(string.charAt(0));
logger.inform(string.indexOf('t'));
logger.inform(string.split('e'));

logger.inform();

logger.inform(`${string} string`);
logger.inform(`${string} string`);
