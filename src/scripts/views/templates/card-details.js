import CONFIG from '../../globals/config';

const createRestaurantDetail = (restaurant) => `
    <div id="contentDetail" class="contentDetail">
        <img class="imageDetail" crossorigin="anonymous" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
        <div class="restaurantInfoDetail">
            <h2 class="detailTitle">${restaurant.name}</h2>
            <div class="infoList">
                <ul class="detailInfo">
                    <li>
                        <h4><i title="address" class="fas fa-map-marker-alt icon-primary"></i> Address</h4>
                        <p class="infoAddress">${restaurant.address}, ${restaurant.city}<p>
                    </li>
                    <li>
                        <h4><i title="ratings" class="fas fa-star icon-primary"></i> Rating</h4>
                        <p class="infoRate">${restaurant.rating}<p>
                    </li>
                    <li>
                        <h4>Description</h4>
                        <p class="infoDesc">${restaurant.description}</p>
                    </li>
                </ul>
            </div>
            <h2 class="detailTitle">Menu</h2>
            <div class="restaurantMenu">
                <div class="foodsDetail">
                    <h4 class="menuTitle">Foods</h4>
                    <ul>
                        ${restaurant.menus.foods.map((food) => `<li class="list">${food.name}</li>`).join('')}
                    </ul>
                </div>
                <div class="drinksDetail">
                    <h4 class="menuTitle">Drinks</h4>
                    <ul>
                        ${restaurant.menus.drinks.map((drink) => `<li class="list">${drink.name}</li>`).join('')}</p>
                    </ul>
                </div>
            </div>
            <h2 class="detailTitle">Reviews</h3>
            <div class="detailReview">
                ${restaurant.customerReviews.map((review) => `
                    <div class="detailReviewItem">
                        <div class="reviewHeader">
                            <p class="reviewName">${review.name}</p>
                            <p class="reviewDate">${review.date}</p>
                        </div>
                        <div class="reviewBody">"${review.review}"</div>
                    </div>
                    `)
    .join('')}
            </div>
        </div>
    </div>
    `;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
       <i class="far fa-heart" aria-hidden="true"></i>
    </button>
  `;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
  `;

export {
  createRestaurantDetail,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
