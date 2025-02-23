// penjumlahan
function tambah(a, b) {
    return a + b;
}

// pengurangan
function kurang(a, b) {
    return a - b;
}

// perkalian
function kali(a, b) {
    return a * b;
}

// pembagian 
function bagi(a, b) {
    if (b === 0) {
        throw new Error("Tidak bisa membagi dengan nol");
    }
    return a / b;
}

// pangkat
function pangkat(a, b) {
    return Math.pow(a, b);
}

// faktorial
function faktorial(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    return n * faktorial(n - 1);
}

// pengecekan bilangan prima
function isPrima(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

// modulus
function modulus(a, b) {
    return a % b;
}

// nilai absolut
function absolut(n) {
    return Math.abs(n);
}

// nilai maksimum
function maksimum(a, b) {
    return Math.max(a, b);
}

// nilai minimum
function minimum(a, b) {
    return Math.min(a, b);
}

// pembulatan
function bulatkan(n) {
    return Math.round(n);
}

module.exports = {
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
};
