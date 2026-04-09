# 🧪 Selenium Automation Testing – SauceDemo

## 📌 Project Overview

This project is an end-to-end automation testing for the SauceDemo website using Selenium WebDriver with JavaScript.

The automation simulates a real user flow from login until completing a purchase (checkout process).

---

## 🔗 Website Under Test
https://www.saucedemo.com/

## 🚀 Tech Stack

* Selenium WebDriver
* JavaScript (Node.js)
* ChromeDriver

---

## 🔄 Test Scenario (E2E Flow)

1. Login with valid credentials
2. Add product to cart
3. Navigate to cart page
4. Fill checkout information
5. Complete checkout process
6. Verify order success
7. Return to product page

---

## ▶️ How to Run

```bash
npm install
node tests/checkout.test.js
```

---

## 📸 Sample Output

```
[STEP] Login berhasil ✅
[STEP] Produk ditambahkan ke cart ✅
[STEP] Masuk halaman cart ✅
[STEP] Data checkout diisi ✅
[STEP] Order berhasil ✅
[STEP] Kembali ke halaman produk ✅
Flow end-to-end sukses 🎯
```

---

## 📂 Project Structure

* `tests/` → Test scripts
* `pages/` → Page Object Model
* `utils/` → Driver setup
---

## 🎯 Key Features

* End-to-End Automation Testing
* Page Object Model (POM) implementation
* Clear logging for each step
* Scalable structure for future test cases

---

## 👨‍💻 Author

Dodi Agam Wicaksono 
