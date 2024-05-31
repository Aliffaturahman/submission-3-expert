const assert = require('assert');

Feature('Restaurant Favorite');

// Perintah berjalan sebelum tiap metode tes dijalankan
Before(({ I }) => {
    // root URL : http:localhost:9000
    I.amOnPage('/#/favorite');
  });
  
  const thereIsNoFavoriteRestaurant = 'Favorite restaurant list is empty';
  
  Scenario('showing empty favorite restaurant', ({ I }) => {
    I.seeElement('#exploreRestaurant');
    I.see(thereIsNoFavoriteRestaurant, '#exploreRestaurant');
  });
  
  Scenario('liking one restaurant', async ({ I }) => {
    I.see(thereIsNoFavoriteRestaurant, '#exploreRestaurant');
  
    // URL: /
    I.amOnPage('/');
    I.seeElement('.card a');
    const firstRestoCard = locate('.cardContentTitle').first();
    const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
    I.click(firstRestoCard);
  
    // URL: /resto/:id
    I.waitForElement('#likeButton', 5); // Menunggu tombol like muncul
    I.seeElement('#likeButton');
    I.click('#likeButton');
  
    // URL: /#/favorite
    I.amOnPage('/#/favorite');
    I.waitForElement('.card', 5); // Menunggu elemen card muncul
    I.seeElement('.card');
    const likedCardTitle = await I.grabTextFrom('.cardContentTitle');
    assert.strictEqual(firstRestoCardTitle, likedCardTitle); // membandingkan
  });
  
  Scenario('unliking one restaurant', async ({ I }) => {
    I.see(thereIsNoFavoriteRestaurant, '#exploreRestaurant');
  
    // URL: /
    I.amOnPage('/');
    I.seeElement('.card a');
    const firstRestoCard = locate('.cardContentTitle').first();
    const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
    I.click(firstRestoCard);
  
    // URL: /resto/:id
    I.waitForElement('#likeButton', 5); // Menunggu tombol like muncul
    I.seeElement('#likeButton');
    I.click('#likeButton');
  
    // URL: /#/favorite
    I.amOnPage('/#/favorite');
    I.waitForElement('.card', 5); // Menunggu elemen card muncul
    I.seeElement('.card');
    const likedCardTitle = await I.grabTextFrom('.cardContentTitle');
    assert.strictEqual(firstRestoCardTitle, likedCardTitle); // membandingkan
    
    I.click(likedCardTitle);
  
    // URL: /resto/:id
    I.waitForElement('#likeButton', 5); // Menunggu tombol like muncul
    I.seeElement('#likeButton');
    I.click('#likeButton');
  
    // URL: /#/favorite
    I.amOnPage('/#/favorite');
    I.seeElement('#exploreRestaurant');
    I.dontSeeElement('.card');
    I.dontSeeElement('.cardContentTitle');
    
    I.see(thereIsNoFavoriteRestaurant, '#exploreRestaurant');
  });
  