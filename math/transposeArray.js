function transposeArray(array) {
    const transposed = [];
    for (let i = 0; i < array[0].length; i++) {
        transposed[i] = [];
        for (let j = 0; j < array.length; j++) {
            transposed[i][j] = array[j][i];
        }
    }
    return transposed;
}

const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const transposedArray = transposeArray(array);
console.log(transposedArray); // output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
