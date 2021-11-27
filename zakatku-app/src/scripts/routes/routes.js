import Beranda from '../views/pages/beranda';
import Zakat from '../views/pages/zakat';
import Catatan from '../views/pages/catatan';

const routes = {
  '/': Beranda, // default page
  '/beranda': Beranda,
  '/zakat': Zakat,
  '/catatan': Catatan,
};

export default routes;
