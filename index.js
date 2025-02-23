const readline = require('readline');
const { 
    tambah, 
    kurang, 
    kali, 
    bagi, 
    pangkat, 
    faktorial, 
    isPrima, 
    modulus, 
    absolut, 
    maksimum, 
    minimum, 
    bulatkan 
} = require('./solution'); // Import fungsi dari file solution.js

// Membuat antarmuka input/output menggunakan readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Menampilkan menu pilihan operasi kalkulator
function tampilkanMenu() {
    console.log('\n=== Kalkulator Sederhana ===');
    console.log('1. Penjumlahan');
    console.log('2. Pengurangan');
    console.log('3. Perkalian');
    console.log('4. Pembagian');
    console.log('5. Pangkat');
    console.log('6. Faktorial');
    console.log('7. Cek Bilangan Prima');
    console.log('8. Modulus');
    console.log('9. Nilai Absolut');
    console.log('10. Nilai Maksimum');
    console.log('11. Nilai Minimum');
    console.log('12. Pembulatan');
    console.log('0. Keluar');
    console.log('=========================');
}

// Fungsi utama kalkulator
function kalkulator() {
    tampilkanMenu(); // Menampilkan menu setiap kali fungsi dipanggil

    // Meminta pengguna memilih operasi
    rl.question('Pilih operasi (0-12): ', (pilihan) => {
        if (pilihan === '0') { // Keluar jika pengguna memilih 0
            console.log('Terima kasih telah menggunakan kalkulator!');
            rl.close(); // Menutup antarmuka readline
            return;
        }

        // Operasi yang membutuhkan dua angka
        if (['1', '2', '3', '4', '5', '8', '10', '11'].includes(pilihan)) {
            rl.question('Masukkan angka pertama: ', (a) => {
                rl.question('Masukkan angka kedua: ', (b) => {
                    const num1 = parseFloat(a); // Konversi input ke angka
                    const num2 = parseFloat(b);
                    hitung(pilihan, num1, num2); // Hitung hasil berdasarkan pilihan
                    kalkulator(); // Tampilkan kembali menu
                });
            });
        } 
        // Operasi yang membutuhkan satu angka
        else if (['6', '7', '9', '12'].includes(pilihan)) {
            rl.question('Masukkan angka: ', (n) => {
                const num = parseFloat(n);
                hitung(pilihan, num); // Hitung hasil untuk operasi satu angka
                kalkulator(); // Tampilkan kembali menu
            });
        } 
        else {
            console.log('Pilihan tidak valid!'); // Menangkap input tidak valid
            kalkulator(); // Tampilkan kembali menu
        }
    });
}

// Fungsi untuk menghitung hasil sesuai pilihan
function hitung(pilihan, a, b = null) {
    try {
        switch(pilihan) {
            case '1':
                console.log(`Hasil: ${tambah(a, b)}`);
                break;
            case '2':
                console.log(`Hasil: ${kurang(a, b)}`);
                break;
            case '3':
                console.log(`Hasil: ${kali(a, b)}`);
                break;
            case '4':
                console.log(`Hasil: ${bagi(a, b)}`);
                break;
            case '5':
                console.log(`Hasil: ${pangkat(a, b)}`);
                break;
            case '6':
                console.log(`Hasil: ${faktorial(a)}`);
                break;
            case '7':
                console.log(`Bilangan prima? ${isPrima(a) ? 'Ya' : 'Tidak'}`);
                break;
            case '8':
                console.log(`Hasil: ${modulus(a, b)}`);
                break;
            case '9':
                console.log(`Hasil: ${absolut(a)}`);
                break;
            case '10':
                console.log(`Hasil: ${maksimum(a, b)}`);
                break;
            case '11':
                console.log(`Hasil: ${minimum(a, b)}`);
                break;
            case '12':
                console.log(`Hasil: ${bulatkan(a)}`);
                break;
        }
    } catch (error) {
        console.log(`Error: ${error.message}`); // Menangkap dan menampilkan error
    }
}

console.log('Selamat datang di Kalkulator Sederhana!');
kalkulator(); // Memulai kalkulator
