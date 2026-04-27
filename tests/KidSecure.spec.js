const { test, expect, chromium } = require('@playwright/test');
const Dashboard = require('../pages/KidSecureDashboard');
const LoginPage = require('../pages/Loginpage');
const Data = require('../fixtures/testData.json');
const DashboardPage = require('../pages/Dashboard');
const KidLayout = require('../pages/KidLayoutpage');
const basepage = require('../pages/BasePage1');
// import { KidSecureOptions } from '../pages/KidSecureOptions';
// const KidSecureOptions = require('../pages/KidSecureOptions');
// const kidSecureOptions = require('../pages/KidSecureOptions');
// const kidOptios = require('../pages/KidSecureOptions');
const KidSecureOptions = require('../pages/KidSecureOptions');
// const Dashboard = require('../pages/KidSecureDashboard');

test('KidSecure Web', async () => {

    test.setTimeout(90000);

    //  const newPage = await KidSecurePage();

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    // const base = new basepage(page);
    const options = new KidSecureOptions(page);
    // const loginPage = new LoginPage(page);
    const dashboardpage = new DashboardPage(page);
    const kidLayout = new KidLayout(page);

    // step 1 launch KidSecure URL

    await options.launchApp();
    await options.clickParentLogin();
    const newPagePromise = context.waitForEvent('page');
    const newPage = await newPagePromise;
    await newPage.waitForLoadState();

    // step 2 verify Login page
    const loginPage = new LoginPage(newPage);
    await loginPage.login(Data.username, Data.password);
    await page.waitForTimeout(3000)

    // step 3 verify Dashboard page
    // const dashboardpage = new DashboardPage(page);
    await dashboardpage.verifyDashboardPage();
    await page.waitForTimeout(3000)

    // step 4 verify Kid Layout Page
    // const kidLayout = new KidLayout(page);
    await kidLayout.ManageKid();
    await kidLayout.appAndScreenTime();
    await kidLayout.notifications();
    await kidLayout.printAllowedAppsCount();
    await kidLayout.restrictRandomApp();
    await kidLayout.swapChangeKidJhon();
    await kidLayout.printAllowedAppsCount();
    // await kidLayout.printAllowedApps();
    await kidLayout.profileSettings();
    await kidLayout.profileTable();
    await kidLayout.tableDashboard();
    await kidLayout.moveAppFromRestrictToAllow();
    await kidLayout.deviceLockUnLock();


    await page.waitForTimeout(3000)

})