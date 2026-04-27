const { test, expect, chromium } = require('@playwright/test');
const { allure } = require('allure-playwright');
const { mobileTest } = require('../fixtures/mobileAppiumFixture');
// const { PremiumGeofence } = require('../pages/PremiumGeofence');
const KidSecureOptions = require('../pages/KidSecureOptions');
const LoginPage = require('../pages/Loginpage');
const DashboardPage = require('../pages/Dashboard');
const KidLayoutpage = require('../pages/KidLayoutpage');
const Data = require('../fixtures/testData.json');
const InvalidData = require('../fixtures/testInvalidData.json');
const PremiumGeofence = require('../pages/PremiumGeofence');
const AppLockAndTimeLimits = require('../pages/AppLockAndTimeLimits')

const Helper = require('../pages/Helper');
const { dir } = require('console');
test.use({ video: 'on' });
test.describe.serial('KidSecure Web Automation', () => {

  let browser, context, page, homePage, kidsecure, loginPage, dashboard, layout, geofence, appLockTimeLimits;

  // test.beforeAll(async () => {
  //   // Launch browser once
  //   browser = await chromium.launch({ headless: false });

  //   context = await browser.newContext();
  //   recordVideo: {dir:'test-results/videos'};
  //   page = await context.newPage();
  //   homePage = page; // STORE HOME PAGE

  //   kidsecure = new KidSecureOptions(page);

  //   // Step 1: Launch the app
  //   await kidsecure.launchApp();
  // });

  test.beforeAll(async () => {
    browser = await chromium.launch({
      headless: process.env.CI ? true : false
    });
    context = await browser.newContext({
      permissions: [], // deny geolocation
    });

    page = await context.newPage();
    homePage = page;

    kidsecure = new KidSecureOptions(page);

    await kidsecure.launchApp();
  });




  test('Step 01: Verify Home Page and click on Parent Login', async () => {
    await kidsecure.verifyAppFeatures();

    await kidsecure.clickFeatures();
    await kidsecure.verifyMoreFeatures();
    await kidsecure.verifyPricing();
    await kidsecure.verifyHowItWorks();
    await kidsecure.verifyFAQs();

    // Store newPage for next tests
    // FIRST get the new FAQ page
    const faqPage = await kidsecure.clickMoreFAQs(context);

    // Then assign it
    page = faqPage;
    kidsecure = new KidSecureOptions(page);
    await kidsecure.clickFAQ();
    await kidsecure.KidSecureFAQsPage();
    //  Close FAQ tab
    await page.close();

    // Switch BACK to home page
    page = homePage;
    kidsecure = new KidSecureOptions(page);

  });

  test('Step 02: Verify Login Page is displayed after clicking on Parent Login', async () => {
    // Store newPage for next tests
    // page = newPage;
    // Click "Parent Login" and get the new page
    const newPage = await kidsecure.clickParentLogin(context);
    page = newPage;

    loginPage = new LoginPage(newPage);

    // Store newPage for next tests
    page = newPage;
    // Use test data for credentials
    await loginPage.verifyLoginPageElements();
    // await loginPage.LoginWithInvalidEmailID(InvalidData.username, InvalidData.password);
    // await loginPage.loginWithInvalidPasscode(Data.username, InvalidData.password);
    // await loginPage.login(Data.username, Data.password);


  });

  test('Step 03: Enter invalid Email ID and valid PIN, and verify the toast message', async () => {
    await loginPage.LoginWithInvalidEmailID(InvalidData.username, InvalidData.password);

  });
  test('Step 04: Enter valid Email ID and invalid PIN, and verify the toast message', async () => {
    await loginPage.loginWithInvalidPasscode(Data.username, InvalidData.InvalidPasscode);

  });
  test('Step 05: Enter valid Email ID and valid PIN, and navigate to the Dashboard Page', async () => {
    await loginPage.login(Data.username, Data.password);

  });
  test('Step 06: Verify Dashboard Page elements after successful login', async () => {
    // Initialize dashboard with same page
    dashboard = new DashboardPage(page);

    // Verify dashboard loaded
    await dashboard.verifyDashboardPage();
    await dashboard.clickOnManageDevice();
  });

  test('Step 07: Verify and click on Click Here to Manage Device option', async () => {
    // Initialize layout on same page
    layout = new KidLayoutpage(page);

    // Perform some actions
    await layout.ManageKid();

    await layout.notifications();
    // await layout.profileSettings();
  });
  test('Step 08: Verify Swap Kid functionality', async () => {
    await layout.swapKids()
  })
  test('Step 09: Verify Allowed Apps count', async () => {
    await layout.printAllowedAppsCount();
  });
  test('Step 10: Move a random application from Allowed to Restricted and Restricted to Allowed', async () => {
    await layout.restrictRandomApp();
    await layout.moveAppFromRestrictToAllow()

  });
  test('Step 11: Verify App Lock and Time Limits functionality', async () => {
    await layout.verifyAppLockAndTimeLimits();
  });
  test('Step 12: Verify Screen Time Limits', async () => {
    await layout.ScreenTimeLimits();
  });
  /*test('Step 11: AppLock & Time Limits', async ()=>{
    appLockTimeLimits= new AppLockAndTimeLimits(page)
    await appLockTimeLimits.setAppTimeLimits()
  })
    */
  test('Step 13: Verify Manage Geofence functionality', async () => {
    await layout.manageGeofence();
    // geofence = new PremiumGeofence(page);
    // await geofence.setGeofence()

  });
  test('Step 14: Verify Lock Device functionality', async () => {
    await layout.lockDevice();
  });
  test('Step 15: Verify Find My Phone functionality', async () => {
    await layout.FindMyPhoneScenario();
  });
  test('Step 16: Verify Unlock Device functionality', async () => {
    await layout.UnlockDevice();
  });
  test('Step 17: Verify Reports section', async () => {
    await layout.Reports();
  });
  test('Step 18: Verify Feedback section', async () => {
    await layout.Feedback();
  });
  test('Step 19: Verify Account Settings section', async () => {
    await layout.profileTable()
  })

  test('Step 20: Verify Logout functionality', async () => {
    //  await layout.Logout();
    await layout.profileLogout();
    //  await layout.profileTable();
  });



  //   test('step 10: Allow one application in to Allowed to Restricted', async ({ layout, mobileApp }) => {
  //   // Run Appium verification
  //   await mobileApp.verifyRestriction();

  //   console.log("✓ App Restriction validated on real device");
  // });

  test.afterAll(async () => {
    if (browser) {
      await browser.close();
    }
  });

});


