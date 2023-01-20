import data from "../src/DATA.json";
const root = document.getElementById("app");
// import fruits from "./Data";

// menghitung total stock
let stock = 0;
data.fruits.forEach((fruit) => {
  stock += fruit.stock;
});

// menghitung total typeImport
const local_fruit = data.fruits.filter((fruit) => {
  return fruit.fruitType === "LOCAL" ? true : false;
});

const import_fruit = data.fruits.filter((fruit) => {
  return fruit.fruitType === "IMPORT" ? true : false;
});
// console.log(import_fruit);
// show local fruit
const filterFruitLocal = data.fruits.filter((fruit) => {
  return fruit.fruitType === "LOCAL" ? true : false;
});

// show import fruit
const filterFruitImport = data.fruits.filter((fruit) => {
  return fruit.fruitType === "IMPORT" ? true : false;
});
//membuat nama buah menjadi huruf kapital
let anjay = "";
data.fruits.map((fruit) => {
  return (anjay += `-${fruit.fruitName.toUpperCase()}<br> `);
});
//menampilkan output kedalam html
root.innerHTML = `
  <p>Buah yang dimiliki andi: ${anjay}</p>
  <p>Total Stock: ${stock}</p>
  <p>Total Tipe Buah Import: ${import_fruit.length} </p>
  <p>Total Tipe Buah Local: ${local_fruit.length} </p>
  <p>Import: ${filterFruitImport.map((e) => e.fruitName)} </p>
  <p>Local: ${filterFruitLocal.map((e) => e.fruitName)} </p>
  `;
