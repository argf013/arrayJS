function countWords(str) {
  // Buat objek kosong untuk menyimpan jumlah kemunculan setiap kata
  let countObj = {};

  // Pisahkan string menjadi array kata-kata
  let words = str.toUpperCase().split(" ");

  // Loop melalui setiap kata dalam array
  for (let i = 0; i < words.length; i++) {
    // Jika kata telah muncul sebelumnya, tambahkan 1 pada jumlah kemunculannya
    if (countObj[words[i]]) {
      countObj[words[i]]++;
    }
    // Jika kata belum pernah muncul sebelumnya, buat sebuah properti baru pada objek dengan nilai 1
    else {
      countObj[words[i]] = 1;
    }
  }

  return countObj;
}

console.log(countWords("hello hello hEllo World wOrld"))
