import FavoriteRestaurantIdb from '../../data/restaurant-favorite-idb';
import createRestaurantItem from '../templates/card';

const Favorite = {
  async render() {
    return `
    <div class="mainContentContainer">
        <h2 class="mainContentTitle">Your Favorite Restaurant</h2>
    </div>
    <section id="exploreRestaurant" class="exploreRestaurant"></section>
    `;
  },

  async afterRender() {
    const favorite = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#exploreRestaurant');

    if (favorite.length === 0) {
      restaurantsContainer.innerHTML = `
        Favorite restaurant list is empty
      `;
    }

    favorite.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItem(restaurant);
    });
  },
};

export default Favorite;
