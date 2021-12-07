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
        <input type="radio" id="sapi" name="hewan" value="sapi"><label for="sapi">Sapi/Kerbau</label><br>
        <input type="radio" id="domba" name="hewan" value="sapi"><label for="sapi">Sapi/Kerbau</label><br>
        <input type="radio" id="domba" name="hewan" value="domba"><label for="domba">Domba/Kambing</label><br>
        <input type="number" id="idJumlahHewan" name="idJumlahHewan" placeholder="Jumlah Hewan"><br>
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

export default ZakatTernak;
