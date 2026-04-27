const { expect } = require("@playwright/test");
const Helper = require('../pages/Helper');
const { allure } = require("allure-playwright");

class LoginPage {
  constructor(page) {
    this.page = page;
    // super(page);
    this.titleText = page.locator("(//img[@class='login-logo'])[1]"); // better CSS locator  (//img[@class='login-logo'])[1]
    this.signUpText = page.locator("//span[@class='c-8A2']");
    this.emailText = page.locator("//label[normalize-space()='Email ID']");
    this.welcomeText = page.locator("//h3[normalize-space()='Welcome!']");
    this.PINText = page.locator("//label[normalize-space()='PIN']");
    this.userEmailField = page.locator("//input[@id='userName']");      // added # for id
    this.passwordField = page.locator("#passWord");
    this.loginButton = page.locator("#loginBTN");
  }

  async goto() {
    await this.page.goto("https://kidsecure.app/login", {
      // waitUntil: "domcontentloaded",
      timeout: 60000
    });

  }

  async verifyLoginPageElements() {
    await allure.step('Verify Login Page UI Elements', async () => {
      await this.userEmailField.waitFor({ state: 'visible', timeout: 10000 });
      await Helper.sleep(2000);
      await Helper.verifyElementVisibility(this.signUpText, "Sign up button");
      await Helper.verifyElementVisibility(this.welcomeText, "Welcome! text");
      await Helper.verifyElementVisibility(this.emailText, "Email ID text");
      await Helper.verifyElementVisibility(this.PINText, "PIN text");
      await Helper.verifyElementVisibility(this.userEmailField, "Enter Email ID");
      await Helper.verifyElementVisibility(this.passwordField, "Enter PIN");
      await Helper.verifyElementVisibility(this.loginButton, "Login button");

    });

  }
  async LoginWithInvalidEmailID(userName, password) {
    await allure.step('Login with invalid Email ID', async () => {
      await Helper.clickElement(this.userEmailField, "Email ID field");
      await Helper.sendKeys(this.userEmailField, userName, "invalid email address");
      await Helper.clickElement(this.passwordField, "PIN field");
      await Helper.sendKeys(this.passwordField, password, "PIN");
      await Helper.clickElement(this.loginButton, "Login button");
      await Helper.sleep(2000);
      await Helper.verifyToastMessage(this.page, 'Please Enter Registered Email ID', 'Please Enter Registered Email ID toast validation');
      await Helper.sleep(3000);

    });

  }
  async loginWithInvalidPasscode(userName, password) {
    await allure.step('Login with invalid PIN', async () => {
      await Helper.clickElement(this.userEmailField, "Email ID field");
      await Helper.sendKeys(this.userEmailField, userName, "valid email address");
      await Helper.clickElement(this.passwordField, "PIN field");
      await Helper.sendKeys(this.passwordField, password, "invalid PIN");
      await Helper.clickElement(this.loginButton, "Login button");
      await Helper.sleep(2000);
      await Helper.verifyToastMessage(this.page, 'Please Enter Valid Passcode', 'Please Enter Valid Passcode toast validation');
      await Helper.sleep(3000);
    });
  }

  async login(userName, password) {
    await allure.step('Login with valid credentials', async () => {
      // Actions
      await Helper.clickElement(this.userEmailField, "Email ID field");
      await Helper.sendKeys(this.userEmailField, userName, "valid email address");
      await Helper.clickElement(this.passwordField, "PIN field");
      // await this.passwordField.fill(password);
      await Helper.sendKeys(this.passwordField, password, "PIN");
      // await this.loginButton.click();
      await Helper.clickElement(this.loginButton, "Login button to navigate to the Dashboard page");

    });

  }
}

module.exports = LoginPage;
