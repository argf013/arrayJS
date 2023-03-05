function findMinMax(arr) {
  let minNum = arr[0];
  let maxNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minNum) {
      minNum = arr[i];
    } else if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return [minNum, maxNum];
}
