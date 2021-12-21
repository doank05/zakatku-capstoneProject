/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
const ZakatEmas = {
  async render() {
    return `
    <section id="kategori-zakat" class="kategori-zakat">
    <h1 class="header-kategori-zakat" tabindex="0">ZAKAT EMAS</h1>
    <div class="description-zakat" id="description-zakat">
      <p tabindex="0">Zakat emas, perak, atau logam mulia adalah zakat yang ditunaikan atas emas, perak dan logam mulia lainnya yang telah mencapai nisab. Sudah seharusnya ditunaikan zakatnya. Tentunya dengan dasar syariat yang benar 
      agar jangan sampai mengambil yang bukan haknya atau menahan yang sudah menjadi hak Allah SWT. Syarat Emas :</p>
      <ul class="list-syarat-emas">
      <li tabindex="0">Mencapai haul satu tahun</li>
      <li tabindex="0">Mencapai nisab 85 gram emas murni</li>
      <li tabindex="0">Bebas dari hutang yang menyebabkan kurang dari nisab</li>
      </ul>
    </div> 
    </section>
  
    <section id="feature-hitung" class="feature-hitung">
      <h1 class="header-hitung-zakat" tabindex="0">HITUNG ZAKAT</h1>
      <div class="form">
        <form class="form-zakat">
        <input type="date" id="date" name="date" placeholder="1-Desember-2021"><br>
        <input type="text" id="idJumlahEmas" name="idJumlahEmas" placeholder="Jumlah Emas = xx gram"><br>
        </form>
      </div>
      <div class="btn-hitung-zakat">
        <button class="btn-hitung-zakat" id="btn-hitung-zakat" tabindex="0">Hitung</button>
      </div>
    </section>

    <section id="feature-hasil" class="feature-hasil">
      <div class="item-hasil">
        <h3 class="jenis_zakat" tabindex="0">Zakat Emas</h3>
        <h4 class="tanggal_zakat">Tanggal     : <span id="tanggal" ></span></h4>
        <h2 class="jumlah_zakat">Jumlah Emas : <span id="hasilTabungan"></span></h3>
        <h2 class="total_zakat">Total Zakat : <span id="hasil"></span></h3>
      </div>
    </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    document.getElementById('btn-hitung-zakat').addEventListener('click', hitungZakat);

    const syarat = 85;

    function hitungZakat() {
      const jumlahEmas = document.getElementById('idJumlahEmas').value;
      const date = document.getElementById('date').value;
      let zakat;
      if (jumlahEmas >= syarat) {
        zakat = 0.025 * jumlahEmas;
      } else {
        zakat = 'Tidak mencukupi syarat nisab 85';
      }
      document.getElementById('hasil').innerHTML = `${zakat} Gram`;
      document.getElementById('tanggal').innerHTML = date;
      document.getElementById('hasilTabungan').innerHTML = `${jumlahEmas} Gram`;

      const dataObject = {
        jenisZakat: 'Zakat Emas',
        tanggalZakat: date,
        jumlahZakat: jumlahEmas,
        totalZakat: zakat,
      };
      const changeToObject = JSON.stringify(dataObject);
      console.log(changeToObject);
      window.localStorage.setItem('data_hasil_zakatEmas', changeToObject);
    }
  },
};

export default ZakatEmas;
