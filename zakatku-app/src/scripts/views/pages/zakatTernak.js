/* eslint-disable no-use-before-define */
const ZakatTernak = {
  async render() {
    return `
    <section id="kategori-zakat" class="kategori-zakat">
    <h1 class="header-kategori-zakat">ZAKAT PERAK</h1>
    <div class="description-zakat" id="description-zakat">
      <p>Zakat hasil ternak meliputi hasil dari peternakan hewan baik besar sedang dan kecil. Perhitungan zakat untuk masing-masing tipe hewan ternak, baik nisab maupun kadarnya berbeda-beda dan sifatnya bertingkat. 
      Sedangkan haulnya, yakni satu tahun untuk tiap hewan.</p>
      <ul class="list-syarat-emas">
      <li>Sapi/Kerbau nisabnya ialah 30 ekor</li>
      <li>Domba/Kambing nisabnya ialah 40 ekor</li>
      <li>Unta nisabnya ialah 5 ekor</li>
      </ul>
    </div> 
    </section>
  
    <section id="feature-hitung" class="feature-hitung">
      <h1 class="header-hitung-zakat">HITUNG ZAKAT</h1>
      <div class="form">
        <form class="form-zakat">
        <input type="date" id="date" name="date" placeholder="1-Desember-2021"><br>
        <div class="radio-input">
          <div class="radio-input-first">
            <label for="sapi">Sapi/Kerbau</label>
            <input type="radio" id="sapi" name="hewan" value="sapi">
          </div>
          <div class="radio-input-second">
            <label for="domba">Domba/Kambing</label>
            <input type="radio" id="domba" name="hewan" value="domba">
            </div>
          <div class="radio-input-third">
            <label for="sapi">Unta</label>
            <input type="radio" id="unta" name="hewan" value="unta">
          </div>
        </div>
        <input type="number" id="idJumlahHewan" name="idJumlahHewan" placeholder="Jumlah Hewan">
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
    const syaratSapi = 30;
    const syaratDomba = 40;
    const syaratUnta = 5;

    function hitungZakat() {
      const jumlahHewan = document.getElementById('idJumlahHewan').value;
      const hewan = document.querySelector('input[name="hewan"]:checked').value;
      const date = document.getElementById('date').value;

      let zakat;
      if (hewan === 'unta') {
        if (jumlahHewan >= syaratUnta) {
          zakat = 'unta';
        } else {
          zakat = 'Belum mencukupi nisab unta';
        }
      } else if (hewan === 'sapi') {
        if (jumlahHewan >= syaratSapi) {
          zakat = 'sapi';
        } else {
          zakat = 'Belum mencukupi nisab sapi';
        }
      } else if (hewan === 'domba') {
        if (jumlahHewan >= syaratDomba) {
          zakat = 'unta';
        } else {
          zakat = 'Belum mencukupi nisab domba';
        }
      }
      document.getElementById('hasil').innerHTML = zakat;
      document.getElementById('tanggal').innerHTML = date;
      document.getElementById('hasilTabungan').innerHTML = jumlahHewan;
    }
  },
};

export default ZakatTernak;
