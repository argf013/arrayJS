// Definisikan bilangan yang ingin diperiksa
const bilangan = 1;

// Fungsi untuk memeriksa apakah suatu bilangan prima atau tidak
function isPrima(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// Fungsi untuk memeriksa apakah suatu bilangan agak prima atau tidak
function isAgakPrima(n) {
  // Periksa apakah bilangan itu prima
  if (isPrima(n)) {
    return true;
  }

  // Cari dua faktor positif lainnya yang mungkin
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (n % i === 0 && isPrima(i)) {
      count++;
      if (count > 1) {
        return false;
      }
    }
  }

  return count === 1;
}

// Cek apakah bilangan tersebut agak prima atau bukan
if (isAgakPrima(bilangan)) {
  console.log("YA");
} else {
  console.log("BUKAN");
}
