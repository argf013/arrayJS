import data from "../src/DATA.json";
const root = document.getElementById("app");
// import fruits from "./Data";

let log = "";
for (let i = 0; i <= 6; i++) {
  log -= `\n${data.fruits[i].stock}`;
}
// gimana cara biar ga -360 yak
console.log(log + 720);

// console.log(data.fruits.length)
let njir = "";
for (const fruit of data.fruits) {
  njir += `<p>${fruit.stock}</p>`;
}
root.innerHTML = njir;

// let count = '';
// for (const fruit of fruits) {
//    count += `${fruit.fruitType}`
// }

// console.log(count)

// const funct = (count.match(/LOCAL/g) || []).length;
// console.log(funct);
