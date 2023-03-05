/**
 * Mencari pasangan angka dalam array yang jumlahnya sama dengan target.
 * @param {Array} arr - Array angka yang akan dicari pasangan angkanya.
 * @param {number} target - Target jumlah dari pasangan angka yang ingin dicari.
 * @returns {Array} - Pasangan angka dalam bentuk array yang jumlahnya sama dengan target.
 */
function findPair(arr, target) {
  let pair = [];

  // Lakukan iterasi untuk mencari pasangan angka
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        pair.push(arr[i], arr[j]);
        break;
      }
    }
    if (pair.length > 0) {
      break;
    }
  }

  return pair;
}
