// home.js
import RestaurantSource from '../../data/restaurant-source';
import createRestaurantItem from '../templates/card';

const Home = {
  async render() {
    return `
      <div class="mainContentContainer">
          <h2 class="mainContentTitle">Explore Any Restaurant</h2>
          <input
            type="text"
            id="searchInput"
            placeholder="search restaurant here ..."
          />
      </div>
      <section id="exploreRestaurant" class="exploreRestaurant"></section>
    `;
  },

  async afterRender() {
    const fetchedRestaurants = await RestaurantSource.ListRestaurants();
    const restaurantsContainer = document.querySelector('#exploreRestaurant');

    const renderRestaurants = (restaurants) => {
      restaurantsContainer.innerHTML = '';
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItem(restaurant);
      });
    };

    renderRestaurants(fetchedRestaurants);

    // Search
    document.getElementById('searchInput').addEventListener('input', (event) => {
      const searchText = event.target.value.toLowerCase();
      const filteredRestaurants = fetchedRestaurants.filter(
        (resto) => resto.name.toLowerCase().includes(searchText)
          || resto.city.toLowerCase().includes(searchText),
      );
      renderRestaurants(filteredRestaurants);
    });
  },
};

export default Home;
