/* eslint-disable no-use-before-define */
const ZakatTernak = {
  async render() {
    return `
    <section id="kategori-zakat" class="kategori-zakat">
    <h1 class="header-kategori-zakat" tabindex="0">ZAKAT PERAK</h1>
    <div class="description-zakat" id="description-zakat">
      <p tabindex="0">Zakat hasil ternak meliputi hasil dari peternakan hewan baik besar sedang dan kecil. Perhitungan zakat untuk masing-masing tipe hewan ternak, baik nisab maupun kadarnya berbeda-beda dan sifatnya bertingkat. 
      Sedangkan haulnya, yakni satu tahun untuk tiap hewan.</p>
      <ul class="list-syarat-emas">
      <li tabindex="0">Sapi/Kerbau nisabnya ialah 30 ekor</li>
      <li tabindex="0">Domba/Kambing nisabnya ialah 40 ekor</li>
      <li tabindex="0">Unta nisabnya ialah 5 ekor</li>
      </ul>
    </div> 
    </section>
  
    <section id="feature-hitung" class="feature-hitung">
      <h1 class="header-hitung-zakat" tabindex="0">HITUNG ZAKAT</h1>
      <div class="form">
        <form class="form-zakat">
        <input type="date" id="date" name="date" placeholder="1-Desember-2021"><br>
        <div class="radio-input">
          <div class="radio-input-first">
            <label for="sapi" tabindex="0">Sapi/Kerbau</label>
            <input type="radio" id="sapi" name="hewan" value="sapi">
          </div>
          <div class="radio-input-second">
            <label for="domba" tabindex="0">Domba/Kambing</label>
            <input type="radio" id="domba" name="hewan" value="domba">
            </div>
          <div class="radio-input-third">
            <label for="sapi" tabindex="0">Unta</label>
            <input type="radio" id="unta" name="hewan" value="unta">
          </div>
        </div>
        <input type="number" id="idJumlahHewan" name="idJumlahHewan" placeholder="Jumlah Hewan">
        </form>
      </div>
      <div class="btn-hitung-zakat">
        <button class="btn-hitung-zakat" id="btn-hitung-zakat" tabindex="0">Hitung</button>
      </div>
    </section>

    <section id="feature-hasil" class="feature-hasil">
      <div class="item-hasil">
        <h3 tabindex="0">Zakat Ternak</h3>
        <h4 tabindex="0">Tanggal     : <span id="tanggal" ></span></h4>
        <h2 tabindex="0">Jumlah Hewan : <span id="hasilTabungan"></span></h3>
        <h2 tabindex="0">Total Zakat : <span id="hasil"></span></h3>
      </div>
    </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    document.getElementById('btn-hitung-zakat').addEventListener('click', hitungZakat);

    function hitungZakat() {
      const jumlahHewan = document.getElementById('idJumlahHewan').value;
      const hewan = document.querySelector('input[name="hewan"]:checked').value;
      const date = document.getElementById('date').value;

      let zakat;
      if (hewan === 'unta') {
        if (jumlahHewan >= 5 && jumlahHewan < 10) {
          zakat = '1 ekor kambing umur 2 tahun, atau 1 ekor domba umur 1 tahun';
        } else if (jumlahHewan >= 10 && jumlahHewan < 15) {
          zakat = '2 ekor kambing umur 2 tahun, atau 2 ekor domba umur 1 tahun';
        } else if (jumlahHewan >= 15 && jumlahHewan < 20) {
          zakat = '3 ekor kambing umur 2 tahun, atau 3 ekor domba umur 1 tahun';
        } else if (jumlahHewan >= 20 && jumlahHewan < 25) {
          zakat = '4 ekor kambing umur 2 tahun, atau 4 ekor domba umur 1 tahun';
        } else if (jumlahHewan >= 25 && jumlahHewan < 36) {
          zakat = '1 ekor unta betina umur 1 tahun';
        } else if (jumlahHewan >= 36 && jumlahHewan < 46) {
          zakat = '1 ekor unta betina umur 2 tahun';
        } else if (jumlahHewan >= 46 && jumlahHewan < 61) {
          zakat = '1 ekor unta betina umur 3 tahun';
        } else if (jumlahHewan >= 61 && jumlahHewan < 76) {
          zakat = '1 ekor unta betina umur 4 tahun';
        } else if (jumlahHewan >= 76 && jumlahHewan < 91) {
          zakat = '2 ekor unta betina umur 2 tahun';
        } else if (jumlahHewan >= 91 && jumlahHewan < 121) {
          zakat = '2 ekor unta betina umur 3 tahun';
        } else if (jumlahHewan >= 121 && jumlahHewan < 140) {
          zakat = '3 ekor kambing umur 2 tahun, atau 3 ekor domba umur 1 tahun';
        } else if (jumlahHewan >= 140) {
          zakat = 'Jika ternak sudah mencapai 140 ekor unta,maka cara menghitung ukuran zakatnya adalah, setiap kelipatan 40 ekor, zakatnya 1 ekor unta betina umur 2 tahun, dan setiap kelipatan 50 ekor, zakatnya 1 ekor unta betina umur 3 tahun.';
        } else {
          zakat = 'Jumlah unta tidak mencukupi hisab';
        }
      } else if (hewan === 'sapi') {
        if (jumlahHewan >= 30 && jumlahHewan < 40) {
          zakat = '1 ekor sapi umur 1 tahun';
        } else if (jumlahHewan >= 40 && jumlahHewan < 60) {
          zakat = '1 ekor sapi umur 2 tahun';
        } else if (jumlahHewan >= 60) {
          zakat = 'Setelah ternak sapi mencapai 60 ekor, maka setiap kelipatan 30, zakatnya 1 ekor sapi umur 1 tahun, dan setiap kelipatan 40, zakatnya 1 ekor sapi umur 2 tahun.';
        } else {
          zakat = 'Tidak mencapai hisab';
        }
      } else if (hewan === 'domba') {
        if (jumlahHewan >= syaratDomba) {
          zakat = 'domba';
        } else {
          zakat = 'Belum mencukupi nisab domba';
        }
      }
      document.getElementById('hasil').innerHTML = zakat;
      document.getElementById('tanggal').innerHTML = date;
      document.getElementById('hasilTabungan').innerHTML = `${jumlahHewan} ${zakat}`;

      const dataObject = {
        jenisZakat: 'Zakat Emas',
        tanggalZakat: date,
        jumlahZakat: jumlahHewan,
        totalZakat: zakat,
      };
      const changeToObject = JSON.stringify(dataObject);
      console.log(changeToObject);
      window.localStorage.setItem('data_hasil_zakatTernak', changeToObject);
    }
  },
};

export default ZakatTernak;
