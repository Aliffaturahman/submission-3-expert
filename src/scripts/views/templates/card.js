import CONFIG from '../../globals/config';

const createRestaurantItem = (restaurant) => `
    <div tabindex="0" class="card">
        <a href="/#/detail/${restaurant.id}">
        <div class="imgContainer">
            <img tabindex="0" class="cardImage lazyload" crossorigin="anonymous" 
                alt="${restaurant.name}" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
            />
            <span tabindex="0" class="cardRating">
                <i title="ratings" class="fa fa-star"></i>
                <span>${restaurant.rating}</span>
            </span>
            <span tabindex="0" class="cardCity">
                <span>${restaurant.city}</span>
            </span>
            </div>

            <div tabindex="0" class="cardContent">
                <p class="cardContentTitle">${restaurant.name}</p>
                <p class="truncate">${restaurant.description}</p>
            </div>
        </a>
    </div>
`;

export default createRestaurantItem;
