const ZakatTabungan = {
  async render() {
    return `
    <section id="kategori-zakat" class="kategori-zakat">
    <h1 class="header-kategori-zakat">ZAKAT TABUNGAN</h1>
    <div class="description-zakat" id="description-zakat">
      <p>Seperti halnya jenis harta yang lain, tabungan pun memiliki kewajiban untuk dikeluarkan zakatnya ketika telah memenuhi ketentuan yang berlaku. Namun masih banyak yang belum mengetahui apa saja yang termasuk ke dalam tabungan yang wajib dizakati dan bagaimana ketentuannya. Padahal seperti yang kita ketahui, zakat merupakan salah satu kewajiban yang disyariatkan oleh agama. Pada pembahasan kali ini, kita akan mengulas lebih lanjut mengenai zakat tabungan, ketentuan dan perhitungannya. 
      Sesuai dengan namanya, zakat tabungan adalah zakat yang dikeluarkan dari tabungan yang kita miliki selama tabungan tersebut berupa harta yang memenuhi kriteria zakat. Kriteria pertama adalah harta tersebut berbentuk uang, emas atau perak yang merupakan milik pribadi dan dimiliki secara sempurna. Kriteria kedua adalah harta tersebut telah memenuhi batas minimal wajib zakat (nisab) dan sudah tersimpan selama satu tahun (haul).</p>
    </div> 
    </section>
  
    <section id="feature-hitung" class="feature-hitung">
      <h1 class="header-hitung-zakat">HITUNG ZAKAT</h1>
      <div class="form">
        <form class="form-zakat">
        <input type="date" id="date" name="date" placeholder="1-Desember-2021"><br>
        <input type="number" id="idJumlahTabungan" name="idJumlahTabungan" placeholder="Jumlah Tabungan"><br>
        </form>
      </div>
      <div class="btn-hitung-zakat">
        <button class="btn-hitung-zakat" id="btn-hitung-zakat" >Hitung</button>
      </div>
    </section>
    

    <section id="feature-hasil" class="feature-hasil">
      
    </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default ZakatTabungan;
