/**
This function generates Pascal's triangle and returns it as a 2D array.
    @param {number} rows - The number of rows in Pascal's triangle to generate.
    @returns {array} - A 2D array representing the Pascal's triangle.
*/

function pascalTriangle(rows) {
    const triangle = [];

    for (let i = 0; i < rows; i++) {
        triangle[i] = [];

        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                triangle[i][j] = 1;
            } else {
                triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
            }
        }
    }

    return triangle;
}

const pascal = pascalTriangle(5);
console.log(pascal);


// Penjelasan:

// Pada contoh kode di atas, pascalTriangle() adalah sebuah fungsi yang menerima sebuah argumen rows
// yang menentukan berapa banyak baris yang akan dibuat pada segitiga Pascal.
// Fungsi ini akan mengembalikan sebuah array 2D yang berisi angka-angka pada segitiga Pascal.

// Pertama-tama, kita membuat sebuah array kosong triangle yang akan diisi dengan angka-angka pada segitiga Pascal.
// Lalu, kita melakukan loop sebanyak rows kali untuk membuat baris-baris pada segitiga.
// Pada setiap iterasi loop, kita membuat sebuah array kosong pada posisi yang sesuai pada triangle.

// Lalu, kita melakukan loop lagi pada setiap baris untuk menentukan nilai pada setiap elemen pada baris tersebut.
// Jika indeks kolom sama dengan 0 atau sama dengan indeks baris, maka nilai pada elemen tersebut adalah 1.
// Jika tidak, maka nilai pada elemen tersebut adalah hasil penjumlahan antara elemen pada baris sebelumnya pada kolom sebelumnya
//  dengan elemen pada baris sebelumnya pada kolom yang sama.

// Setelah selesai membuat baris-baris pada segitiga Pascal, kita mengembalikan triangle yang berisi angka-angka pada segitiga tersebut.

// Pada kode di atas, kita menguji fungsi pascalTriangle() dengan membuat segitiga Pascal dengan 5 baris dan
//  menampilkan hasilnya pada console dengan menggunakan console.log(pascal).
//  Anda dapat mengganti nilai parameter rows pada pemanggilan fungsi pascalTriangle() untuk membuat segitiga Pascal dengan jumlah baris yang berbeda.