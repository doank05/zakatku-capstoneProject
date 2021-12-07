const ZakatInvestasi = {
  async render() {
    return `
    <section id="kategori-zakat" class="kategori-zakat">
    <h1 class="header-kategori-zakat">ZAKAT INVESTASI</h1>
    <div class="description-zakat" id="description-zakat">
      <p>Zakat Investasi dalam istilah fiqih biasa disebut zakat “Almustaghillat”. Zakat tersebut dikenakan terhadap harta yang diperoleh dari hasil investasi. Diantara bentuk usaha yang termasuk investasi seperti bangunan atau kantor yang disewakan, saham, rental mobil, rumah kontrakan, dll.
      <br>Para ulama kontemporer, seperti Abu Zahrah, Abdul Wahab Kholaf dan Yusuf Qordhowi, menganalogikannya ke dalam zakat pertanian yaitu dikeluarkan saat menghasilkan dari hasilnya tanpa memasukkan unsur modal, dengan tarif 5% untuk penghasilan kotor dan 10% untuk penghasilan bersih.
      </p>
    </div> 
    </section>
  
    <section id="feature-hitung" class="feature-hitung">
      <h1 class="header-hitung-zakat">HITUNG ZAKAT</h1>
      <div class="form">
        <form class="form-zakat">
        <input type="date" id="date" name="date" placeholder="1-Desember-2021">
        <input type="number" id="idJumlahPenghasilan" name="idJumlahPenghasilan" placeholder="Jumlah Penghasilan Investasi / Bulan"><br>
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

export default ZakatInvestasi;
