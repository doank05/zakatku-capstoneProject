const Beranda = {
  async render() {
    return `
      <section id="fitur-description" class="fitur-description">
        <div class="jumbotron">
          <img src="jumbotron1-crop.jpg" alt="image-jumbotron">
        </div>
        <div class="feature">
          <div class="feature-type">
            <img src="edukasi-icon.png" alt="icon-edukasi">
            <h2>EDUKASI</h2>
            <p>Pelajari berbagai macam jenis zakat dan aturan zakat sesuai dengan aturan.</p>
          </div>
          <div class="feature-type">
            <img src="kalkulator-icon.png" alt="icon-kalkulator">
            <h2>PERHITUNGAN</h2>
            <p>Hitung zakat yang harus dikeluarkan dengan fitur dari wesite ini.</p>
          </div>
          <div class="feature-type">
            <img src="catatan-icon.png" alt="icon-catatan">
            <h2>CATATAN</h2>
            <p>Simpan riwayat perhitungan zakatmu agar dapat dikelola dengan baik.</p>
          </div>
        </div>
        <div class="application-description">
          <p>Zakatku adalah aplikasi web yang bertujuan untuk mengedukasi mengenai peraturan zakat yang harus dikeluarkan dan melakukan perhitungan zakat sesuai aturan yang telah ditentukan menurut Islam. Aplikasi web ini dibuat berdasarkan masalah di masyarakat yang belum mengetahui tentang penghitungan zakat. Dengan adanya website ini diharapkan dapat memberikan solusi atas permasalahan tersebut dengan memberikan fitur-fitur sekaligus edukasi beragam zakat yang ada pada Islam kepada masyarakat dengan mudah digunakan dan dimengerti oleh masyarakat.</p>
        </div>
      </section>
      <section id="content" class="content">
        <div class="first-content">
          <div class="img-first-content">
            <img src="logo-content1.png" alt="image-first-content">
          </div>
          <div class="description-firts-content">
            <h2>APA ITU ZAKAT?</h2>
            <p>Zakat dalam segi istilah adalah harta tertentu yang wajib dikeluarkan oleh orang yang beragama Islam dan diberikan kepada golongan yang berhak menerimanya (fakir miskin dan sebagainya). Zakat dari segi bahasa berarti 'bersih', 'suci', 'subur', 'berkat' dan 'berkembang'. Menurut ketentuan yang telah ditetapkan oleh syariat Islam. Zakat merupakan rukun ketiga dari rukun Islam.</p>
          </div>
        </div>
        <div class="second-content">
        <div class="description-second-content">
          <h2>KENAPA KITA HARUS ZAKAT ?</h2>
          <p>Zakat merupakan salah satu kewajiban yang sudah seharusnya kita tunaikan. Sebagaimana Allah Ta’ala berfirman : “Wahai orang-orang yang beriman, infakkanlah (zakat) sebagian dari hasil usahamu yang baik-baik.” (QS. Al-Baqarah: 267). Zakat merupakan salah satu syari’at Allah yang sudah ada pada zaman dahulu. Orang - orang yang berzakat Allah akan memberikan ketentraman didalam hidupnya dan menjauhkan dari sifat kikir dan bakhil.</p>
        </div>
          <div class="img-second-content">
            <img src="logo-content2.png" alt="image-second-content">
          </div>
        </div>
        <div class="third-content">
          <div class="head-text">
            <h2>ARTIKEL</h2>
          </div>
          <div class="artikel-container">
            <div class="artikel-content">
                <img src="jumbotron1.jpg" alt="content-image">
                <h3>Judul Artikel</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ea corrupti aperiam delectus, sint quam, exercitationem cumque inventore voluptatem ullam, hic repudiandae eligendi reprehenderit error mollitia obcaecati aut nulla dignissimos?</p>
            </div>
            <div class="artikel-content">
                <img src="jumbotron1.jpg" alt="content-image">
                <h3>Judul Artikel</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ea corrupti aperiam delectus, sint quam, exercitationem cumque inventore voluptatem ullam, hic repudiandae eligendi reprehenderit error mollitia obcaecati aut nulla dignissimos?</p>
            </div>
            <div class="artikel-content">
                <img src="jumbotron1.jpg" alt="content-image">
                <h3>Judul Artikel</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ea corrupti aperiam delectus, sint quam, exercitationem cumque inventore voluptatem ullam, hic repudiandae eligendi reprehenderit error mollitia obcaecati aut nulla dignissimos?</p>
            </div>
          </div>
        </div>
      </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Beranda;
