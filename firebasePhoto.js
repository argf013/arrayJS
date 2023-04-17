const admin = require('firebase-admin');
const serviceAccount = require('./path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'your-bucket-name.appspot.com',
});

const bucket = admin.storage().bucket();

// Fungsi untuk mengunggah file ke Firebase Storage
async function uploadFileToStorage(file, destination) {
  const fileUpload = bucket.file(destination);

  const stream = fileUpload.createWriteStream({
    metadata: {
      contentType: file.mimetype,
    },
  });

  // Mengirimkan data file ke Firebase Storage
  stream.on('finish', () => {
    console.log(`${file.originalname} berhasil diunggah.`);
  }).end(file.buffer);
}

// Contoh penggunaan fungsi uploadFileToStorage
const file = req.file; // Mendapatkan file dari request
const destination = `images/${file.originalname}`; // Nama folder dan file
await uploadFileToStorage(file, destination); // Mengunggah file ke Firebase Storage
