function rotateMatrix(matrix) {
  // Ambil ukuran matriks
  let n = matrix.length;
  let m = matrix[0].length;
  let matrix = [[1,2,3],[4,5,6],[7,8,9],[0,1,2]];

  // Buat matriks baru dengan ukuran M x N
  let rotatedMatrix = new Array(m);
  for (let i = 0; i < m; i++) {
    rotatedMatrix[i] = new Array(n);
  }
  
  // Lakukan rotasi searah jarum jam
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      rotatedMatrix[j][n - i - 1] = matrix[i][j];
    }
  }
  
  return rotatedMatrix;
}


let rotatedMatrix = rotateMatrix(matrix);
console.log(rotatedMatrix);
