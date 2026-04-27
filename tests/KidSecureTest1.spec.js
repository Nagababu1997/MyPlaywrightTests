const { test, expect, chromium } = require('@playwright/test');
const { allure } = require('allure-playwright');

const KidSecureOptions = require('../pages/KidSecureOptions');
const LoginPage = require('../pages/Loginpage');
const Data = require('../fixtures/testData.json');
const DashboardPage = require('../pages/Dashboard');
const KidLayoutpage = require('../pages/KidLayoutpage');

let browser;
let context;
let page;
let launchapplication;
// const browser = await chromium.launch({ headless: false });
// const context = await browser.newContext();
// const page = await context.newPage();
// const launchapplication = new KidSecureOptions(page);
test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    launchapplication = new KidSecureOptions(page);
    

});
test('KidSecure Home Page', async () => {

    test.setTimeout(90000);

    await launchapplication.launchApp();
    await launchapplication.verifyAppFeatures();
    // await launchapplication.verifyHomeScreen();

    await launchapplication.clickFeatures();
    await launchapplication.verifyPricing();

    await launchapplication.verifyHowItWorks();

    await launchapplication.verifyFAQs();
// const newPage = await launchapplication.clickParentLogin(context);
    
//         const loginPage = new LoginPage(newPage);
    
//         await loginPage.login(Data.username, Data.password);
    
        


    /*
        //handling new page
        const newPage = await launchapplication.clickParentLogin(context);
    
        const loginPage = new LoginPage(newPage);
    
        await loginPage.login(Data.username, Data.password);
    
        const dashboard = new DashboardPage(newPage);
        await dashboard.verifyDashboardPage();
    
        const layout = new KidLayoutpage(newPage);
        await newPage.waitForTimeout(3000);
        await layout.ManageKid();
        await layout.appAndScreenTime();
        await layout.notifications();
        await layout.printAllowedAppsCount();
        await layout.restrictRandomApp();
        await layout.swapChangeKidJhon();
        await newPage.waitForTimeout(2000);
        await layout.printAllowedAppsCount();
        // await layout.printAllowedApps();
        await layout.profileSettings();
        await layout.profileTable();
        await layout.tableDashboard();
        await layout.moveAppFromRestrictToAllow();
        await layout.deviceLockUnLock();
    
        await newPage.waitForTimeout(3000); // optional wait to see result
        await browser.close();
    
        */

    // await browser.close();
});
test('KidSecure Parent Login Page', async () => {
    test.setTimeout(90000);
    //handling new page
    // const browser = await chromium.launch({ headless: false });
    // const context = await browser.newContext();
    // const page = await context.newPage();

    // const launchapplication = new KidSecureOptions(page);

    const newPage = await launchapplication.clickParentLogin(context);
    const loginPage = new LoginPage(newPage);

    await loginPage.login(Data.username, Data.password);
    // await browser.close();

});
test.afterAll(async () => {
    await browser.close();
});



// 4934053141



/*

test('KidSecure Home Page', async ({ page }) => {
  const launchapplication = new KidSecureOptions(page);
  await launchapplication.launchApp();
  await launchapplication.verifyAppFeatures();
});

test('KidSecure Parent Login Page', async ({ page, context }) => {
  const launchapplication = new KidSecureOptions(page);
  const newPage = await launchapplication.clickParentLogin(context);
  const loginPage = new LoginPage(newPage);
  await loginPage.login(Data.username, Data.password);
});

*/