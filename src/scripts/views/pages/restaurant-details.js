import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import PostReview from '../../utils/post-review';
import { createRestaurantDetail } from '../templates/card-details';
import { sendDataToWebsocket } from '../../utils/websocket-initiator';

const Detail = {
  async render() {
    return `
        <div class="mainContentContainer">
            <h2 class="mainContentTitle">Detail Page</h2>
        </div>
        
        <div id="detailContent" class="detailContent"></div>
        <div id="likeButtonContainer"></div>
        
        <div class="formReview">
          <form autocomplete="on">
            <h2 class="titleReview">Leave a review</h2>
            <div class="mb-3">
              <label for="nameInput" class="formLabel">Name</label>
              <input type="text" class="formControl" name="nameInput" id="nameInput" minlength="3" placeholder="Your name..." required>
            </div>

            <div class="mb-3">
              <label for="reviewInput" class="formLabel">Review</label>
              <input type="text" class="formControl" name="reviewInput" id="reviewInput" minlength="3" placeholder="Your review..." required>
            </div>

            <button id="submitReview" type="submit" class="submitButton">Submit Review</button>
          </form>
        </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detailContent');

    restaurantContainer.innerHTML = createRestaurantDetail(data.restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      data,
    });

    const btnSubmitReview = document.querySelector('#submitReview');
    const nameInput = document.querySelector('#nameInput');
    const reviewInput = document.querySelector('#reviewInput');

    btnSubmitReview.addEventListener('click', async (e) => {
      e.preventDefault();

      await PostReview(url, nameInput.value, reviewInput.value);

      sendDataToWebsocket({
        name: nameInput.value,
        review: reviewInput.value,
      });

      nameInput.value = '';
      reviewInput.value = '';
    });
  },
};

export default Detail;
