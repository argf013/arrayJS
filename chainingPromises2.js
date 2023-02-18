// membuat promise pertama
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise pertama selesai");
    resolve("Data dari promise pertama");
  }, 2000);
});

// membuat promise kedua dengan menggunakan hasil dari promise pertama
const promise2 = (dataPromise1) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise kedua selesai");
      resolve(`Data dari promise pertama: ${dataPromise1} dan data dari promise kedua`);
    }, 2000);
  });
};

// menjalankan promise pertama dan kemudian promise kedua setelah promise pertama selesai
promise1.then((resultPromise1) => {
  return promise2(resultPromise1);
}).then((resultPromise2) => {
  console.log(resultPromise2);
}).catch((error) => {
  console.error(error);
});
