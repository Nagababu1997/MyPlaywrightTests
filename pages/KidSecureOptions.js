const { expect } = require('@playwright/test');
// import { allure } from "allure-playwright";
const { allure } = require("allure-playwright");
const { resolve } = require("path");
const Helper = require("../pages/Helper");

class KidSecureOptions {
  constructor(page) {
    this.page = page;
    this.appLink = "https://kidsecure.app/";
    this.homeButton = page.locator("//a[@class='nav-link home active']");
    this.featuresButton = page.locator("//a[normalize-space()='Features']");
    this.featuresTitleText = page.locator("//h3[normalize-space()='Features']");
    this.pricingButton = page.locator("//a[normalize-space()='Pricing']");
    this.pricingGetStarted = page.locator("(//button[@data-target='#subscribeModal'])[1]");
    this.howItWorksButton = page.locator("//a[normalize-space()='How it Works?']");
    // FAQ's
    this.faqsButton = page.locator("//a[@href='#faq-block']");
    this.moreButton = page.locator("//a[normalize-space()='More']");
    this.faq1 = page.locator("(//div[@class='accordion-heading'])[1]");
    this.SubscriptionFAQ = page.locator("//div[@class='accordion-heading active']");
    this.allFAQs = page.locator("//div[@class='accordion-heading']");
    // this.faq

    this.loginButton = page.locator(".login-btn");
    this.playstoreDownload = page.locator("//a//img[@class='img-fluid']");
    this.featuresDescriptionTitleText = page.locator("//p[contains(text(),'Get your kids off their mobile')]");
    this.remoteLockOrUnlockText = page.locator("//div[@class='features-sub-inner-sec-1']//h3[@class='sub-heading']");
    this.findMyPhoneText = page.locator("//h3[normalize-space()='Find My Phone']");
    this.moreFeatures = page.locator("//h3[contains(text(),'KidSecure - More Features than')]");
    this.verifyAppLockAndTimeLimits = page.locator("//h3[normalize-space()='AppLock & Time Limits']");
    this.moreFeaturesElement = page.locator("//div[@class='features-more-inner-sec']");
    this.appLockAndTimeLimitText = page.locator("//h3[normalize-space()='AppLock & Time Limits']");
    this.remoteLockUnlockText = page.locator("//h3[normalize-space()='Remote Lock/Unlock Device/Apps']");
    this.screenTimeLimitsText = page.locator("//h3[normalize-space()='Screen Time Limits']");
    this.geofenceText = page.locator("//h3[normalize-space()='Geofence']");
    this.dailyReports = page.locator("//h3[normalize-space()='Daily Reports']");
    this.cellularDataText = page.locator("//h3[normalize-space()='Cellular Data Usage']");
    this.sosAlertsText = page.locator("//h3[normalize-space()='SOS Alerts']");
    this.parentalConsoleText = page.locator("//h3[normalize-space()='Parental Console']");
    this.manyDevicestext = page.locator("//h3[normalize-space()='Many Devices']");

    // Play Store 
    this.getAppNowText = page.locator("//h3[text()='Get the app now']");
    this.appLogo = page.locator("//div[@class='get-app-cont-inner']/img[@class='lazy']");
    this.appDownloadText = page.locator("//p[contains(text(),'Download KidSecure to your device')]");
    this.downloadIcon = page.locator("//a[@class='download-btn gap-2']");
    this.unfoldLabsBrandname = page.locator("//p[@class='copy-right-text']");
    this.privacyPolicy = page.locator("//a[@class='fs-13']");

    // Privacy Policy 
    this.unfoldlabsPrivacyPolicyText = page.locator("//h2[contains(text(),'UnfoldLabs -')]");

    // How it Works?
    this.youtubePlayButton = page.frameLocator("iframe[src*='youtube']");




  }
  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async launchApp() {
    await allure.step("Navigate to the KidSecure.app web portal", async () => {
      const url = this.appLink;
      await allure.step(`Navigate to "${url}"`, async () => {
        await this.page.goto(this.appLink);
      });
      await allure.step(`Expect page title to be "KidSecure"`, async () => {
        await expect(this.page).toHaveTitle('KidSecure');
      });

    });
    await this.sleep(2000);

  }
  async verifyAppFeatures() {
    await allure.step("Verify KidSecure Options", async () => {
      await Helper.verifyElementVisibility(this.homeButton, "Home button");
      // await Helper.compareText(this.homeButton, "Home", "Home button");
      await Helper.verifyElementVisibility(this.featuresButton, "Features button");
      // await Helper.compareText(this.featuresButton, "Features", "Features button");
      await Helper.verifyElementVisibility(this.pricingButton, "Pricing button");
      // await Helper.compareText(this.pricingButton, "Pricing", "Pricing button");
      await Helper.verifyElementVisibility(this.howItWorksButton, "How it Works? button");
      // await Helper.compareText(this.howItWorksButton, "How it Works?", "How it Works? button");
      await Helper.verifyElementVisibility(this.faqsButton, "FAQ's button");
      // await Helper.compareText(this.faqsButton, "FAQ'S", " FAQ'S button");
      await Helper.verifyElementVisibility(this.loginButton, "Parent Login button");
      await Helper.verifyElementVisibility(this.playstoreDownload, "Google Play button on the KidSecure Home Page");
    });
  }
  /*
    async verifyAppFeatures() {
      await allure.step("Verify KidSecure Options", async () => {
        await expect(this.homeButton).toBeVisible();
        await expect(this.featuresButton).toBeVisible();
        await expect(this.pricingButton).toBeVisible();
        await expect(this.howItWorksButton).toBeVisible();
        await expect(this.faqsButton).toBeVisible();
        await expect(this.faqsButton).toBeVisible();
        await expect(this.loginButton).toBeVisible();
        // console.log("Home Option", await this.homeButton.isVisible());
        // console.log("Features Option", await this.featuresButton.isVisible());
        // console.log("Pricing Option", await this.pricingButton.isVisible());
        // console.log("How it Works? Option", await this.howItWorksButton.isVisible());
        // console.log("FAQ's option", await this.faqsButton.isVisible());
        // console.log("Parent Login Option", await this.loginButton.isVisible());
  
      });
      
      await allure.step("Verify and clcik on Features Option", async () => {
        await this.featuresButton.click();
  
      });
  
  
    } */

