const Beranda = {
  async render() {
    return `
      <section id="sheet-one" class="sheet-one">
        <div class="jumbotron">
          <img src="jumbotron1-crop.jpg" alt="image-jumbotron">
        </div>
        <div class="feature">
          <div class="feature-type">
            <img src="edukasi-icon.png" alt="icon-edukasi">
            <h2>EDUKASI</h2>
            <p>Pelajari berbagai macam jenis zakat dan aturan zakat sesuai dengan aturan.</p>
          </div>
          <div class="feature-type">
            <img src="kalkulator-icon.png" alt="icon-kalkulator">
            <h2>PERHITUNGAN</h2>
            <p>Hitung zakat yang harus dikeluarkan dengan fitur dari wesite ini.</p>
          </div>
          <div class="feature-type">
            <img src="catatan-icon.png" alt="icon-catatan">
            <h2>CATATAN</h2>
            <p>Simpan riwayat perhitungan zakatmu agar dapat dikelola dengan baik.</p>
          </div>
        </div>
      </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Beranda;
