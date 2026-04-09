const createDriver = require("../utils/driver");

const LoginPage = require("../pages/loginPage");
const InventoryPage = require("../pages/inventoryPage");
const CheckoutPage = require("../pages/checkoutPage");

async function sauceDemoTest() {
  let driver = await createDriver();

  try {
    const loginPage = new LoginPage(driver);
    const inventoryPage = new InventoryPage(driver);
    const checkoutPage = new CheckoutPage(driver);

    // LOGIN
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");
    console.log("[STEP] Login berhasil ✅");

    // INVENTORY
    await inventoryPage.addProductToCart();
    console.log("[STEP] Produk ditambahkan ke cart ✅");

    await inventoryPage.goToCart();
    console.log("[STEP] Masuk halaman cart ✅");

    // CHECKOUT
    await checkoutPage.checkout("Doodie", "Test", "12345");
    console.log("[STEP] Data checkout diisi ✅");

    await checkoutPage.verifySuccess();

    await checkoutPage.backToHome();
    console.log("[STEP] Kembali ke halaman produk ✅");

    console.log("Flow end-to-end sukses 🎯");

  } catch (err) {
    console.log("Terjadi error ❌", err);

    const fs = require("fs");
    const path = require("path");

    const dir = path.join(__dirname, "../screenshots");
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);

    let image = await driver.takeScreenshot();
    fs.writeFileSync(path.join(dir, "error.png"), image, "base64");

  } finally {
    await driver.quit();
  }
}

sauceDemoTest();