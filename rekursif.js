type IComment = {
commentId: number;
commentContent: string;
replies?: IComment[];
}
const comments: IComment[] = [
{
commentId: 1,
commentContent: 'Hai',
replies: [
{
commentId: 11,
commentContent: 'Hai juga',
replies: [
{
commentId: 111,
commentContent: 'Haai juga hai jugaa'
},
{
commentId: 112,
commentContent: 'Haai juga hai jugaa'
}
]
},
{
commentId: 12,
commentContent: 'Hai juga',
replies: [
{
commentId: 121,
commentContent: 'Haai juga hai jugaa'
}
]
}
]
},
{
commentId: 2,
commentContent: 'Halooo'
}
]

function countComments(comments: IComment[]): number {
  let count = 0;

  for (const comment of comments) {
    count++;
    if (comment.replies) {
      count += countComments(comment.replies);
    }
  }

  return count;
}

console.log(countComments(comments)); // Output: 7

// Pada fungsi countComments, kita menggunakan loop for...of untuk melakukan iterasi pada setiap elemen dalam array comments. 
// Setiap kali loop berjalan, kita menambahkan 1 pada variabel count untuk menghitung jumlah komentar. 
// Kemudian, jika objek komentar memiliki properti replies, kita memanggil countComments pada array balasan komentar untuk menghitung total komentar di dalamnya. 
// Proses ini akan berlanjut secara rekursif seiring dengan penambahan profil komentar. Hasil akhir dari fungsi ini adalah total jumlah komentar yang ada.
