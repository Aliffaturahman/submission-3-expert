import RestaurantSource from '../data/restaurant-source';

const PostReview = async (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };

  const reviewContainer = document.querySelector('.detailReview');
  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const newReview = `
    <div class="detailReviewItem">
      <div class="reviewHeader">
        <p class="reviewName">${name}</p>
        <p class="reviewDate">${date}</p>
      </div>

      <div class="reviewBody">${review}</div>
    </div>
  `;

  const reviewResponse = await RestaurantSource.postRestaurantReview(dataInput);
  console.log(
    '🚀 ~ file: post-review.js ~ line 33 ~ PostReview ~ reviewResponse',
    reviewResponse,
  );

  reviewContainer.innerHTML += newReview;
};

export default PostReview;
