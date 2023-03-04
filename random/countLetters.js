function countLetters(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toUpperCase();
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
}

// Pada fungsi di atas, kita pertama-tama membuat sebuah objek kosong(obj). 
// Selanjutnya, kita melakukan iterasi pada setiap karakter pada 
// string input menggunakan loop for(str[i]). 
// Pada setiap iterasi, kita cek apakah 
// karakter tersebut sudah pernah muncul sebelumnya pada string. (if(obj[char]))
// Jika sudah, kita increment nilai pada properti obj[char], (obj[char]++)
// jika belum, kita buat properti baru dengan nama karakter tersebut pada objek,
// dan set nilai awalnya menjadi 1. (obj[char] = 1)
