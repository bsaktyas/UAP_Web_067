const dataBarang = {
    '001': { nama: 'Barang A', harga: 10000 },
    '002': { nama: 'Barang B', harga: 20000 },
    '003': { nama: 'Barang C', harga: 30000 },
};

function hitungTotalHarga() {
    const kodeBarang = document.getElementById('kodeBarang').value;
    const jumlahBarang = parseInt(document.getElementById('jumlahBarang').value);

    if (kodeBarang in dataBarang) {
        const totalHarga = dataBarang[kodeBarang].harga * jumlahBarang;
        alert(`Total Harga untuk ${jumlahBarang} ${dataBarang[kodeBarang].nama} adalah Rp ${totalHarga}`);

        const uangMasuk = parseFloat(prompt('Masukkan Jumlah Uang:'));

        if (!isNaN(uangMasuk)) {
            if (uangMasuk >= totalHarga) {
                const kembalian = uangMasuk - totalHarga;
                alert(`Kembalian Anda adalah Rp ${kembalian}`);
            } else {
                alert('Duit Anda kurang.');
            }
        } else {
            alert('Input uang tidak valid');
        }
    } else {
        alert('Kode barang tidak valid');
    }
}