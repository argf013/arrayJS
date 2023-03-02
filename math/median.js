function findMedian(arr) {
    // urutkan array secara ascending
    arr.sort(function(a, b) {
      return a - b;
    });
    
    var length = arr.length;
    var mid = Math.floor(length / 2);
  
    // jika panjang array ganjil, kembalikan nilai di tengah
    if (length % 2 !== 0) {
      return arr[mid];
    } 
    // jika panjang array genap, kembalikan rata-rata dari dua nilai di tengah
    else {
      return (arr[mid - 1] + arr[mid]) / 2;
    }
  }
  
  // contoh penggunaan
  console.log(findMedian([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 5
  