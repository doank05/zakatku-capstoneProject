/* eslint-disable no-use-before-define */
const ZakatTabungan = {
  async render() {
    return `
    <section id="kategori-zakat" class="kategori-zakat">
    <h1 class="header-kategori-zakat" tabindex="0">ZAKAT TABUNGAN</h1>
    <div class="description-zakat" id="description-zakat">
      <p tabindex="0">Seperti halnya jenis harta yang lain, tabungan pun memiliki kewajiban untuk dikeluarkan zakatnya ketika telah memenuhi ketentuan yang berlaku. Namun masih banyak yang belum mengetahui apa saja yang termasuk ke dalam tabungan yang wajib dizakati dan bagaimana ketentuannya. Padahal seperti yang kita ketahui, zakat merupakan salah satu kewajiban yang disyariatkan oleh agama. Pada pembahasan kali ini, kita akan mengulas lebih lanjut mengenai zakat tabungan, ketentuan dan perhitungannya. 
      Sesuai dengan namanya, zakat tabungan adalah zakat yang dikeluarkan dari tabungan yang kita miliki selama tabungan tersebut berupa harta yang memenuhi kriteria zakat. Kriteria pertama adalah harta tersebut berbentuk uang, emas atau perak yang merupakan milik pribadi dan dimiliki secara sempurna. Kriteria kedua adalah harta tersebut telah memenuhi batas minimal wajib zakat (nisab) dan sudah tersimpan selama satu tahun (haul).</p>
    </div> 
    </section>
  
    <section id="feature-hitung" class="feature-hitung">
      <h1 class="header-hitung-zakat" tabindex="0">HITUNG ZAKAT</h1>
      <div class="form">
        <form class="form-zakat">
        <input type="date" id="date" name="date" placeholder="1-Desember-2021"><br>
        <input type="number" id="idJumlahTabungan" name="idJumlahTabungan"  placeholder="Jumlah Tabungan Rp"><br>
        </form>
      </div>
      <div class="btn-hitung-zakat">
        <button class="btn-hitung-zakat" id="btn-hitung-zakat" tabindex="0">Hitung</button>
      </div>
    </section>
    

    <section id="feature-hasil" class="feature-hasil">
      <div class="item-hasil">
        <h3 tabindex="0">Zakat Tabungan</h3>
        <h4 tabindex="0">Tanggal     : <span id="tanggal" ></span></h4>
        <h2 tabindex="0">Total Tabungan : <span id="hasilTabungan"></span></h3>
        <h2 tabindex="0">Total Zakat : <span id="hasil"></span></h3>
      </div>
    </section>
      `;
  },

  async afterRender() {
    // // Fungsi ini akan dipanggil setelah render()
    document.getElementById('btn-hitung-zakat').addEventListener('click', hitungZakat);

    const syarat = 85 * 821352;

    function hitungZakat() {
      const jumlahTabungan = document.getElementById('idJumlahTabungan').value;
      const date = document.getElementById('date').value;
      let zakat;
      const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      });
      if (jumlahTabungan >= syarat) {
        zakat = 0.025 * jumlahTabungan;
        document.getElementById('hasil').innerHTML = formatter.format(zakat);
      } else {
        zakat = 'Tidak mencukupi syarat nisab';
        document.getElementById('hasil').innerHTML = zakat;
      }
      document.getElementById('tanggal').innerHTML = date;
      document.getElementById('hasilTabungan').innerHTML = formatter.format(jumlahTabungan);

      const dataObject = {
        jenisZakat: 'Zakat Tabungan',
        tanggalZakat: date,
        jumlahZakat: jumlahTabungan,
        totalZakat: zakat,
      };
      const changeToObject = JSON.stringify(dataObject);
      console.log(changeToObject);
      window.localStorage.setItem('data_hasil_zakatTabungan', changeToObject);
    }
  },
};
export default ZakatTabungan;
