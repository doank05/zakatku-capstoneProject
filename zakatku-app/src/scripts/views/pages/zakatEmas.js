const ZakatEmas = {
  async render() {
    return `
    <section id="kategori-zakat" class="kategori-zakat">
    <h1 class="header-kategori-zakat">ZAKAT EMAS</h1>
    <div class="description-zakat" id="description-zakat">
      <p>Zakat emas, perak, atau logam mulia adalah zakat yang ditunaikan atas emas, perak dan logam mulia lainnya yang telah mencapai nisab. Sudah seharusnya ditunaikan zakatnya. Tentunya dengan dasar syariat yang benar 
      agar jangan sampai mengambil yang bukan haknya atau menahan yang sudah menjadi hak Allah SWT. Syarat Emas :</p>
      <ul class="list-syarat-emas">
      <li>Mencapai haul satu tahun</li>
      <li>Mencapai nisab 85 gram emas murni</li>
      <li>Bebas dari hutang yang menyebabkan kurang dari nisab</li>
      </ul>
    </div> 
    </section>
  
    <section id="feature-hitung" class="feature-hitung">
      <h1 class="header-hitung-zakat">HITUNG ZAKAT</h1>
      <div class="form">
        <form class="form-zakat">
        <input type="date" id="date" name="date" placeholder="1-Desember-2021"><br>
        <input type="text" id="idJumlahEmas" name="idJumlahEmas" placeholder="Jumlah Emas"><br>
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

export default ZakatEmas;
