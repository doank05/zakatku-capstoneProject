/* eslint-disable no-use-before-define */
const ZakatRikaz = {
  async render() {
    return `
    <section id="kategori-zakat" class="kategori-zakat">
    <h1 class="header-kategori-zakat">ZAKAT RIKAZ</h1>
    <div class="description-zakat" id="description-zakat">
      <p>Zakat barang temuan (rikaz) adalah zakat yang wajib dikeluarkan untuk barang yang ditemukan
       terpendam di dalam tanah, atau yang biasa disebut dengan harta karun. Zakat barang temuan tidak 
       mensyaratkan baik haul (lama penyimpanan). Barang temuan yang wajib dizakati hanya yang berupa emas 
       atau perak. Adapun nisabnya (jumlah minimal untuk terkena kewajiban zakat) sesuai nisab emas jika yang ditemukan emas, dan nisab perak jika yang ditemukan perak, 
      sementara kadar zakatnya adalah sebesar seperlima atau 20% dari jumlah harta yang ditemukan.</p>
    </div> 
    </section>
  
    <section id="feature-hitung" class="feature-hitung">
      <h1 class="header-hitung-zakat">HITUNG ZAKAT</h1>
      <div class="form">
        <form class="form-zakat">
        <input type="date" id="date" name="date" placeholder="1-Desember-2021">
        <input type="number" id="idRikaz" name="rikaz" placeholder="Nilai Harta Temuan"><br>
        </form>
      </div>
      <div class="btn-hitung-zakat">
        <button class="btn-hitung-zakat" id="btn-hitung-zakat" >Hitung</button>
      </div>
    </section>

    <section id="feature-hasil" class="feature-hasil">
      <div class="item-hasil">
        <h3>Zakat Rikaz</h3>
        <h4>Tanggal     : <span id="tanggal" ></span></h4>
        <h2>Nilai Harta : <span id="hasilTabungan"></span></h3>
        <h2>Total Zakat : <span id="hasil"></span></h3>
      </div>
    </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    document.getElementById('btn-hitung-zakat').addEventListener('click', hitungZakat);

    function hitungZakat() {
      const rikaz = document.getElementById('idRikaz').value;
      const date = document.getElementById('date').value;

      const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      });
      const zakat = 0.2 * rikaz;
      document.getElementById('hasil').innerHTML = formatter.format(zakat);
      document.getElementById('tanggal').innerHTML = date;
      document.getElementById('hasilTabungan').innerHTML = formatter.format(rikaz);

      const dataObject = {
        jenisZakat: 'Zakat Pertanian',
        tanggalZakat: date,
        jumlahZakat: rikaz,
        totalZakat: zakat,
      };
      const changeToObject = JSON.stringify(dataObject);
      console.log(changeToObject);
      window.localStorage.setItem('data_hasil_zakatRikaz', changeToObject);
    }
  },
};

export default ZakatRikaz;
