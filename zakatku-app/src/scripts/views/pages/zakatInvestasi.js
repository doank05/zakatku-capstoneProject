/* eslint-disable no-use-before-define */
const ZakatInvestasi = {
  async render() {
    return `
    <section id="kategori-zakat" class="kategori-zakat">
    <h1 class="header-kategori-zakat" tabindex="0">ZAKAT INVESTASI</h1>
    <div class="description-zakat" id="description-zakat">
      <p tabindex="0">Zakat Investasi dalam istilah fiqih biasa disebut zakat “Almustaghillat”. Zakat tersebut dikenakan terhadap harta yang diperoleh dari hasil investasi. Diantara bentuk usaha yang termasuk investasi seperti bangunan atau kantor yang disewakan, saham, rental mobil, rumah kontrakan, dll.
      <br tabindex="0">Para ulama kontemporer, seperti Abu Zahrah, Abdul Wahab Kholaf dan Yusuf Qordhowi, menganalogikannya ke dalam zakat pertanian yaitu dikeluarkan saat menghasilkan dari hasilnya tanpa memasukkan unsur modal, dengan tarif 5% untuk penghasilan kotor dan 10% untuk penghasilan bersih.
      </p>
    </div> 
    </section>
  
    <section id="feature-hitung" class="feature-hitung">
      <h1 class="header-hitung-zakat" tabindex="0">HITUNG ZAKAT</h1>
      <div class="form">
        <form class="form-zakat">
        <input type="date" id="date" name="date" placeholder="1-Desember-2021">
        <input type="number" id="idJumlahPenghasilan" name="idJumlahPenghasilan" placeholder="Jumlah Keuntungan Investasi / Bulan">
        <div class="radio-input">
          <div class="radio-input-first">
            <label>Penghasilan Kotor</label>
            <input type="radio" id="kotor" name="penghasilan" value="kotor">
          </div>
          <div class="radio-input-second">
            <label tabindex="0">Penghasilan Bersih</label>
            <input type="radio" id="bersih" name="penghasilan" value="bersih">
          </div>
        </div>
        </form>
      </div>
      <div class="btn-hitung-zakat">
        <button class="btn-hitung-zakat" id="btn-hitung-zakat" tabindex="0">Hitung</button>
      </div>
    </section>

    <section id="feature-hasil" class="feature-hasil">
      <div class="item-hasil">
        <h3 tabindex="0">Zakat Investasi</h3>
        <h4 tabindex="0">Tanggal     : <span id="tanggal" ></span></h4>
        <h2 tabindex="0">Jumlah Keuntungan : <span id="hasilTabungan"></span></h3>
        <h2 tabindex="0">Total Zakat : <span id="hasil"></span></h3>
      </div>
    </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    document.getElementById('btn-hitung-zakat').addEventListener('click', hitungZakat);
    const syaratInvestasi = 520 * 10000;

    function hitungZakat() {
      const jumlahPenghasilan = document.getElementById('idJumlahPenghasilan').value;
      const penghasilan = document.querySelector('input[name="penghasilan"]:checked').value;
      const date = document.getElementById('date').value;
      let zakat;
      const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      });
      if (penghasilan === 'bersih') {
        if (jumlahPenghasilan >= syaratInvestasi) {
          zakat = 0.1 * jumlahPenghasilan;
          document.getElementById('hasil').innerHTML = `${formatter.format(zakat)} /Bulan`;
        } else {
          zakat = 'Belum mencukupi nisab ';
          document.getElementById('hasil').innerHTML = zakat;
        }
      } else if (penghasilan === 'kotor') {
        if (jumlahPenghasilan >= syaratInvestasi) {
          zakat = 0.05 * jumlahPenghasilan;
          document.getElementById('hasil').innerHTML = `${formatter.format(zakat)} /Bulan`;
        } else {
          zakat = 'Belum mencukupi nisab ';
          document.getElementById('hasil').innerHTML = zakat;
        }
      }
      document.getElementById('tanggal').innerHTML = date;
      document.getElementById('hasilTabungan').innerHTML = `${formatter.format(jumlahPenghasilan)} /Bulan`;

      const dataObject = {
        jenisZakat: 'Zakat Investasi',
        tanggalZakat: date,
        jumlahZakat: jumlahPenghasilan,
        totalZakat: zakat,
      };
      const changeToObject = JSON.stringify(dataObject);
      console.log(changeToObject);
      window.localStorage.setItem('data_hasil_zakatInvestasi', changeToObject);
    }
  },
};

export default ZakatInvestasi;
