const { logger } = require('../../../utils/logHelper.js');

const object = {
  key1: 'value1',
  key2: 2,
  key3: true,
  key4: [],
  key5: {
    key51: 'value51',
  },
};

logger.inform(JSON.stringify(object));
