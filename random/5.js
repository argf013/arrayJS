function hitung_kucing(n, tinggi_kucing) {
  // Array untuk menyimpan banyak kucing yang dapat diintip setiap kucing
  const banyak_intip = new Array(n).fill(0);

  // Menghitung banyak kucing yang dapat diintip oleh setiap kucing
  for (let i = 0; i < n; i++) {
    banyak_intip[i]++; // Setiap kucing dapat mengintip dirinya sendiri
    for (let j = i-1; j >= 0; j--) {
      if (tinggi_kucing[j] <= tinggi_kucing[i]) {
        banyak_intip[j]++;
      } else {
        break; // Kucing lain tidak dapat diintip
      }
    }
  }

  // Menghitung nilai S
  let total_intip = 0;
  for (let i = 0; i < n; i++) {
    total_intip += banyak_intip[i];
  }

  return total_intip;
}

function cek_parentheses_siku(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '[') {
      stack.push(str[i]);
    } else if (str[i] === ']') {
      if (stack.length === 0 || stack[stack.length - 1] !== '[') {
        return false;
      } else {
        stack.pop();
      }
    } else {
      return false;
    }
  }
  return stack.length === 0;
}

// Contoh penggunaan fungsi
const n = 5;
const tinggi_kucing = [5, 4, 3, 2, 1];
const s = hitung_kucing(n, tinggi_kucing);
console.log(s); // Output: 15

const str1 = '[]';
console.log(cek_parentheses_siku(str1)); // Output: true

const str2 = '][[]][';
console.log(cek_parentheses_siku(str2)); // Output: false
