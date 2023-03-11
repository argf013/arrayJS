class Book {

  constructor(title, author, releaseDate) {

    this.title = title;

    this.author = author;

    this.releaseDate = releaseDate;

  }

  // Method untuk menampilkan informasi lengkap buku

  getBookInfo(){

    return `Judul: ${this.title}, Penulis: ${this.author}, Tahun Terbit: ${this.releaseDate}`;

  }

}

// Contoh penggunaan

const book1 = new Book('Tardis', 'Arfa', 2022);

console.log(book1.getBookInfo()); // Output: Judul: Tardis, Penulis: Arfa, Tahun Terbit: 2022

