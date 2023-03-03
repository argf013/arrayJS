function hitung_A(n, tinggi) {
  let A = [];
  for (let i = 0; i < n; i++) {
    let a = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (tinggi[j] <= tinggi[i]) {
        a++;
      } else {
        break;
      }
    }
    A.push(a);
  }
  return A;
}

function hitung_S(A) {
  let S = 0;
  for (let i = 0; i < A.length; i++) {
    S += A[i];
  }
  return S;
}

function cari_nilai_S(n, tinggi) {
  const A = hitung_A(n, tinggi);
  const S = hitung_S(A);
  return S;
}

const n = 8;
const tinggi = [5, 1, 3, 4, 6, 5, 2, 6];
const S = cari_nilai_S(n, tinggi);
console.log(S);
