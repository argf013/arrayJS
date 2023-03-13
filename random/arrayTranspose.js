function transposeArray(arr) {
  return arr[0].map((_, i) => arr.map(row => row[i]));
}

// Contoh penggunaan
const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(transposeArray(arr)); // Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
