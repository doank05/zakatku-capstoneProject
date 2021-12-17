/* eslint-disable no-use-before-define */
const ZakatPerak = {
  async render() {
    return `
    <section id="kategori-zakat" class="kategori-zakat">
    <h1 class="header-kategori-zakat">ZAKAT PERAK</h1>
    <div class="description-zakat" id="description-zakat">
      <p>Zakat emas, perak, atau logam mulia adalah zakat yang ditunaikan atas emas, perak dan logam mulia lainnya yang telah mencapai nisab. Sudah seharusnya ditunaikan zakatnya. Tentunya dengan dasar syariat yang benar 
      agar jangan sampai mengambil yang bukan haknya atau menahan yang sudah menjadi hak Allah SWT. Syarat Emas :</p>
      <ul class="list-syarat-emas">
      <li>Mencapai haul satu tahun</li>
      <li>Mencapai nisab zakat perak 595 gr perak</li>
      <li>Bebas dari hutang yang menyebabkan kurang dari nisab</li>
      </ul>
    </div> 
    </section>
  
    <section id="feature-hitung" class="feature-hitung">
      <h1 class="header-hitung-zakat">HITUNG ZAKAT</h1>
      <div class="form">
        <form class="form-zakat">
        <input type="date" id="date" name="date" placeholder="1-Desember-2021"><br>
        <input type="text" id="idJumlahPerak" name="idJumlahPerak" placeholder="Jumlah Perak = xx Gram"><br>
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

    const syarat = 595;

    function hitungZakat() {
      const jumlahPerak = document.getElementById('idJumlahPerak').value;
      const date = document.getElementById('date').value;
      let zakat;
      if (jumlahPerak >= syarat) {
        zakat = 0.025 * (jumlahPerak * 10248);
      } else {
        zakat = 'Tidak mencukupi syarat nisab 595 Gram Perak';
      }
      document.getElementById('hasil').innerHTML = zakat;
      document.getElementById('tanggal').innerHTML = date;
      document.getElementById('hasilTabungan').innerHTML = jumlahPerak;
    }
  },
};

export default ZakatPerak;