  async clickFeatures() {
    await allure.step("Click on Features", async () => {
      Helper.clickElement(this.featuresButton, "Features button on the KidSecure Options page to navigate to the Features options");
      await this.sleep(2000);
      await Helper.verifyElementVisibility(this.featuresDescriptionTitleText, "Features discription Text: Get your kids off their mobile phone easily. NOW!");
      await Helper.sleep(2000);
      // await Helper.comapreElementText(this.featuresDescriptionTitleText, "Get your kids off their mobile phone easily. NOW!", "Verify the Get your kids off their mobile phone easily. NOW! description text");
      // await Helper.sleep(2000);
      await Helper.scrollInToView(this.remoteLockOrUnlockText, "Remote Lock/Unlock option");
      await Helper.sleep(2000);
      await Helper.comapreElementText(this.remoteLockOrUnlockText, "Remote Lock/Unlock", "Verify the Remote Lock/Unlock text");
      await Helper.sleep(2000);
      await Helper.scrollInToView(this.findMyPhoneText, "Find My Phone Features option");
      await Helper.sleep(2000);
      await Helper.comapreElementText(this.findMyPhoneText, "Find My Phone", "Verify the Find My Phone text");
      await Helper.scrollInToView(this.moreFeaturesElement, "KidSecure - More Features");
      await Helper.sleep(2000);
      // Helper.sleep(3000);
    });
  }
  async verifyMoreFeatures() {
    await allure.step("Verify KidSecure - More Features", async () => {
      await Helper.verifyElementVisibility1(this.appLockAndTimeLimitText, "Verify the AppLock & Time Limits Feature is visible");
      await Helper.verifyElementVisibility1(this.remoteLockUnlockText, "Verify the Remote Lock/Unlock Device/Apps Feature is visible");
      await Helper.verifyElementVisibility1(this.screenTimeLimitsText, "Verify the Screen Time Limits Feature is visible");
      await Helper.verifyElementVisibility1(this.geofenceText, "Verify the  Geofence Feature is visible");
      await Helper.verifyElementVisibility1(this.dailyReports, "Verify the Daily Reports Feature is visible");
      await Helper.verifyElementVisibility1(this.cellularDataText, "Verify the Cellular Data Usage Feature is visible");
      await Helper.verifyElementVisibility1(this.sosAlertsText, "Verify the SOS Alerts Feature is visible");
      await Helper.verifyElementVisibility1(this.parentalConsoleText, "Verify the Parental Console Feature is visible");
      await Helper.verifyElementVisibility1(this.manyDevicestext, "Verify the Many Devices Feature is visible");
    });
  }
  async verifyMoreFeatures1() {
    await allure.step("Verify KidSecure-More Features", async () => {
      // await Helper.scrollInToView(this.moreFeaturesElement,"KidSecure - More Features");
      const moreFeatures = this.page.locator("//div[@class='feature-content ']//h3");

      const count = await moreFeatures.count();
      const expecterMoreFeatures = [
        "AppLock & Time Limits",
        "Remote Lock/Unlock Device/Apps",
        "Screen Time Limits",
        "Geofence",
        "Daily Reports",
        "Cellular Data Usage",
        "SOS Alerts"
      ]
      for (let i = 0; i < count; i++) {
        const element = await moreFeatures.nth(i).innerText();
        const expectedText = expecterMoreFeatures[i];
        // const description = `Feature ${i+1}`;
        const description = `Feature ${i + 1}`;
        await Helper.compareText(element, expectedText, description);
      }
    })
  }
  async verifyPricing() {
    await allure.step("Click on Pricing", async () => {
      // await this.pricingButton.click();
      await Helper.sleep(2000);
      await Helper.clickElement(this.pricingButton, "Pricing option on the KidSecure options page to navigate to the Pricing options");
      await Helper.scrollInToView(this.pricingGetStarted, "Pricing Get Started");
      // await this.page.waitForTimeout(1000);
      await Helper.sleep(2000);
    });

  }
  async verifyHowItWorks() {
    await allure.step("Click on the How it Works?", async () => {

      await Helper.clickElement(
        this.howItWorksButton,
        "How it Works? option on the KidSecure options page"
      );

      // Wait for iframe
      const iframe = this.page.locator("iframe[src*='youtube']");
      await iframe.waitFor({ state: "visible" });
      await Helper.logStep("Video iframe is displayed after clicking the 'How it Works?' option");


      // Click on iframe (not frameLocator)
      await iframe.click();
      await Helper.logStep("Clicked the video play button to start playback");

      await Helper.sleep(6000)
      // Press 'f' for fullscreen (YouTube shortcut)
      await this.page.keyboard.press('f');
      await Helper.logStep("Video switched to fullscreen mode after pressing 'F'");
      await Helper.sleep(4000)
      // Exit fullscreen (ESC)
      await this.page.keyboard.press('f');
      await Helper.sleep(3000)
      await Helper.logStep("Video exited fullscreen mode after pressing 'Esc'");

      await iframe.click();
      await Helper.logStep("Video playback paused after clicking on the video");

      // Get video URL
      const src = await iframe.getAttribute("src");

      if (!src) {
        throw new Error("YouTube iframe src not found");
      }

      // Convert embed URL → YouTube watch URL
      const youtubeUrl = src.replace("embed/", "watch?v=");

      // Open in new tab
      const [ytPage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.page.evaluate((url) => window.open(url, '_blank'), youtubeUrl)

      ]);
      await Helper.logStep("Navigated to YouTube in a new tab after selecting the 'Play on YouTube' option");
      await ytPage.waitForLoadState();

      // Perform actions on YouTube page
      await ytPage.keyboard.press('k'); // Play video
      await Helper.logStep("Played the video in a new tab after clicking the YouTube option");


      // Click Settings (now it works because it's youtube.com page)
      // await ytPage.locator('button[aria-label="Settings"]').click();

      // Optional wait
      await ytPage.waitForTimeout(4000);

      // Close YouTube tab
      await ytPage.close();
      await Helper.logStep("Closed the YouTube tab after video playback");


      // Switch back
      await this.page.bringToFront();
      await Helper.logStep("Navigated back to the home page after closing the YouTube tab");

    });
  }



  // await this.howItWorksButton.click();
  // await this.page.waitForTimeout(1000);


  async verifyFAQs() {
    await allure.step("Click on the FAQ's", async () => {
      // await this.faqsButton.click();
      await Helper.clickElement(this.faqsButton, "FAQ's option on the KidSecure options page to navigate to the FAQ's");
      // await this.page.waitForTimeout(1000);
      await Helper.sleep(2000);
      await Helper.clickElement(this.moreButton, "Click on the More button to navigate to the FAQ's page")

    });

  }

  // FIXED VERSION
  async clickMoreFAQs(context) {
    let newPage;

    await allure.step("Verify and click on the More FAQ's button", async () => {
      // Wait for the new tab to open
      const [pagePromise] = await Promise.all([
        context.waitForEvent('page'),
        // await Helper.clickElement(this.moreButton,"Click on the More button to navigate to the FAQ's page"),
        // await Helper.clickElement(this.faq1, "How to get a Subscription Plan in KidSecure?")
      ]);


      // Wait until the new page loads fully
      await pagePromise.waitForLoadState('domcontentloaded');

      console.log("New tab opened:", await pagePromise.title());
      console.log("New tab URL:", pagePromise.url());

      newPage = pagePromise; // store the page for return
    });

    // Return outside the Allure step
    return newPage;
  }
  async clickFAQ() {
    await allure.step("Click on a FAQ", async () => {
      await Helper.sleep(3000);

      await Helper.clickElement(this.SubscriptionFAQ, " on How to get a Subscription Plan in KidSecure? FAQ")
      console.log("Click on the How to get a Subscription Plan in KidSecure? FAQ");
      await Helper.sleep(3000);

    });
  }
  async KidSecureFAQsPage() {
    await allure.step("Verify the total FAQ's on the KidSecure FAQ's page", async () => {
      const allFAQsCount = await this.allFAQs.count();
      console.log("All FAQ's on the KidSecure FAQ's page:", allFAQsCount);
      await allure.step(`All FAQ's on the KidSecure FAQ's page: ${allFAQsCount}`, async () => {
      });
    });
  }

  //  async printAllowedAppsCount() {
  //   await allure.step('Verify Total Allowed Apps', async () => {
  //     const allowedAppsCount = await this.allowedAppsCount.count();
  //     console.log("Allowed Apps Count:", allowedAppsCount);
  //     await allure.step(`Allowed Apps Count: ${allowedAppsCount}`, async () => {

  //   });

  async clickParentLogin1(context) {
    await allure.step("Verify and click on the ParentLogin button", async () => {

      // Click and wait for the new page to open
      const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        // this.page.click("//button[normalize-space()='Parent Login']") // adjust your locator
        await Helper.clickElement(this.loginButton, "ParentLogin button")
      ]);

      // Wait until the new page is fully loaded
      await newPage.waitForLoadState();

      console.log("New tab opened:", await newPage.title());
      return newPage;
      /*
            // Wait for new page (tab)
            const newPagePromise = context.waitForEvent('page');
            // await this.loginButton.click();
            Helper.clickElement(this.loginButton,"ParentLogin button");
      
            // Get new page instance
            const newPage = await newPagePromise;
            await newPage.waitForLoadState('domcontentloaded');
      
            // await newPage.waitForTimeout(2000);
            await this.sleep(2000);
            console.log("New tab opened:", await newPage.title());
      
            // Return the new page instance
            return newPage;
            */
    });
  }
  //   async allowPermission(context){
  //     let newPage;
  //     const context = await browser.newPage({
  //   permissions: [], // No geolocation
  // });
  //   }
  // FIXED VERSION
  async clickParentLogin(context) {
    let newPage;

    await allure.step("Verify and click on the Parent Login button", async () => {
      // Wait for the new tab to open
      const [pagePromise] = await Promise.all([
        context.waitForEvent('page'),
        await Helper.clickElement(this.loginButton, "Parent Login button")
      ]);

      // Wait until the new page loads fully
      await pagePromise.waitForLoadState('domcontentloaded');

      console.log("New tab opened:", await pagePromise.title());
      console.log("New tab URL:", pagePromise.url());

      newPage = pagePromise; // store the page for return
    });

    // Return outside the Allure step
    return newPage;
  }

}

module.exports = KidSecureOptions;
