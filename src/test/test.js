const text = JSON.stringify(` # I open music.yandex.ru
# I click the play button
# I wait until ads pop-up is opened
# I close ads pop-up
# I look at the header
`);
const descriptionArray = text
  .replace(/\\n/gi, '')
  .replace(/"/gi, '')
  .split('#');
descriptionArray.shift();
const stepsArray = descriptionArray.map((step) => ({
  content: step,
  expected: '',
}));

console.log(stepsArray);
