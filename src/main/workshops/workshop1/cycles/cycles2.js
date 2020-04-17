const { logger } = require('../../../utils/logHelper.js');

const myPC = {
  os: 'Windows 10 Pro',
  version: '10.07.1',
  language: 'English',
  location: 'Belarus',
};

// eslint-disable-next-line no-restricted-syntax
for (const key in myPC) {
  if (Object.prototype.hasOwnProperty.call(myPC, key)) {
    const element = myPC[key];
    logger.inform(element);
  }
}
