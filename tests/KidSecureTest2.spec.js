import { test, expect, chromium } from '@playwright/test';
import { allure } from 'allure-playwright';
import KidSecureOptions from '../pages/KidSecureOptions.js';
import LoginPage from '../pages/Loginpage.js';
import DashboardPage from '../pages/Dashboard.js';
import KidLayoutpage from '../pages/KidLayoutpage.js';
import Data from '../fixtures/testData.json' assert { type: 'json' };

test('KidSecure End-to-End', async () => {
  test.setTimeout(90000);

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  const launchApp = new KidSecureOptions(page);

  await launchApp.launchApp();
  await launchApp.verifyAppFeatures();
  await launchApp.verifyHomeScreen();
  // await launchApp.verifyFeatures();
  await launchApp.verifyPricing();
  await launchApp.verifyHowItWorks();
  await launchApp.verifyFAQs();

  const newPage = await launchApp.clickParentLogin(context);
    console.log("DEBUG: new page URL:", newPage.url());

  const loginPage = new LoginPage(newPage);
  await loginPage.login(Data.username, Data.password);

  const dashboard = new DashboardPage(newPage);
  await dashboard.verifyDashboardPage();
  

  const layout = new KidLayoutpage(newPage);
  await layout.ManageKid();

  await browser.close();
});
