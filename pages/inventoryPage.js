const { By, until } = require("selenium-webdriver");

class InventoryPage {
  constructor(driver) {
    this.driver = driver;

    this.addToCartBtn = By.id("add-to-cart-sauce-labs-backpack");
    this.cartIcon = By.className("shopping_cart_link");
  }

  async addProductToCart() {
    let btn = await this.driver.wait(
      until.elementLocated(this.addToCartBtn),
      10000
    );

    await btn.click();
  }

  async goToCart() {
    let cart = await this.driver.wait(
      until.elementLocated(this.cartIcon),
      10000
    );

    await cart.click();
  }
}

module.exports = InventoryPage;