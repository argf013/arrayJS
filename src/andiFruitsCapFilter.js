let fruits = [    {      "fruitId": 1,      "fruitName": "Apel",      "fruitType": "IMPORT",      "stock": 10    },    {      "fruitId": 1,      "fruitName": "Kurma",      "fruitType": "IMPORT",      "stock": 20    },    {      "fruitId": 1,      "fruitName": "apel",      "fruitType": "IMPORT",      "stock": 50    },    {      "fruitId": 1,      "fruitName": "Manggis",      "fruitType": "LOCAL",      "stock": 100    },    {      "fruitId": 1,      "fruitName": "Jeruk Bali",      "fruitType": "LOCAL",      "stock": 10    },    {      "fruitId": 1,      "fruitName": "KURMA",      "fruitType": "IMPORT",      "stock": 20    },    {      "fruitId": 1,      "fruitName": "Salak",      "fruitType": "IMPORT",      "stock": 150    }  ];

let AndiFruits = [];
for (let i = 0; i < fruits.length; i++) {
    let fruitName = fruits[i].fruitName.toLowerCase();
    let capitalizeFruit = fruitName[0].toUpperCase() + fruitName.slice(1);
    if(!AndiFruits.includes(capitalizeFruit)) {
        AndiFruits.push(capitalizeFruit);
    }
}
console.log(AndiFruits);
