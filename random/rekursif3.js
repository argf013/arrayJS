function findMax(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  let subMax = findMax(arr.slice(1));
  return Math.max(arr[0], subMax);
}

let numbers = [1, 2, 3, 4, 5];
console.log(findMax(numbers));




// Pada contoh di atas, kita memiliki sebuah array angka dan kita menggunakan rekursif function untuk mencari nilai maksimum dalam array. 
// Function findMax memanggil dirinya sendiri untuk setiap elemen dalam array dan membandingkan nilai maksimum saat ini dengan elemen berikutnya. 
// Proses ini akan berlanjut sampai hanya ada satu elemen dalam array, yang merupakan nilai maksimum dari array asli.

// Rekursif function juga dapat digunakan untuk melakukan operasi lain pada array, seperti menjumlahkan setiap elemen dalam array atau mencari nilai minimum dalam array.
