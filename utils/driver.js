const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

async function createDriver() {
  let options = new chrome.Options();

  options.addArguments(
    "--incognito",
    "--disable-notifications"
  );

  return await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();
}

module.exports = createDriver;