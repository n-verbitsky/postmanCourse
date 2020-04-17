const { logger } = require('../../../utils/logHelper.js');

const array = [1, '2', [3], { key: 'value' }];
const testKey = 'key';

logger.inform(array.length); // 3
logger.inform(array[0] === 1); // true
logger.inform(array[2][0] === 3); // true
logger.inform(array[3].key === 'value'); // true
logger.inform(array[3][testKey] === 'value'); // true

logger.inform();

logger.inform(array); // [ 1, '2', [ 3 ], { key: 'value' } ]
array.push(5);
logger.inform(array); // [ 1, '2', [ 3 ], { key: 'value' }, 5 ]
logger.inform(array.pop()); // 5
logger.inform(array); // [ 1, '2', [ 3 ], { key: 'value' } ]
array.unshift('zero');
logger.inform(array); // [ 'zero', 1, '2', [ 3 ], { key: 'value' } ]
logger.inform(array.shift()); // zero
logger.inform(array); // [ 1, '2', [ 3 ], { key: 'value' } ]
