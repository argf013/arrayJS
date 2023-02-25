const fruits = [
  {
    "fruitId": 1,
    "fruitName": "Apel",
    "fruitType": "IMPORT",
    "stock": 10
  },
  {
    "fruitId": 1,
    "fruitName": "Kurma",
    "fruitType": "IMPORT",
    "stock": 20
  },
  {
    "fruitId": 1,
    "fruitName": "apel",
    "fruitType": "IMPORT",
    "stock": 50
  },
  {
    "fruitId": 1,
    "fruitName": "Manggis",
    "fruitType": "LOCAL",
    "stock": 100
  },
  {
    "fruitId": 1,
    "fruitName": "Jeruk Bali",
    "fruitType": "LOCAL",
    "stock": 10
  },
  {
    "fruitId": 1,
    "fruitName": "KURMA",
    "fruitType": "IMPORT",
    "stock": 20
  },
  {
    "fruitId": 1,
    "fruitName": "Salak",
    "fruitType": "IMPORT",
    "stock": 150
  }
];


const lowercaseFruits = fruits.map(fruit => {
  return {
    ...fruit,
    fruitName: fruit.fruitName.toLowerCase()
  };
});


const uniqueNames = [...new Set(lowercaseFruits.map(fruit => kapital(fruit.fruitName)))];
const fruitImport = lowercaseFruits.filter((fruit) => fruit.fruitType === 'IMPORT');
const fruitLocal = lowercaseFruits.filter((fruit) => fruit.fruitType === 'LOCAL');

const uniqueLocal = [... new Set(fruitLocal.map(fruit => kapital(fruit.fruitName)))];
const uniqueImport = [... new Set(fruitImport.map(fruit => kapital(fruit.fruitName)))];
const totalBuah = fruits.reduce((total, fruit) => total + fruit.stock, 0);
const tipe = [...new Set(fruits.map(fruit => fruit.fruitType))];

function kapital(string) {
  return string.replace(/\b\w/g, l => l.toUpperCase());
}



console.log(`Buah yang dimiliki andi: ${uniqueNames}`);
console.log(`Andi membutuhkan ${tipe.length} keranjang untuk tipe buah ${tipe}`)
console.log(`Buah Import: ${uniqueImport}`)
console.log(`Buah Local: ${uniqueLocal}`)
console.log(`Total seluruh buah: ${totalBuah}`)
