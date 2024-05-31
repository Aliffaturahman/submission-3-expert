import FavoriteRestaurantIdb from '../data/restaurant-favorite-idb';
import { initSweetAlertError, initSweetAlertSuccess } from './sweet-alert';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/card-details';

const ButtonInitiator = {
  async init({ likeButtonContainer, data }) {
    this.likeButtonContainer = likeButtonContainer;
    this.restaurant = data.restaurant;

    await this.renderButton();
  },

  async renderButton() {
    try {
      const { id } = this.restaurant;
      const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);

      if (restaurant) {
        this.renderLikedButtonTemplate();
      } else {
        this.renderLikeButtonTemplate();
      }
    } catch (err) {
      console.error(err);
      initSweetAlertError(err.message);
      throw new Error(err);
    }
  },

  renderLikeButtonTemplate() {
    this.likeButtonContainer.innerHTML = createLikeButtonTemplate(); // append html

    const likeButton = document.querySelector('#likeButton');

    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this.restaurant);
      initSweetAlertSuccess('Restaurants added to favorites page');
      this.renderButton();
    });
  },

  renderLikedButtonTemplate() {
    this.likeButtonContainer.innerHTML = createLikedButtonTemplate(); // append html

    const likeButton = document.querySelector('#likeButton');

    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this.restaurant.id);
      initSweetAlertSuccess('Restaurants removed from favorites page');
      this.renderButton();
    });
  },
};

export default ButtonInitiator;
