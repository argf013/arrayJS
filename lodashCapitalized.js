const _ = require('lodash');

const fruitName = 'apel hijau';
const capitalizedFruitName = _.startCase(fruitName);

console.log(capitalizedFruitName); // output: Apel Hijau
