import Beranda from '../views/pages/beranda';
import Zakat from '../views/pages/zakat';
import Catatan from '../views/pages/catatan';
import ZakatTabungan from '../views/pages/zakatTabungan';
import ZakatEmas from '../views/pages/zakatEmas';
import ZakatPerak from '../views/pages/zakatPerak';
import ZakatTernak from '../views/pages/zakatTernak';
import ZakatPerdagangan from '../views/pages/zakatPerdagangan';
import ZakatPertanian from '../views/pages/zakatPertanian';
import ZakatProfesi from '../views/pages/zakatProfesi';
import ZakatInvestasi from '../views/pages/zakatInvestasi';
import ZakatRikaz from '../views/pages/zakatRikaz';
import ZakatTry from '../views/pages/zakatTry';

const routes = {
  '/': Beranda, // default page
  '/beranda': Beranda,
  '/zakat': Zakat,
  '/catatan': Catatan,
  '/zakat-tabungan': ZakatTabungan,
  '/zakat-emas': ZakatEmas,
  '/zakat-perak': ZakatPerak,
  '/zakat-ternak': ZakatTernak,
  '/zakat-perdagangan': ZakatPerdagangan,
  '/zakat-pertanian': ZakatPertanian,
  '/zakat-profesi': ZakatProfesi,
  '/zakat-investasi': ZakatInvestasi,
  '/zakat-rikaz': ZakatRikaz,
  '/zakat-try': ZakatTry,
};

export default routes;
