const Zakat = {
  async render() {
    return `
    <section id="jenis-zakat" class="jenis-zakat">
      <h1 class="header-jenis-zakat">PILIH ZAKAT</h1>
      <div class="btn-pilih-zakat">
        <button class="btn-pilih-zakat" id="btn-pilih-zakat" >Pilih Jenis Zakat</button>
      </div>
      <div class="description-zakat" id="description-zakat">
        <p>Salah satu kewajiban umat muslim adalah membayarkan zakat fitrah yang dibayarkan setiap bulan Ramadan. Zakat dibayarkan dengan 3,5 liter makanan pokok dari daerah tempat Anda tinggal, dalam hal ini di Indonesia adalah beras. Selain zakat fitrah, ternyata masih banyak macam-macam zakat yang ada.
        Seperti Zakat maal, emas dan perak, binatang ternak, penghasilan dan zakat lainnya</p>
      </div> 
    </section>
    
    <section id="feature-hitung" class="feature-hitung">
      <h1 class="header-hitung-zakat">HITUNG ZAKAT</h1>
      <div class="form">
        <form class="form-zakat">
          <input type="date" id="date" name="date" placeholder="1-Desember-2021"><br>
          <input type="text" id="lname" name="lname">
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

export default Zakat;
