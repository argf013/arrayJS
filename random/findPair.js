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

// Fungsi findPair menerima dua parameter yaitu arr yang merupakan array angka dan target yang merupakan target jumlah dari pasangan angka yang ingin dicari.
// Variabel pair digunakan untuk menyimpan pasangan angka yang ditemukan.
// Dilakukan iterasi menggunakan dua buah for loop untuk mencari pasangan angka
// yang jumlahnya sama dengan target. Pertama, loop luar digunakan untuk memilih angka pertama 
// dari pasangan dan loop dalam digunakan untuk memilih angka kedua dari pasangan.
// Variabel j dimulai dari i + 1 agar angka yang dipilih tidak sama dengan angka yang telah dipilih sebelumnya.
// Jika pasangan angka ditemukan, maka kedua angka tersebut dimasukkan ke dalam array pair dan dilakukan break dari loop.
// Jika array pair tidak kosong, maka dilakukan break dari loop luar.
// Fungsi findPair mengembalikan array pair yang berisi pasangan angka yang jumlahnya sama dengan target. Jika tidak ada pasangan angka yang ditemukan, maka array pair akan kosong.
