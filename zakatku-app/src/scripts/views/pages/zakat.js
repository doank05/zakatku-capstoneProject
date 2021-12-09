const Zakat = {
  async render() {
    return `
    <section id="jenis-zakat" class="jenis-zakat">
      <h1 class="header-jenis-zakat">PILIH JENIS ZAKAT YANG AKAN DIHITUNG</h1>
      <div id="navigation-zakat" class="navigation-zakat">
        <div class="zakat-tabungan zakat">
          <a href="#/zakat-tabungan">ZAKAT TABUNGAN</a>
        </div>
        <div class="zakat-emas zakat">
          <a href="#/zakat-emas">ZAKAT EMAS</a>
        </div>
        <div class="zakat-perak zakat">
          <a href="#/zakat-perak">ZAKAT PERAK</a>
        </div>
        <div class="zakat-ternak zakat">
          <a href="#/zakat-ternak">ZAKAT TERNAK</a>
        </div>
        <div class="zakat-perdagangan zakat">
          <a href="#/zakat-perdagangan">ZAKAT PERDAGANGAN</a>
        </div>
        <div class="zakat-pertanian zakat">
          <a href="#/zakat-pertanian">ZAKAT PERTANIAN</a>
        </div>
        <div class="zakat-pertanian zakat">
          <a href="#/zakat-profesi">ZAKAT PROFESI</a>
        </div>
        <div class="zakat-pertanian zakat">
          <a href="#/zakat-investasi">ZAKAT INVESTASI</a>
        </div>
        <div class="zakat-rikaz zakat">
          <a href="#/zakat-rikaz">ZAKAT RIKAZ</a>
        </div>
        <div class="zakat-try zakat">
          <a href="#/zakat-try">ZAKAT TRY</a>
        </div>
      </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },

};
export default Zakat;
