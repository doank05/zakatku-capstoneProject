/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
const ZakatRikaz = {
  async render() {
    return `
    <h3>Contoh 1: Mengambil nilai tag span</h3>
    <p>Nama: Andika Siswoyo, Nilai: <span id="nilai_andika">80</span>
    <br />Nama: Joko Susilo, Nilai: <span id="nilai_joko">92</span></p>
    <button id="tombol_p">Tampilkan Nilai</button>
     
    <br/>
    <br/>
     
    <h3>Contoh 2: Mengambil nilai tag input</h3>
    <form onsubmit="return false">
      <label>Rika Pratiwi: </label>
      <input type="text" id="input_form" value="90"/>
    <button id="tombol_form">Tampilkan Nilai</button>
    </form>
     
    <br/>
    <br/>
     
    <h2>Hasil: <span id="hasil"></span></h2>
      `;
  },

  async afterRender() {
    document.getElementById('tombol_p').addEventListener('click', tampilkan_nilai_p);

    document.getElementById('tombol_form').addEventListener('click', tampilkan_nilai_form);

    function tampilkan_nilai_p() {
      const nilai_andika = document.getElementById('nilai_andika').innerHTML;
      const nilai_joko = document.getElementById('nilai_joko').innerHTML;
      document.getElementById('hasil').innerHTML = `${nilai_andika} dan ${nilai_joko}`;
    }

    function tampilkan_nilai_form() {
      const nilai_form = document.getElementById('input_form').value;
      document.getElementById('hasil').innerHTML = nilai_form;
    }
  },
};

export default ZakatRikaz;