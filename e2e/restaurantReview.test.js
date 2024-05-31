const assert = require('assert');

Feature('Restaurant Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Post resto review', async ({ I }) => {
  const reviewName = 'pipirippip';
  const reviewText = 'babayaga';

  I.seeElement('.card a');
  I.click(locate('.card a').first());
  I.seeElement('.formReview form');

  I.fillField('nameInput', reviewName);
  I.fillField('reviewInput', reviewText);
  I.click('#submitReview');
  
  I.refreshPage();
  I.wait(3);
  
  const lastReview = locate('.reviewBody').last();
  const lastReviewText = await I.grabTextFrom(lastReview);
  assert.strictEqual(reviewText, lastReviewText.replace(/"/g, ''));
});