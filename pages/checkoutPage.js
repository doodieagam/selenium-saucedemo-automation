const { By, until } = require("selenium-webdriver");

class CheckoutPage {
  constructor(driver) {
    this.driver = driver;

    this.checkoutBtn = By.id("checkout");
    this.firstName = By.id("first-name");
    this.lastName = By.id("last-name");
    this.zipCode = By.id("postal-code");
    this.continueBtn = By.id("continue");
    this.finishBtn = By.id("finish");
    this.successText = By.className("complete-header");
    this.backHomeBtn = By.id("back-to-products");
  }

  async checkout(first, last, zip) {
    await this.driver.wait(
      until.elementLocated(this.checkoutBtn),
      10000
    );

    await this.driver.findElement(this.checkoutBtn).click();

    await this.driver.findElement(this.firstName).sendKeys(first);
    await this.driver.findElement(this.lastName).sendKeys(last);
    await this.driver.findElement(this.zipCode).sendKeys(zip);

    await this.driver.findElement(this.continueBtn).click();
    await this.driver.findElement(this.finishBtn).click();
  }

  async verifySuccess() {
    let text = await this.driver.wait(
      until.elementLocated(this.successText),
      10000
    );

    let result = await text.getText();

    if (result === "Thank you for your order!") {
      console.log("[STEP] Order berhasil ✅");
    } else {
      throw new Error("Order gagal ❌");
    }
  }

  async backToHome() {
    let btn = await this.driver.findElement(this.backHomeBtn);
    await btn.click();
  }
}

module.exports = CheckoutPage;