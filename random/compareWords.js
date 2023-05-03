function compareStrings(str1, str2) {

  // Membuat array dari kata-kata di dalam string pertama

  const arr1 = str1.split(" ");

  // Membuat array dari kata-kata di dalam string kedua

  const arr2 = str2.split(" ");

  // Membuat objek kosong untuk menyimpan kemunculan kata dalam arr1

  const count = {};

  // Looping melalui arr1 dan menyimpan kemunculan setiap kata dalam count

  for (let i = 0; i < arr1.length; i++) {

    const word = arr1[i];

    count[word] = (count[word] || 0) + 1;

  }

  // Looping melalui arr2 dan mencari kata yang tidak muncul di arr1

  for (let i = 0; i < arr2.length; i++) {

    const word = arr2[i];

    if (!count[word]) {

      return word;

    }

  }

  // Jika semua kata di arr2 muncul di arr1, kembalikan array kosong

  return [];

}

