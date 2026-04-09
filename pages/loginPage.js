const { By, until } = require("selenium-webdriver");

class LoginPage {
  constructor(driver) {
    this.driver = driver;

    this.usernameInput = By.id("user-name");
    this.passwordInput = By.id("password");
    this.loginBtn = By.id("login-button");
    this.inventoryContainer = By.className("inventory_list");
  }

  async open() {
    await this.driver.get("https://www.saucedemo.com/");
  }

  async login(username, password) {
    await this.driver.findElement(this.usernameInput).sendKeys(username);
    await this.driver.findElement(this.passwordInput).sendKeys(password);
    await this.driver.findElement(this.loginBtn).click();

    // wait sampai login berhasil
    await this.driver.wait(
      until.elementLocated(this.inventoryContainer),
      10000
    );
  }
}

module.exports = LoginPage;