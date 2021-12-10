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
        <input type="radio" id="dialiriAlam" name="cara" value="dialiriAlam"><label>Dialiri dengan air hujan, sungai atau mata air</label>
        <input type="radio" id="dialiriAlat" name="cara" value="dialiriAlat"><label>dialiri dengan cara disiram (menggunakan alat)</label>
        <input type="number" id="idJumlahPanen" name="idJumlahPanen" placeholder="Jumlah Hasil Panen xx Kg setara beras"><br>
        </form>
      </div>
      <div class="btn-hitung-zakat">
        <button class="btn-hitung-zakat" id="btn-hitung-zakat" >Hitung</button>
      </div>
    </section>

    <section id="feature-hasil" class="feature-hasil">
      <div class="item-hasil">
        <h4>Tanggal     : <span id="tanggal" ></span></h4>
        <h2>Total Tabungan : <span id="hasilTabungan"></span></h3>
        <h2>Total Zakat : <span id="hasil"></span></h3>
      </div>
    </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    document.getElementById('btn-hitung-zakat').addEventListener('click', hitungZakat);
    const syaratPanen = 653;

    function hitungZakat() {
      const jumlahPanen = document.getElementById('idJumlahPanen').value;
      const cara = document.querySelector('input[name="cara"]:checked').value;
      const date = document.getElementById('date').value;
      let zakat;
      if (cara === 'dialiriAlam') {
        if (jumlahPanen >= syaratPanen) {
          zakat = 0.1 * jumlahPanen;
          document.getElementById('hasil').innerHTML = `${zakat}Kg`;
        } else {
          zakat = 'Belum mencukupi nisab panen';
          document.getElementById('hasil').innerHTML = zakat;
        }
      } else if (cara === 'dialiriAlat') {
        if (jumlahPanen >= syaratPanen) {
          zakat = 0.05 * jumlahPanen;
          document.getElementById('hasil').innerHTML = `${zakat}Kg`;
        } else {
          zakat = 'Belum mencukupi nisab panen';
          document.getElementById('hasil').innerHTML = zakat;
        }
      }
      document.getElementById('tanggal').innerHTML = date;
      document.getElementById('hasilTabungan').innerHTML = jumlahPanen;
    }
  },
};

export default ZakatPertanian;
