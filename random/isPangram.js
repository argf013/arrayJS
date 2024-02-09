function isPangram(str) {
    // Konversi string menjadi huruf kecil 
    str = str.toLowerCase();
    
    // Membuat objek set untuk menyimpan huruf yang telah ditemukan
    let letters = new Set();
    
    // Loop setiap karakter dalam string
    for (let char of str) {
        // Hanya memproses karakter huruf a-z menggunakan regex
        if (/[a-z]/.test(char)) {
            // Menambahkan karakter ke set
            letters.add(char);
        }
    }
    
    // Array untuk menyimpan huruf yang tidak ditemukan
    let missingLetters = [];

    // Loop dari huruf 'a' sampai 'z' untuk memeriksa huruf yang tidak ditemukan
    for (let charCode = 97; charCode <= 122; charCode++) {
        let char = String.fromCharCode(charCode);
        if (!letters.has(char)) {
            missingLetters.push(char);
        }
    }

    // Jika jumlah huruf yang ditemukan adalah 26 (a-z), maka string tersebut adalah pangram
    if (letters.size === 26) {
        return true;
    } else {
        // Jika tidak, cetak huruf-huruf yang tidak ditemukan
        console.log("Missing letter: " + missingLetters.join(", "));
        return false;
    }
}

// Contoh penggunaan
let str1 = "The quick brown fox jumps over the lazy dog";
let str2 = "Pack my box with five dozen liquor jugs";
let str3 = "a";

console.log(isPangram(str1)); 
console.log(isPangram(str2));
console.log(isPangram(str3)); // false, b,c,d,f,g,h,i,j,k,m,n,o,p,q,s,u,v,w,x,y,z
