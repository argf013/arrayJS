import data from "../DATA.json";

const hitungKomentars = (komentars) => {
  let hitung = 0;
  komentars.forEach((komentar) => {
    hitung++;
    const balasan = komentar.replies;
    if (balasan) {
      hitung += hitungKomentars(balasan);
    }
  });
  return hitung;
};
console.log(`Jumlah total komentar: ${hitungKomentars(data.comments)}`);
