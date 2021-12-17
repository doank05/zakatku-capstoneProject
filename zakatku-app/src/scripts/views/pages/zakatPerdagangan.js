/* eslint-disable no-use-before-define */
const ZakatPerdagangan = {
  async render() {
    return `
    <section id="kategori-zakat" class="kategori-zakat">
    <h1 class="header-kategori-zakat">ZAKAT PERDAGANGAN</h1>
    <div class="description-zakat" id="description-zakat">
      <p>Zakat perdagangan adalah zakat yang dikeluarkan dari harta niaga, sedangkan harta niaga adalah harta atau aset yang diperjualbelikan dengan maksud untuk mendapatkan keuntungan. Dengan demikian maka dalam harta niaga harus ada 2 motivasi: Motivasi untuk berbisnis (diperjualbelikan) dan motivasi mendapatkan keuntungan.
      <br>Harta perdagangan yang dikenakan zakat dihitung dari asset lancar usaha dikurangi hutang yang berjangka pendek (hutang yang jatuh tempo hanya satu tahun). Jika selisih dari asset lancar dan hutang tersebut sudah mencapai nisab, maka wajib dibayarkan zakatnya.

      Nisab zakat perdagangan senilai 85 gram emas dengan tarif zakat sebesar 2,5% dan sudah mencapai satu tahun (haul). Berikut cara menghitung zakat perdagangan:</p>
    </div> 
    </section>
  
    <section id="feature-hitung" class="feature-hitung">
      <h1 class="header-hitung-zakat">HITUNG ZAKAT</h1>
      <div class="form">
        <form class="form-zakat">
        <input type="date" id="date" name="date" placeholder="1-Desember-2021"><br>
        <input type="number" id="idJumlahKeuntungan" name="idJumlahKeuntungan" placeholder="Jumlah Keuntungan"><br>
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

    const syarat = 85 * 821352;

    function hitungZakat() {
      const jumlahKeuntungan = document.getElementById('idJumlahKeuntungan').value;
      const date = document.getElementById('date').value;
      let zakat;
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'IDR',
      });
      if (jumlahKeuntungan >= syarat) {
        zakat = 0.025 * jumlahKeuntungan;
        document.getElementById('hasil').innerHTML = formatter.format(zakat);
      } else {
        zakat = 'Tidak mencukupi syarat nisab';
        document.getElementById('hasil').innerHTML = zakat;
      }
      document.getElementById('tanggal').innerHTML = date;
      document.getElementById('hasilTabungan').innerHTML = jumlahKeuntungan;
    }
  },
};

export default ZakatPerdagangan;
