import data from "../src/DATA.json";
const root = document.getElementById("app");

// count total stock
let stock = 0;
data.fruits.forEach((fruit) => {
  stock += fruit.stock;
});
//
// count total typeImport
const local_fruit = data.fruits.filter((fruit) => {
  return fruit.fruitType === "LOCAL" ? true : false;
});

const import_fruit = data.fruits.filter((fruit) => {
  return fruit.fruitType === "IMPORT" ? true : false;
});

// show local fruit
const filterFruitLocal = data.fruits.filter((fruit) => {
  return fruit.fruitType === "LOCAL" ? true : false;
});

// show import fruit
const filterFruitImport = data.fruits.filter((fruit) => {
  return fruit.fruitType === "IMPORT" ? true : false;
});
let andi = "";
for (let fruit of data.fruits) {
  andi += `${fruit.fruitName}, `;
}

root.innerHTML = `
  <p>Buah yang dimiliki andi: ${andi}</p>
  <p>Total Stock: ${stock}</p>
  <p>Total Tipe Buah Import: ${import_fruit.length} </p>
  <p>Total Tipe Buah Local: ${local_fruit.length} </p>
  <p>Import: ${filterFruitImport} </p>
  <p>Local: ${filterFruitLocal} </p>
  `;
