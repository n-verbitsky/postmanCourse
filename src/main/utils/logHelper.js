const logWithTagAndColor = (color, level = 'INFO', text) => {
  // eslint-disable-next-line no-console
  console.log(`${color}[${level}] ${text} [${level}]`);
};
class Logger {
  constructor() {
    this.colors = {
      warning: '\x1b[1;33m',
      error: '\x1b[0;31m',
      info: '\x1b[1;37m',
    };
  }

  inform(text) {
    logWithTagAndColor(this.colors.info, undefined, text);
  }

  warning(text) {
    logWithTagAndColor(this.colors.warning, 'WARNING', text);
  }

  error(text) {
    logWithTagAndColor(this.colors.error, 'ERROR', text);
  }
}

const logger = new Logger();

module.exports = {
  logger,
};
