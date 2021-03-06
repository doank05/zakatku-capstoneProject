/* eslint-disable no-use-before-define */
const ZakatPerak = {
  async render() {
    return `
    <section id="kategori-zakat" class="kategori-zakat">
    <h1 class="header-kategori-zakat" tabindex="0">ZAKAT PERAK</h1>
    <div class="description-zakat" id="description-zakat">
      <p tabindex="0">Zakat emas, perak, atau logam mulia adalah zakat yang ditunaikan atas emas, perak dan logam mulia lainnya yang telah mencapai nisab. Sudah seharusnya ditunaikan zakatnya. Tentunya dengan dasar syariat yang benar 
      agar jangan sampai mengambil yang bukan haknya atau menahan yang sudah menjadi hak Allah SWT. Syarat Emas :</p>
      <ul class="list-syarat-emas">
      <li tabindex="0">Mencapai haul satu tahun</li>
      <li tabindex="0">Mencapai nisab zakat perak 595 gr perak</li>
      <li tabindex="0">Bebas dari hutang yang menyebabkan kurang dari nisab</li>
      </ul>
    </div> 
    </section>
  
    <section id="feature-hitung" class="feature-hitung">
      <h1 class="header-hitung-zakat" tabindex="0">HITUNG ZAKAT</h1>
      <div class="form">
        <form class="form-zakat">
        <input type="date" id="date" name="date" placeholder="1-Desember-2021"><br>
        <input type="text" id="idJumlahPerak" name="idJumlahPerak" placeholder="Jumlah Perak = xx Gram"><br>
        </form>
      </div>
      <div class="btn-hitung-zakat">
        <button class="btn-hitung-zakat" id="btn-hitung-zakat"  tabindex="0">Hitung</button>
      </div>
    </section>

    <section id="feature-hasil" class="feature-hasil">
      <div class="item-hasil">
        <h3 tabindex="0">Zakat Perak</h3>
        <h4 tabindex="0">Tanggal     : <span id="tanggal" ></span></h4>
        <h2 tabindex="0">Jumlah Perak : <span id="hasilTabungan"></span></h3>
        <h2 tabindex="0">Total Zakat : <span id="hasil"></span></h3>
      </div>
    </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    document.getElementById('btn-hitung-zakat').addEventListener('click', hitungZakat);

    const syarat = 595;

    function hitungZakat() {
      const jumlahPerak = document.getElementById('idJumlahPerak').value;
      const date = document.getElementById('date').value;
      let zakat;
      if (jumlahPerak >= syarat) {
        zakat = 0.025 * (jumlahPerak * 10248);
      } else {
        zakat = 'Tidak mencukupi syarat nisab 595';
      }
      document.getElementById('hasil').innerHTML = `${zakat} Gram`;
      document.getElementById('tanggal').innerHTML = date;
      document.getElementById('hasilTabungan').innerHTML = `${jumlahPerak} Gram`;

      const dataObject = {
        jenisZakat: 'Zakat Perak',
        tanggalZakat: date,
        jumlahZakat: jumlahPerak,
        totalZakat: zakat,
      };

      const changeToObject = JSON.stringify(dataObject);
      console.log(changeToObject);
      window.localStorage.setItem('data_hasil_zakatPerak', changeToObject);
    }
  },
};

export default ZakatPerak;
