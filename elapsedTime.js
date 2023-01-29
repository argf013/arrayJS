async function calculateDays() {
  const startDate = new Date(await getUserInput());
  const endDate = new Date();
  const diffTime = Math.abs(endDate - startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  console.log(`${diffDays} hari berlalu sejak tanggal yang Anda tentukan`);
}

async function getUserInput() {
  return new Promise((resolve) => {
    const userInput = prompt('Masukkan tanggal awal (YYYY-MM-DD)');
    resolve(userInput);
  });
}

calculateDays();
