// Import library lodash
const _ = require("lodash");

const fruits = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10
  },
  {
    fruitId: 1,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20
  },
  {
    fruitId: 1,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50
  },
  {
    fruitId: 1,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100
  },
  {
    fruitId: 1,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10
  },
  {
    fruitId: 1,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20
  },
  {
    fruitId: 1,
    fruitName: "Salak",
    fruitType: "IMPORT",
    stock: 150
  }
];

// Ini adalah proses mapping array fruits untuk mengubah semua nama buah menjadi lowercase
const lowercaseFruits = fruits.map((fruit) => {
  return {
    ...fruit,
    fruitName: _.toLower(fruit.fruitName)
  };
});

// Ini adalah proses untuk mendapatkan unique nama buah dengan huruf kapital untuk ditampilkan pada output
const uniqueNames = _.chain(lowercaseFruits)
  .map((fruit) => _.capitalize(fruit.fruitName))
  .uniq()
  .value();

// Ini adalah proses filtering array fruits untuk mendapatkan buah dengan tipe IMPORT
const fruitImport = _.filter(
  lowercaseFruits,
  (fruit) => fruit.fruitType === "IMPORT"
);
const totalImport = _.reduce(
  fruitImport,
  (total, fruit) => total + fruit.stock,
  0
);

// Ini adalah proses filtering array fruits untuk mendapatkan buah dengan tipe LOCAL
const fruitLocal = _.filter(
  lowercaseFruits,
  (fruit) => fruit.fruitType === "LOCAL"
);
const totalLocal = _.reduce(
  fruitLocal,
  (total, fruit) => total + fruit.stock,
  0
);

// Ini adalah proses untuk mendapatkan unique nama buah dengan huruf kapital untuk buah dengan tipe LOCAL untuk ditampilkan pada output
const uniqueLocal = _.chain(fruitLocal)
  .map((fruit) => _.capitalize(fruit.fruitName))
  .uniq()
  .value();

// Ini adalah proses untuk mendapatkan unique nama buah dengan huruf kapital untuk buah dengan tipe IMPORT untuk ditampilkan pada output
const uniqueImport = _.chain(fruitImport)
  .map((fruit) => _.startCase(fruit.fruitName))
  .uniq()
  .value();

// Ini adalah proses untuk mendapatkan total stock seluruh buah dengan menggunakan reduce
const totalBuah = _.reduce(fruits, (total, fruit) => total + fruit.stock, 0);

// Ini adalah proses untuk mendapatkan unique tipe buah untuk ditampilkan pada output
const tipe = _.chain(fruits).map("fruitType").uniq().value();

// Ini adalah output yang akan ditampilkan pada console
console.log(`Buah yang dimiliki andi: ${uniqueNames}`);
console.log(
  `Andi membutuhkan ${tipe.length} keranjang untuk tipe buah ${tipe}`
);
console.log(`Buah Import: ${uniqueImport}`);
console.log(`Total buah Import: ${totalImport}`);
console.log(`Buah Local: ${uniqueLocal}`);
console.log(`Total buah Local: ${totalLocal}`);
console.log(`Total seluruh buah: ${totalBuah}`);
