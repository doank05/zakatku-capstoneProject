/* eslint-disable no-use-before-define */
const ZakatProfesi = {
  async render() {
    return `
      <section id="kategori-zakat" class="kategori-zakat">
      <h1 class="header-kategori-zakat" tabindex="0">ZAKAT PROFESI</h1>
      <div class="description-zakat" id="description-zakat">
        <p tabindex="0">Zakat penghasilan atau yang dikenal juga sebagai zakat profesi; zakat pendapatan adalah bagian dari zakat mal yang wajib dikeluarkan atas harta yang
         berasal dari pendapatan / penghasilan rutin dari pekerjaan yang tidak melanggar syariah.
         <br tabindex="0">Zakat penghasilan dikeluarkan dari harta yang dimiliki pada saat pendapatan/ penghasilan diterima oleh seseorang yang sudah dikatakan wajib zakat. Lalu siapa orang yang wajib menunaikan zakat penghasilan?
         <br tabindex="0">Seseorang dikatakan sudah wajib menunaikan zakat penghasilan apabila ia penghasilannya telah mencapai nishab zakat pendapatan sebesar 85 gram emas per tahun.</p>
      </div> 
      </section>
    
      <section id="feature-hitung" class="feature-hitung">
        <h1 class="header-hitung-zakat" tabindex="0">HITUNG ZAKAT</h1>
        <div class="form">
          <form class="form-zakat">
          <input type="date" id="date" name="date" placeholder="1-Desember-2021">
          <input type="number" id="idJumlahPenghasilan" name="idJumlahPenghasilan" placeholder="Jumlah Penghasilan 1 Tahun"><br>
          </form>
        </div>
        <div class="btn-hitung-zakat">
          <button class="btn-hitung-zakat" id="btn-hitung-zakat" >Hitung</button>
        </div>
      </section>

      <section id="feature-hasil" class="feature-hasil">
      <div class="item-hasil">
        <h3 tabindex="0">Zakat Profesi</h3>
        <h4 tabindex="0">Tanggal     : <span id="tanggal" ></span></h4>
        <h2 tabindex="0">Jumlah Penghasilan : <span id="hasilTabungan"></span></h3>
        <h2 tabindex="0">Total Zakat : <span id="hasil"></span></h3>
      </div>
    </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    document.getElementById('btn-hitung-zakat').addEventListener('click', hitungZakat);

    const syarat = 85 * 821352;

    function hitungZakat() {
      const jumlahPenghasilan = document.getElementById('idJumlahPenghasilan').value;
      const date = document.getElementById('date').value;

      let zakat;
      const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      });
      if (jumlahPenghasilan >= syarat) {
        zakat = 0.025 * jumlahPenghasilan;
        document.getElementById('hasil').innerHTML = `${formatter.format(zakat)} /Tahun`;
      } else {
        zakat = 'Tidak mencukupi syarat nisab';
        document.getElementById('hasil').innerHTML = zakat;
      }
      document.getElementById('tanggal').innerHTML = date;
      document.getElementById('hasilTabungan').innerHTML = `${formatter.format(jumlahPenghasilan)} /Tahun`;

      const dataObject = {
        jenisZakat: 'Zakat Pertanian',
        tanggalZakat: date,
        jumlahZakat: jumlahPenghasilan,
        totalZakat: zakat,
      };
      const changeToObject = JSON.stringify(dataObject);
      console.log(changeToObject);
      window.localStorage.setItem('data_hasil_zakatProfesi', changeToObject);
    }
  },
};

export default ZakatProfesi;
