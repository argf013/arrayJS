# Rekursif
Created with CodeSandbox
- Buatlah fungsi untuk menghitung total komentar yang ada, termasuk semua
balasan komentar. Berdasarkan data dari DATA.json di atas, total komentar adalah 7 komentar. (jawaban ada di folder src: index.js)
- Pembahasan rekursif2.js: \
\
Mengapa nilai yang dihasilkan adalah 2? Berikut adalah alur programnya..

1. Kita memanggil fungsi calculate(3)

2. Program mengecek apakah 3 kurang dari 2? Jawabannya tentu saja tidak. Dengan value =3, maka fungsi mengembalikan nilai (calculate(3- 1) + calculate(3- 2)).  Sampai disini dapat diketahui bahwa :
![gambar1](https://i.ibb.co/YZwPPnc/image.png)

3. Selanjutnya, kita menghitung calculate(2)

4. Program mengecek apakah 2 kurang dari 2? Jawabannya tentu saja tidak. Dengan value=2, maka pada perhitungan kali ini akan mengembalikan nilai (calculate(2- 1) + calculate(2 - 2)). Hingga sampai sini dapat diketahui bahwa:
![gambar2](https://i.ibb.co/K9SwGvM/image.png)

5. Oke, kita tinggal mencari nilai dari calculate(0) dan calculate(1) untuk menemukan hasil akhirnya. Mari kita hitung calculate(1) terlebih dahulu.

6. Program mengecek apakah nilai 1 kurang dari 2. Jawabannya adalah Ya! Maka nilai yang dikembalikan adalah angka 1 itu sendiri. Dari sini dapat diketahui bahwa calculate(1) = 1

7. Selanjutnya kita hitung nilai calculate(0)

8. Program akan mengecek apakah 0 kurang dari 2? Tentu saja Ya! Maka nilai yang dikembalikan adalah angka 0 itu sendiri. Jadi nilai dari calculate(0) = 0

9. Kita tinggal masukkan saja ke perhitungan yang tadi.
![gambar3](https://i.ibb.co/FzYWg4H/image.png)
10. Voila! Hasil akhir untuk calculate(3) adalah 2
