const ZakatPertanian = {
  async render() {
    return `
    <section id="kategori-zakat" class="kategori-zakat">
    <h1 class="header-kategori-zakat">ZAKAT PERTANIAN</h1>
    <div class="description-zakat" id="description-zakat">
      <p>Zakat hasil pertanian merupakan salah satu jenis Zakat Maal, objeknya meliputi hasil tumbuh-tumbuhan atau tanaman 
      yang bernilai ekonomis seperti biji-bijian, umbi-umbian, sayur-mayur, buah-buahan dan lain-lain.
      <br>Diriwayatkan dari Ibnu umar RA, ia berkata: Nabi SAW bersabda: “Terhadap tanaman yang disirami hujan dari langit dan dari mata air atau yang digenangi air selokan, dikeluarkan zakat sepersepuluhnya, sedangkan terhadap tanaman yang diairi dengan sarana pengairan seperduapuluhnya” (HR. Bukhori dan Ahmad).</p>
    </div> 
    </section>
  
    <section id="feature-hitung" class="feature-hitung">
      <h1 class="header-hitung-zakat">HITUNG ZAKAT</h1>
      <div class="form">
        <form class="form-zakat">
        <input type="date" id="date" name="date" placeholder="1-Desember-2021">
        <input type="radio" id="alam" name="dialiri" value="alam"><label for="sapi">Dialiri dengan air hujan, sungai atau mata air</label>
        <input type="radio" id="buatan" name="dialiri" value="alam"><label for="sapi">dialiri dengan cara disiram (menggunakan alat)</label>
        
        <input type="number" id="idJumlahPanen" name="idJumlahPanen" placeholder="Jumlah Panen"><br>
        </form>
      </div>
      <div class="btn-hitung-zakat">
        <button class="btn-hitung-zakat" id="btn-hitung-zakat" >Hitung</button>
      </div>
    </section>

    <section id="feature-hasil" class="feature-hasil">
      
    </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default ZakatPertanian;
