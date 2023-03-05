/**
 * Mengurutkan array objek berdasarkan nilai properti yang diberikan.
 * @param {Array} objects - Array objek yang akan diurutkan.
 * @param {string} prop - Nama properti yang akan digunakan sebagai kriteria pengurutan.
 * @returns {Array} - Array objek yang sudah diurutkan berdasarkan properti yang diberikan.
 */
function sortObjects(objects, prop) {
  return objects.sort((a, b) => a[prop] - b[prop]);
}

// Contoh penggunaan fungsi sortObjects
const objects = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
];

const sortedObjects = sortObjects(objects, "age");

// Output hasil pengurutan
console.log(sortedObjects); // [{ name: "Charlie", age: 20 }, { name: "Alice", age: 25 }, { name: "Bob", age: 30 }]
