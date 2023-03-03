const tanggalLahir = prompt("Masukkan tanggal lahir (format: dd-mm-yyyy): ");
const tanggalLahirObj = new Date(tanggalLahir.split("-").reverse().join("-"));
const selisihWaktu = Date.now() - tanggalLahirObj.getTime();
const umurMilisecond = new Date(selisihWaktu);
const tahun = umurMilisecond.getUTCFullYear() - 1970;
const bulan = umurMilisecond.getUTCMonth();
const hari = umurMilisecond.getUTCDate() - 1;

alert(`Umur Anda adalah ${tahun} tahun, ${bulan} bulan, dan ${hari} hari.`);
