import { itActsAsFavoriteRestoModel } from './contract/favRestoContract';

let favRestaurant = [];

const FavoriteRestoArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }

    return favRestaurant.find((restaurant) => restaurant.id === id);
  },

  getAllRestaurants() {
    return favRestaurant;
  },

  putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteMovies
    if (this.getRestaurant(restaurant.id)) {
      return;
    }

    favRestaurant.push(restaurant);
  },

  deleteRestaurant(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favRestaurant = favRestaurant.filter((restaurant) => restaurant.id !== id);
  },
};

describe('Favorite restaurant array contract test', () => {
  // eslint-disable-next-line no-return-assign
  afterEach(() => (favRestaurant = []));

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
