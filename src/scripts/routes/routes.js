import Home from '../views/pages/home';
import Detail from '../views/pages/restaurant-details';
import Favorite from '../views/pages/restaurant-favorites';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
