/*
Buatlah fungsi untuk menghitung total komentar yang ada, termasuk semua balasan komentar. 
Berdasarkan data di atas, total komentar adalah 7 komentar.
*/
const comments = [
    {
      commentId: 1,
      commentContent: "Hai",
      replies: [
        {
          commentId: 11,
          commentContent: "Hai juga",
          replies: [
            {
              commentId: 111,
              commentContent: "Haai juga hai jugaa"
            },
            {
              commentId: 112,
              commentContent: "Haai juga hai jugaa"
            }
          ]
        },
        {
          commentId: 12,
          commentContent: "Hai juga",
          replies: [
            {
              commentId: 121,
              commentContent: "Haai juga hai jugaa"
            }
          ]
        }
      ]
    },
    {
      commentId: 2,
      commentContent: "Halooo"
    }
  ]

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
console.log(`Jumlah total komentar: ${hitungKomentars(comments)}`);
