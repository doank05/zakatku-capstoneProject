const Zakat = {
  async render() {
    return `
    <section id="jenis-zakat" class="jenis-zakat">
      <h1 class="header-jenis-zakat" tabindex="0">PILIH JENIS ZAKAT YANG AKAN DIHITUNG</h1>
      <div id="navigation-zakat" class="navigation-zakat">
        <div class="zakat-tabungan zakat">
          <a href="#/zakat-tabungan" tabindex="0">ZAKAT TABUNGAN</a>
        </div>
        <div class="zakat-emas zakat">
          <a href="#/zakat-emas" tabindex="0">ZAKAT EMAS</a>
        </div>
        <div class="zakat-perak zakat">
          <a href="#/zakat-perak" tabindex="0">ZAKAT PERAK</a>
        </div>
        <div class="zakat-ternak zakat">
          <a href="#/zakat-ternak" tabindex="0">ZAKAT TERNAK</a>
        </div>
        <div class="zakat-perdagangan zakat">
          <a href="#/zakat-perdagangan" tabindex="0">ZAKAT PERDAGANGAN</a>
        </div>
        <div class="zakat-pertanian zakat">
          <a href="#/zakat-pertanian" tabindex="0">ZAKAT PERTANIAN</a>
        </div>
        <div class="zakat-pertanian zakat">
          <a href="#/zakat-profesi" tabindex="0">ZAKAT PROFESI</a>
        </div>
        <div class="zakat-pertanian zakat">
          <a href="#/zakat-investasi" tabindex="0">ZAKAT INVESTASI</a>
        </div>
        <div class="zakat-rikaz zakat">
          <a href="#/zakat-rikaz" tabindex="0">ZAKAT RIKAZ</a>
        </div>
      </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },

};
export default Zakat;
