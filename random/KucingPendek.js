function cari_kucing_pendek(n, p, tinggi_kucing) {
  // Mengurutkan tinggi semua kucing secara menurun
  tinggi_kucing.sort((a, b) => b - a);

  // Mengambil kucing dengan urutan ke-p dari urutan terpendek
  const kucing_pendek = tinggi_kucing[p-1];

  return kucing_pendek;
}

const n = 5;
const p = 2;
const tinggi_kucing = [5, 4, 3, 2, 1];

const kucing_pendek = cari_kucing_pendek(n, p, tinggi_kucing);
console.log(kucing_pendek); // Output: 2
