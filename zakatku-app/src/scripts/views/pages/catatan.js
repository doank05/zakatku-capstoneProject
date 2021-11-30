const Catatan = {
  async render() {
    return `
    <div class="head-page">
      <h1>CATATAN</h1>
      <p>Penyimpanan Riwayat Perhitungan Zakat</p>
    </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Catatan;
