/*
Create object "utils". It should contain:
- function to generate random number;
- function to generate random alphanumeric string;
- simple logger: has to contain 2 arguments - level (default value is "INFO"), message;
*/

const utils = {
  ramdomNumber (length = 10) {
      let number = '';
      const digits = '0123456789';
      for ( let index = 0; index < length; index++ ) {
        number += digits.charAt(Math.floor(Math.random() * number.length));
      }
      return number},
  ramdomText (length = 10) {
      let text = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for ( let index = 0; index < length; index++ ) {
        text += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return text},
  logger (level = 'INFO', message) {console.log(`[${level.toUpperCase()}]: ${message}`)}  
};

module.exports = {
  utils,
};









  
