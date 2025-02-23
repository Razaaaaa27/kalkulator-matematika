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
} = require('./solution');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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

function kalkulator() {
    tampilkanMenu();
    
    rl.question('Pilih operasi (0-12): ', (pilihan) => {
        if (pilihan === '0') {
            console.log('Terima kasih telah menggunakan kalkulator!');
            rl.close();
            return;
        }

        // Operasi yang membutuhkan dua angka
        if (['1', '2', '3', '4', '5', '8', '10', '11'].includes(pilihan)) {
            rl.question('Masukkan angka pertama: ', (a) => {
                rl.question('Masukkan angka kedua: ', (b) => {
                    const num1 = parseFloat(a);
                    const num2 = parseFloat(b);
                    hitung(pilihan, num1, num2);
                    kalkulator();
                });
            });
        } 
        // Operasi yang membutuhkan satu angka
        else if (['6', '7', '9', '12'].includes(pilihan)) {
            rl.question('Masukkan angka: ', (n) => {
                const num = parseFloat(n);
                hitung(pilihan, num);
                kalkulator();
            });
        } 
        else {
            console.log('Pilihan tidak valid!');
            kalkulator();
        }
    });
}
