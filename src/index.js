import data from "../src/DATA.json";
const root = document.getElementById("app");

// menghitung total stock
let stock = 0;
data.fruits.forEach((fruit) => {
  stock += fruit.stock;
});
// memfilter local fruit
let local_fruit = data.fruits.filter((fruit) => {
  return fruit.fruitType === "LOCAL" ? true : false;
});
// memfilter import fruit
let import_fruit = data.fruits.filter((fruit) => {
  return fruit.fruitType === "IMPORT" ? true : false;
});
// menghitung jumlah import
let totalImport = 0;
import_fruit.forEach((fruit) => {
  totalImport += fruit.stock;
});
// menghitung jumlah local
let totalLocal = 0;
local_fruit.forEach((fruit) => {
  totalLocal += fruit.stock;
});
// memfilter double string
let filterImportTotal = import_fruit.filter((fruit) => {
  return fruit.fruitName === "apel" || fruit.fruitName === "KURMA"
    ? false
    : true;
});

//menampilkan buah yang dimiliki andi
let andi = data.fruits.filter((fruit) => {
  return fruit.fruitName === "apel" || fruit.fruitName === "KURMA"
    ? false
    : true;
});

//menampilkan output kedalam html
root.innerHTML = `
  <p>Buah yang dimiliki andi: ${andi.map((e) => e.fruitName)}</p>
  <p>Total Stock: ${stock}</p>
  <p>Buah Import: ${totalImport} </p>
  <p>Buah Local: ${totalLocal} </p>
  <p>Import: ${filterImportTotal.map((e) => e.fruitName)}</p>
  <p>Local: ${local_fruit.map((e) => e.fruitName)} </p>
  `;
