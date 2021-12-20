/* eslint-disable consistent-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
const Riwayat = {
  async render() {
    return `
    <div class="head-page">
      <h1>RIWAYAT</h1>
      <p>Penyimpanan Riwayat Terakhir Perhitungan Zakat</p>
      <div class="btn-riwayat-zakat">
        <button class="btn-riwayat-zakat" id="btn-riwayat"> TEKAN UNTUK MELIHAT RIWAYAT</button>
      </div>
      <div class="riwayat-data">
      </div>
    </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });

    function getDataZakatEmas() {
      const dataHasil = localStorage.getItem('data_hasil_zakatEmas');
      const changeToObject = JSON.parse(dataHasil);
      console.log(changeToObject);

      const container = document.createElement('div');
      container.classList.add('item-hasil');
      document.querySelector('.riwayat-data').appendChild(container);

      const getJenisZakat = document.createElement('h3');
      getJenisZakat.innerText = 'ZAKAT EMAS';
      document.querySelector('.item-hasil').appendChild(getJenisZakat);

      const getTanggalZakat = document.createElement('h4');
      getTanggalZakat.innerText = `Tanggal : ${changeToObject.tanggalZakat}`;
      document.querySelector('.item-hasil').appendChild(getTanggalZakat);

      const getJumlahZakat = document.createElement('h2');
      getJumlahZakat.innerText = `Jumlah Emas : ${changeToObject.jumlahZakat} Gram`;
      document.querySelector('.item-hasil').appendChild(getJumlahZakat);

      const getTotalZakat = document.createElement('h2');
      getTotalZakat.innerText = `Total Zakat : ${changeToObject.totalZakat} Gram`;
      document.querySelector('.item-hasil').appendChild(getTotalZakat);
    }

    function getDataZakatPerak() {
      const dataHasil = localStorage.getItem('data_hasil_zakatPerak');
      const changeToObject = JSON.parse(dataHasil);
      console.log(changeToObject);

      const container = document.createElement('div');
      container.classList.add('item-hasil1');
      container.classList.add('item-hasil');
      document.querySelector('.riwayat-data').appendChild(container);

      const getJenisZakat = document.createElement('h3');
      getJenisZakat.innerText = 'ZAKAT PERAK';
      document.querySelector('.item-hasil1').appendChild(getJenisZakat);

      const getTanggalZakat = document.createElement('h4');
      getTanggalZakat.innerText = `Tanggal : ${changeToObject.tanggalZakat}`;
      document.querySelector('.item-hasil1').appendChild(getTanggalZakat);

      const getJumlahZakat = document.createElement('h2');
      getJumlahZakat.innerText = `Jumlah Perak : ${changeToObject.jumlahZakat} Gram`;
      document.querySelector('.item-hasil1').appendChild(getJumlahZakat);

      const getTotalZakat = document.createElement('h2');
      getTotalZakat.innerText = `Total Zakat : ${changeToObject.totalZakat} Gram`;
      document.querySelector('.item-hasil1').appendChild(getTotalZakat);
    }

    function getDataZakatInvestasi() {
      const dataHasil = localStorage.getItem('data_hasil_zakatInvestasi');
      const changeToObject = JSON.parse(dataHasil);
      console.log(changeToObject);

      const container = document.createElement('div');
      container.classList.add('item-hasil2');
      container.classList.add('item-hasil');
      document.querySelector('.riwayat-data').appendChild(container);

      const getJenisZakat = document.createElement('h3');
      getJenisZakat.innerText = 'ZAKAT INVESTASI';
      document.querySelector('.item-hasil2').appendChild(getJenisZakat);

      const getTanggalZakat = document.createElement('h4');
      getTanggalZakat.innerText = `Tanggal : ${changeToObject.tanggalZakat}`;
      document.querySelector('.item-hasil2').appendChild(getTanggalZakat);

      const getJumlahZakat = document.createElement('h2');
      getJumlahZakat.innerText = `Jumlah Keuntungan : ${formatter.format(changeToObject.jumlahZakat)} /Bulan`;
      document.querySelector('.item-hasil2').appendChild(getJumlahZakat);

      const getTotalZakat = document.createElement('h2');
      if (changeToObject.totalZakat >= 0) {
        getTotalZakat.innerText = `Total Zakat : ${formatter.format(changeToObject.totalZakat)} /Bulan`;
      } else {
        getTotalZakat.innerText = `Total Zakat : ${changeToObject.totalZakat}`;
      }
      document.querySelector('.item-hasil2').appendChild(getTotalZakat);
    }

    function getDataZakatTabungan() {
      const dataHasil = localStorage.getItem('data_hasil_zakatTabungan');
      const changeToObject = JSON.parse(dataHasil);
      console.log(changeToObject);

      const container = document.createElement('div');
      container.classList.add('item-hasil3');
      container.classList.add('item-hasil');
      document.querySelector('.riwayat-data').appendChild(container);

      const getJenisZakat = document.createElement('h3');
      getJenisZakat.innerText = 'ZAKAT TABUNGAN';
      document.querySelector('.item-hasil3').appendChild(getJenisZakat);

      const getTanggalZakat = document.createElement('h4');
      getTanggalZakat.innerText = `Tanggal : ${changeToObject.tanggalZakat}`;
      document.querySelector('.item-hasil3').appendChild(getTanggalZakat);

      const getJumlahZakat = document.createElement('h2');
      getJumlahZakat.innerText = `Total Tabungan : ${formatter.format(changeToObject.jumlahZakat)}`;
      document.querySelector('.item-hasil3').appendChild(getJumlahZakat);

      const getTotalZakat = document.createElement('h2');

      if (changeToObject.totalZakat >= 0) {
        getTotalZakat.innerText = `Total Zakat : ${formatter.format(changeToObject.totalZakat)}`;
      } else {
        getTotalZakat.innerText = `Total Zakat : ${changeToObject.totalZakat}`;
      }

      document.querySelector('.item-hasil3').appendChild(getTotalZakat);
    }

    function getDataZakatTernak() {
      const dataHasil = localStorage.getItem('data_hasil_zakatTernak');
      const changeToObject = JSON.parse(dataHasil);
      console.log(changeToObject);

      const container = document.createElement('div');
      container.classList.add('item-hasil4');
      container.classList.add('item-hasil');
      document.querySelector('.riwayat-data').appendChild(container);

      const getJenisZakat = document.createElement('h3');
      getJenisZakat.innerText = 'ZAKAT TERNAK';
      document.querySelector('.item-hasil4').appendChild(getJenisZakat);

      const getTanggalZakat = document.createElement('h4');
      getTanggalZakat.innerText = `Tanggal : ${changeToObject.tanggalZakat}`;
      document.querySelector('.item-hasil4').appendChild(getTanggalZakat);

      const getJumlahZakat = document.createElement('h2');
      getJumlahZakat.innerText = `Jumlah Hewan : ${formatter.format(changeToObject.jumlahZakat)}`;
      document.querySelector('.item-hasil4').appendChild(getJumlahZakat);

      const getTotalZakat = document.createElement('h2');
      getTotalZakat.innerText = `Total Zakat : ${changeToObject.totalZakat}`;
      document.querySelector('.item-hasil4').appendChild(getTotalZakat);
    }

    function getDataZakatPerdagangan() {
      const dataHasil = localStorage.getItem('data_hasil_zakatPerdagangan');
      const changeToObject = JSON.parse(dataHasil);
      console.log(changeToObject);

      const container = document.createElement('div');
      container.classList.add('item-hasil5');
      container.classList.add('item-hasil');
      document.querySelector('.riwayat-data').appendChild(container);

      const getJenisZakat = document.createElement('h3');
      getJenisZakat.innerText = 'ZAKAT PERDAGANGAN';
      document.querySelector('.item-hasil5').appendChild(getJenisZakat);

      const getTanggalZakat = document.createElement('h4');
      getTanggalZakat.innerText = `Tanggal : ${changeToObject.tanggalZakat}`;
      document.querySelector('.item-hasil5').appendChild(getTanggalZakat);

      const getJumlahZakat = document.createElement('h2');
      getJumlahZakat.innerText = `Jumlah Keuntungan : ${formatter.format(changeToObject.jumlahZakat)}`;
      document.querySelector('.item-hasil5').appendChild(getJumlahZakat);

      const getTotalZakat = document.createElement('h2');

      if (changeToObject.totalZakat >= 0) {
        getTotalZakat.innerText = `Total Zakat : ${formatter.format(changeToObject.totalZakat)}`;
      } else {
        getTotalZakat.innerText = `Total Zakat : ${changeToObject.totalZakat}`;
      }

      document.querySelector('.item-hasil5').appendChild(getTotalZakat);
    }

    function getDataZakatPertanian() {
      const dataHasil = localStorage.getItem('data_hasil_zakatPertanian');
      const changeToObject = JSON.parse(dataHasil);
      console.log(changeToObject);

      const container = document.createElement('div');
      container.classList.add('item-hasil6');
      container.classList.add('item-hasil');
      document.querySelector('.riwayat-data').appendChild(container);

      const getJenisZakat = document.createElement('h3');
      getJenisZakat.innerText = 'ZAKAT PERTANIAN';
      document.querySelector('.item-hasil6').appendChild(getJenisZakat);

      const getTanggalZakat = document.createElement('h4');
      getTanggalZakat.innerText = `Tanggal : ${changeToObject.tanggalZakat}`;
      document.querySelector('.item-hasil6').appendChild(getTanggalZakat);

      const getJumlahZakat = document.createElement('h2');
      getJumlahZakat.innerText = `Hasil Panen : ${changeToObject.jumlahZakat} Kg`;
      document.querySelector('.item-hasil6').appendChild(getJumlahZakat);

      const getTotalZakat = document.createElement('h2');
      if (changeToObject.totalZakat >= 0) {
        getTotalZakat.innerText = `Total Zakat : ${changeToObject.totalZakat} Kg`;
      } else {
        getTotalZakat.innerText = `Total Zakat : ${changeToObject.totalZakat}`;
      }

      document.querySelector('.item-hasil6').appendChild(getTotalZakat);
    }

    function getDataZakatProfesi() {
      const dataHasil = localStorage.getItem('data_hasil_zakatProfesi');
      const changeToObject = JSON.parse(dataHasil);
      console.log(changeToObject);

      const container = document.createElement('div');
      container.classList.add('item-hasil7');
      container.classList.add('item-hasil');
      document.querySelector('.riwayat-data').appendChild(container);

      const getJenisZakat = document.createElement('h3');
      getJenisZakat.innerText = 'ZAKAT PROFESI';
      document.querySelector('.item-hasil7').appendChild(getJenisZakat);

      const getTanggalZakat = document.createElement('h4');
      getTanggalZakat.innerText = `Tanggal : ${changeToObject.tanggalZakat}`;
      document.querySelector('.item-hasil7').appendChild(getTanggalZakat);

      const getJumlahZakat = document.createElement('h2');
      getJumlahZakat.innerText = `Jumlah Penghasilan : ${formatter.format(changeToObject.jumlahZakat)} /Tahun`;
      document.querySelector('.item-hasil7').appendChild(getJumlahZakat);

      const getTotalZakat = document.createElement('h2');
      if (changeToObject.totalZakat >= 0) {
        getTotalZakat.innerText = `Total Zakat : ${formatter.format(changeToObject.totalZakat)} /Tahun`;
      } else {
        getTotalZakat.innerText = `Total Zakat : ${changeToObject.totalZakat}`;
      }
      document.querySelector('.item-hasil7').appendChild(getTotalZakat);
    }

    function getDataZakatRikaz() {
      const dataHasil = localStorage.getItem('data_hasil_zakatRikaz');
      const changeToObject = JSON.parse(dataHasil);
      console.log(changeToObject);

      const container = document.createElement('div');
      container.classList.add('item-hasil8');
      container.classList.add('item-hasil');
      document.querySelector('.riwayat-data').appendChild(container);

      const getJenisZakat = document.createElement('h3');
      getJenisZakat.innerText = 'ZAKAT RIKAZ';
      document.querySelector('.item-hasil8').appendChild(getJenisZakat);

      const getTanggalZakat = document.createElement('h4');
      getTanggalZakat.innerText = `Tanggal : ${changeToObject.tanggalZakat}`;
      document.querySelector('.item-hasil8').appendChild(getTanggalZakat);

      const getJumlahZakat = document.createElement('h2');
      getJumlahZakat.innerText = `Jumlah Penghasilan : ${formatter.format(changeToObject.jumlahZakat)}`;
      document.querySelector('.item-hasil8').appendChild(getJumlahZakat);

      const getTotalZakat = document.createElement('h2');
      if (changeToObject.totalZakat >= 0) {
        getTotalZakat.innerText = `Total Zakat : ${formatter.format(changeToObject.totalZakat)}`;
      } else {
        getTotalZakat.innerText = `Total Zakat : ${changeToObject.totalZakat}`;
      }
      document.querySelector('.item-hasil8').appendChild(getTotalZakat);
    }

    function addDisable() {
      const button = document.querySelector('#btn-riwayat');
      button.setAttribute('disabled', 'true');
    }

    document.querySelector('.btn-riwayat-zakat').addEventListener('click', getDataZakatEmas);
    document.querySelector('.btn-riwayat-zakat').addEventListener('click', getDataZakatPerak);
    document.querySelector('.btn-riwayat-zakat').addEventListener('click', getDataZakatInvestasi);
    document.querySelector('.btn-riwayat-zakat').addEventListener('click', getDataZakatTabungan);
    document.querySelector('.btn-riwayat-zakat').addEventListener('click', getDataZakatTernak);
    document.querySelector('.btn-riwayat-zakat').addEventListener('click', getDataZakatPerdagangan);
    document.querySelector('.btn-riwayat-zakat').addEventListener('click', getDataZakatPertanian);
    document.querySelector('.btn-riwayat-zakat').addEventListener('click', getDataZakatProfesi);
    document.querySelector('.btn-riwayat-zakat').addEventListener('click', getDataZakatRikaz);
    document.querySelector('.btn-riwayat-zakat').addEventListener('click', addDisable);
  },
};

export default Riwayat;
