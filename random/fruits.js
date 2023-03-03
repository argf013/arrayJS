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

// Ini adalah fungsi untuk mengubah huruf pertama setiap kata pada sebuah string menjadi huruf besar (Capitalized)
function kapital(string) {
  return string.replace(/\b\w/g, (l) => l.toUpperCase());
}

//opsional bisa juga menggunakan fungsi ini
function kapital2(string) {
  return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Ini adalah proses mapping array fruits untuk mengubah semua nama buah menjadi huruf kecil
const lowercaseFruits = fruits.map((fruit) => {
  return {
    ...fruit,
    fruitName: fruit.fruitName.toLowerCase()
  };
});

// Ini adalah proses untuk mendapatkan unique nama buah dengan huruf kapital untuk ditampilkan pada output
const uniqueNames = [
  ...new Set(lowercaseFruits.map((fruit) => kapital(fruit.fruitName)))
];

// Ini adalah proses filtering array fruits untuk mendapatkan buah dengan tipe IMPORT
const fruitImport = lowercaseFruits.filter(
  (fruit) => fruit.fruitType === "IMPORT"
);

// Ini adalah proses filtering array fruits untuk mendapatkan buah dengan tipe LOCAL
const fruitLocal = lowercaseFruits.filter(
  (fruit) => fruit.fruitType === "LOCAL"
);

// Ini adalah proses untuk mendapatkan unique nama buah dengan huruf kapital untuk buah dengan tipe LOCAL untuk ditampilkan pada output
const uniqueLocal = [
  ...new Set(fruitLocal.map((fruit) => kapital(fruit.fruitName)))
];

// Ini adalah proses untuk mendapatkan unique nama buah dengan huruf kapital untuk buah dengan tipe IMPORT untuk ditampilkan pada output
const uniqueImport = [
  ...new Set(fruitImport.map((fruit) => kapital(fruit.fruitName)))
];

// Ini adalah proses untuk mendapatkan total stock seluruh buah dengan menggunakan reduce
const totalBuah = fruits.reduce((total, fruit) => total + fruit.stock, 0);

// Ini adalah proses untuk mendapatkan unique tipe buah untuk ditampilkan pada output
const tipe = [...new Set(fruits.map((fruit) => fruit.fruitType))];

// Ini adalah output yang akan ditampilkan pada console
console.log(`Buah yang dimiliki andi: ${uniqueNames}`);
console.log(
  `Andi membutuhkan ${tipe.length} keranjang untuk tipe buah ${tipe}`
);
console.log(`Buah Import: ${uniqueImport}`);
console.log(`Buah Local: ${uniqueLocal}`);
console.log(`Total seluruh buah: ${totalBuah}`);
