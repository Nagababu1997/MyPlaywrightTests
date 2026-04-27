const { expect } = require("@playwright/test");
const Hellper = require('../pages/Helper');
const { allure } = require("allure-playwright");
const Helper = require("../pages/Helper");
const { FindMyPhone } = require('../Locators/FindMyPhone');
const { Reports } = require('../Locators/Reports');
const { Feedback } = require('../Locators/Feedback');
const { Logout } = require('../Locators/Logout');
// const { swapKid } = require('../Locators/SwapKid')

// const FindMyPhone = require('../Locators/FindMyPhone');
// import { getToastMessage } from "../utils/helper";

class Layout {
  constructor(page) {
    this.page = page;
    this.findMyPhone = new FindMyPhone(page);
    this.reports = new Reports(page);
    this.feedback = new Feedback(page);
    this.logout = new Logout(page);
    this.FindMyPhoneButton = page.locator("//span[text()='Find My Phone']");

    // Locators
    this.manageAppsButton = page.locator("//span[normalize-space()='Manage Apps']");
    this.manageGeofenceButton = page.locator("//span[normalize-space()='Manage Geofence']");
    this.deviceLockUnlockButton = page.locator("//span[normalize-space()='Device Lock/Unlock']");
    this.findMyPhoneButton = page.locator("//span[normalize-space()='Find My Phone']");
    this.reportsButton = page.locator("//span[normalize-space()='Reports']");
    this.feedbackButton = page.locator("//span[normalize-space()='Feedback']");
    this.dashboardButton = page.locator("//a[normalize-space()='Dashboard']");
    this.kidNameDropdownButton = page.locator("//button[@id='dropdownMenuButton1']");
    this.swapKidOliva = page.locator("(//a[normalize-space()='Oliva'])[1]");
    this.swapKidJhon = page.locator("(//a[normalize-space()='Jhon'])[1]");
    this.swapKidHoneyy = page.locator("(//a[normalize-space()='Jhon'])[1]");
    this.swapKidDeeps = page.locator("(//a[normalize-space()='Deeps'])[1]");
    this.swapKidCalry = page.locator("(//a[normalize-space()='Calry'])[1]");
    this.allAppsButton = page.locator("(//button[normalize-space()='All Apps'])[1]");
    // AppLock & Time LImits 
    this.appLockAndTimeLimitsButton = page.locator("(//button[normalize-space()='AppLock & Time Limits'])[1]");
    this.allowedAllTime = page.locator("//span[normalize-space()='Allowed all time']");
    this.appLockAndTimeLimitsIcon = page.locator("(//div[@class='actions-apps d-flex gap-2 flex-column'])[1]");
    this.downloadAppPopup = page.locator("(//a[@class='download-popupa'])[2]");
    this.downloadPopupCloseButton = page.locator("(//button[@aria-label='Close'])[11]");



    // Screen Time Limits 
    this.screeTimeLimitsButton = page.locator("(//button[normalize-space()='Screen Time Limits'])[1]");
    this.setScreenTimeLimits = page.locator("//span[normalize-space()='Set the time to lock all apps']");
    this.downloadKidSeureScreenTimeLimits = page.locator("(//a[@class='download-popupa'])[3]");
    this.setTimeLimitsCloseButton = page.locator("(//button[@aria-label='Close'])[12]");

    // Manage Geofence 
    this.geofenceAccessOkButton = page.locator("//button[normalize-space()='Ok']");
    this.geofenceAccessPrmissionPopupCloseIcon = page.locator("(//button[@aria-label='Close'])[2]");
    this.geofenceLocationImage = page.locator("//img[@src='assets/images/geo-modal.svg']");
    this.geofenceAccessRequiredText = page.locator("//h3[normalize-space()='Geofence Access Required']");
    this.geofenceDescriptionText = page.locator("//p[text()='This feature requires access to your location. Please grant permission.']");
    this.clickHereToCreateGeofence = page.locator("//button[@id='add-geo-btn1']");
    this.setGeofenceText = page.locator("//h3[text()='Set Geofence']");
    this.setGeofenceLogo = page.locator("//img[@src='assets/images/payment-subscription.svg']");
    this.setGeofenceClosePopupIcon = page.locator("(//button[@class='btn-close'])[5]");
    this.setGeofenceDownloadKidSecure = page.locator("//a[@class='download-popupa']");
    this.geofencePaymentStep1 = page.locator("div[id='geofence-payment'] li:nth-child(1)");
    this.geofencePaymentStep2 = page.locator("div[id='geofence-payment'] li:nth-child(2)");
    this.geofencePaymentStep3 = page.locator("div[id='geofence-payment'] li:nth-child(3)");
    this.staySafeAndSecureText = page.locator("//h4[text()='Stay Safe and Secure.']");
    this.setGeofencePremiumDescriptinText = page.locator("div[id='geofence-payment'] p[class='content-para m-0']");
    this.downloadKidSecureDescriptionText = page.locator("div[class='contetn-popupa'] p");
    // DeviceLock/Unlock 
    this.UnlockDeviceText = page.locator("//p[text()='Your Device is Unlocked']");
    this.LockedDeviceText = page.locator("//p[text()='Your Device is Locked']");
    this.LockedStateImageIcon = page.locator("(//img[@id='deviceStatusIMG'])[1]");

    // this.unlockDeviceTitleText = page.locator("//div//h5[text()='Unlock Device']");
    this.UnlockedStateImageIcon = page.locator("//img[@id='deviceStatusIMG']");
    this.UnlockDeviceButton = page.locator("//span[text()='Unlock Device']");
    this.LockeDeviceButton = page.locator("//span[text()='Lock Device']");

    this.UnlockedlogoText = page.locator("//p[text()='Unlocked']");
    this.LockedLogoText = page.locator("//p[text()='Locked']");
    this.LockedUnLockedTime = page.locator("(//span[@id='deviceStatusTextDate'])[1]");
    this.DeviceLockedNotification = page.locator("(//p[@class='notificatin-content'][normalize-space()='Device Locked'])[1]");
    this.DeviceUnlokedNotification = page.locator("(//p[@class='notificatin-content'][normalize-space()='Device Unlocked'])[1]");




    // this.parentLoginId = page.locator("(//a[normalize-space()='kidsecure.qa'])[1]");
    this.parentLoginId = page.locator("(//a[normalize-space()='nagababunsn'])[1]");


    this.notificationsLogo = page.locator("//img[@src='assets/images/notification.svg']");
    this.notificationText = page.locator("//a[@id='notificationId12']//span[@class='notification-time'][normalize-space()='Sep 05, 2025 10:23']");
    this.closeButton = page.locator("(//small[normalize-space()='Close'])[1]");
    this.allowedAppsCount = page.locator("//div[@class='in-apps-disabled d-flex flex-column ']");
    this.allAppsSearchField = page.locator("#searchInput");
    this.restrictedAppLocator = page.locator("//div[@id='style-1-apps']//img[@class='app-icon com.android.chrome']")
    this.appRestrictIcon = page.locator("(//span[@class='close-icon-app flex-center-all rounded-circle'])[1]");
    this.restrictNoButton = page.locator("#noButtonId");
    this.restrictYesButton = page.locator("#allowBlockedModalConfirmBTN");
    this.lockDeviceButton = page.locator("deviceStatusTextBTN");
    this.lockDeviceYesButton = page.locator("//button[@id='lockUnlockBTN']");
    this.lockDeviceNoButton = page.locator("//button[@class='btn bg-none text-black-50' and text()='No']");

    // SwapKids
    this.kidsMenuOption = page.locator("//button[@id='dropdownMenuButton1']")

    this.selectKidId2494James = page.locator("//li//a[@id='2494' and @class='dropdown-item text-capitalize active']")
    this.selectKidId2494JamesActive = page.locator("//li//a[@id='2494' and @class='dropdown-item text-capitalize active']")

    this.selectKidId2914Deepu = page.locator("//li//a[@id='2914' and @class='dropdown-item text-capitalize']")
    this.selectKidId2914DeepuActive = page.locator("//li//a[@id='2914' and @class='dropdown-item text-capitalize active']")

    this.selectKidId2916Krish = page.locator("//li//a[@id='2916' and @class='dropdown-item text-capitalize']")
    this.selectKidId2916KrishActive = page.locator("//li//a[@id='2916' and @class='dropdown-item text-capitalize active']")

    this.selectKidId3620Antony = page.locator("//li//a[@id='3620' and @class='dropdown-item text-capitalize']")
    this.selectKidId3620AntonyActive = page.locator("//li//a[@id='3620' and @class='dropdown-item text-capitalize active']")

    this.selectKidId2172Naga = page.locator("//li//a[@id='2172' and @class='dropdown-item text-capitalize']")
    this.selectKidId2172NagaActive = page.locator("//li//a[@id='2172' and @class='dropdown-item text-capitalize active']")



  }

  async ManageKid() {
    // Assertions
    // await Hellper.sleep(2000);
    await Hellper.sleep(2000);
    await this.allAppsButton.waitFor({ state: 'visible', timeout: 10000 });

    // console.log("ManageAppsButton", await this.manageAppsButton.isVisible());
    await Hellper.verifyElementVisibility1(this.manageAppsButton, "Verify Manage Apps option visible on the Kid profile page");
    // console.log("ManageGeofenceButton", await this.manageGeofenceButton.isVisible());
    await Hellper.verifyElementVisibility1(this.manageGeofenceButton, "Verify Manage Geofence option visible on the Kid profile page");
    // console.log("DeviceLockUnlock", await this.deviceLockUnlockButton.isVisible());
    await Hellper.verifyElementVisibility1(this.deviceLockUnlockButton, "Verify Device Lock/Unlock option visible on the Kid profile page");
    // console.log("FindMyPhone", await this.findMyPhoneButton.isVisible());
    await Hellper.verifyElementVisibility1(this.findMyPhoneButton, "Verify Find My Phone option visible on the Kid profile page");
    // console.log("ReportsButton", await this.reportsButton.isVisible());
    await Hellper.verifyElementVisibility1(this.reportsButton, "Verify Reports option visible on the Kid profile page");
    // console.log("FeedbackButton", await this.feedbackButton.isVisible());
    await Hellper.verifyElementVisibility1(this.feedbackButton, "Verify Feedback option visible on the Kid profile page");
    // console.log("Dashboard", await this.dashboardButton.isVisible());
    await Hellper.verifyElementVisibility1(this.dashboardButton, "Verify Dashboard button visible on the Kid profile page");
    // console.log("KidNameDropdownButton", await this.kidNameDropdownButton.isVisible());
    await Hellper.verifyElementVisibility1(this.kidNameDropdownButton, "Verify kids selection menu option visible on the Kid profile page");
    // console.log("AllAppsButton", await this.allAppsButton.isVisible());
    await Hellper.verifyElementVisibility1(this.allAppsButton, "Verify All Apps button visible on the Kid profile page");
    // console.log("AppLockAndTimeLimitsButton", await this.appLockAndTimeLimitsButton.isVisible());
    await Hellper.verifyElementVisibility1(this.appLockAndTimeLimitsButton, "Verify AppLock & Time Limits button on the Kid profile page");
    // console.log("ScreenTimeLimitsButton", await this.screeTimeLimitsButton.isVisible());
    await Hellper.verifyElementVisibility1(this.screeTimeLimitsButton, "Verify Screen Time Limits button on the Kid profile page");
    // console.log("ParentLoginId", await this.parentLoginId.isVisible());
    // await Hellper.verifyElementVisibility1(this.parentLoginId, "Verify Login Email  on the Kid's profile page");
    // console.log("NotificationLogo", await this.notificationsLogo.isVisible());
    // await Hellper.verifyElementVisibility1(this.notificationsLogo, "Verify the Notifications logo on the Kid's profile page");

  }

  async swapKids() {

    const kids = ["James", "Deepu", "Krish", "Antony", "Naga"];

    await allure.step("Swap between all kids", async () => {

        for (const kid of kids) {
            await Helper.switchKid(this.page, kid);
            await Helper.sleep(5000)
        }

    });
}


  async notifications() {
    await Hellper.sleep(2000);
    // this.notificationsLogo.click();
    await Hellper.clickElement(this.notificationsLogo, "Notifications icon to verify latest notifications");
    await Hellper.sleep(2000);
    // console.log("Close Button", await this.closeButton.isVisible());
    await Hellper.verifyElementVisibility1(this.closeButton, "Verify Close button visible on the notifications pop-up");
    // this.closeButton.click();
    await Hellper.clickElement(this.closeButton, "Close button on the notifications");
    // await this.allAppsButton.click();
    await Hellper.clickElement(this.allAppsButton, "All Apps button");
    // await this.page.waitForTimeout(2000)
  }
  async appAndScreenTime() {
    this.appLockAndTimeLimitsButton.click();
    await Hellper.sleep(2000);
    this.screeTimeLimitsButton.click();
  }
  async swapChangeKidJhon() {
    await Hellper.sleep(2000);
    this.kidNameDropdownButton.click();
    await Hellper.sleep(2000);
    this.swapKidJhon.click();
    await Hellper.sleep(2000);
  }
  async printAllowedAppsCount() {
    await allure.step('Verify Total Allowed Apps', async () => {
      const allowedAppsCount = await this.allowedAppsCount.count();
      console.log("Allowed Apps Count:", allowedAppsCount);
      await allure.step(`Allowed Apps Count: ${allowedAppsCount}`, async () => {
      });
    });

  }

  // New method
  async printAllowedApps() {
    const count = await this.allowedAppsCount.count();
    console.log("Total Allowed Apps:", count);

    for (let i = 0; i < count; i++) {
      const appName = await this.allowedAppsCount.nth(i).innerText();
      console.log(`App ${i + 1}: ${appName}`);
    }
  }
  async profileSettings() {
    // await this.parentLoginId.click();
    await Helper.clickElement(this.parentLoginId, "Login email Id to verify the Settings and Logout options");
    await Helper.verifyElementVisibility(this.page.locator("//a[@class='dropdown-item p-2']//span[normalize-space()='Settings']"), "Settings Option");
    await Helper.sleep(2000);
    await Helper.verifyElementVisibility(this.page.locator("//span[normalize-space()='Logout']"), "Logout option");
    await Helper.sleep(2000);
    await Helper.clickElement(this.page.locator("//a[@class='dropdown-item p-2']//span[normalize-space()='Settings']"), "Settings option to navigate to the Kid details page");

    // await this.page.locator("//a[@class='dropdown-item p-2']//span[normalize-space()='Settings']").click();
    await Hellper.sleep(2000);
  }
  async profileLogout() {
    // await this.parentLoginId.click();
    await Helper.clickElement(this.parentLoginId, "on parental email to navigate to the Settings and Logout options");
    await Helper.verifyElementVisibility(this.page.locator("//a[@class='dropdown-item p-2']//span[normalize-space()='Settings']"), "Settings Option");
    await Helper.sleep(2000);
    await Helper.verifyElementVisibility(this.page.locator("//span[normalize-space()='Logout']"), "Logout option");
    await Helper.sleep(2000);
    await Helper.clickElement(this.page.locator("//span[normalize-space()='Logout']"), "Logout option to navigate to the Logout confirmation page");
    await Helper.verifyElementVisibility(this.logout.verifyLogoutDescriptionText, "Are you sure you want to Logout? pop-up");
    await Helper.verifyElementVisibility(this.logout.verifyYesConfirmationButton, "Logout confirmation Yes button");
    await Helper.verifyElementVisibility(this.logout.verifyConfirmationNoButton, "Logout confirmation No button");
    await Helper.sleep(2000);
    await Helper.clickElement(this.logout.verifyYesConfirmationButton, 'the “Yes” button on the confirmation pop-up to navigate back to the login page');

    // await this.page.locator("//a[@class='dropdown-item p-2']//span[normalize-space()='Settings']").click();
    await Hellper.sleep(2000);
  }
  async profileTable() {
    await Helper.clickElement(this.parentLoginId, "on parental email and verify the Settings and Logout options");
    // await Helper.verifyElementVisibility(this.page.locator("//a[@class='dropdown-item p-2']//span[normalize-space()='Settings']"), "Settings Option");
    await Helper.clickElement(this.page.locator("//a[@class='dropdown-item p-2']//span[normalize-space()='Settings']"), "on Settings option")
    await Helper.sleep(2000);
    const table = this.page.locator("#settingsTableId");
    const columns = table.locator("tbody tr th");
    const rows = table.locator("tbody tr");

    const columnCount = await columns.count();
    const rowCount = await rows.count();

    await allure.step("Profile Table Validation", async () => {

      // Column validation
      await allure.step(`No of columns: ${columnCount}`, async () => { });
      expect(columnCount).toBe(5);

      // Row validation
      await allure.step(`No of rows: ${rowCount}`, async () => { });
      expect(rowCount).toBe(6);

      // Active kids
      await allure.step("Active Kids", async () => {
        for (let i = 1; i < rowCount; i++) {
          const row = rows.nth(i);
          const status = (await row.locator("td").nth(3).textContent())?.trim();

          if (status === "Active") {
            const userName = (await row.locator("td").nth(1).textContent())?.trim();
            await allure.step(userName, async () => { });
          }
        }
      });

      // Inactive kids
      await allure.step("Inactive Kids", async () => {
        for (let i = 1; i < rowCount; i++) {
          const row = rows.nth(i);
          const status = (await row.locator("td").nth(3).textContent())?.trim();

          if (status === "Inactive") {
            const kidName = (await row.locator("td").nth(1).textContent())?.trim();
            await allure.step(kidName, async () => { });
          }
        }
      });

    });
  }

  // async profileTable() {
  //   const table = await this.page.locator("#settingsTableId");
  //   // count no of rows and coloumns
  //   const coloumns = await table.locator("tbody tr th");
  //   console.log("No of coloumns:", await coloumns.count());
  //   expect(await coloumns.count()).toBe(5);

  //   const rows = await table.locator("tbody tr");
  //   console.log("No of Rows:", await rows.count());
  //   expect(await rows.count()).toBe(6);

  //   // print data based on status
  //   console.log("=====Active Kids=====");
  //   for (let i = 1; i < await rows.count(); i++) {
  //     const row = rows.nth(i);
  //     const status = await row.locator("td").nth(3).textContent();
  //     if (status.trim() == "Active") {
  //       const userName = await row.locator("td").nth(1).textContent();
  //       console.log(userName);
  //     }
  //   }
  //   console.log("=====Inactive Kids=====");
  //   for (let j = 1; j < await rows.count(); j++) {
  //     const row = rows.nth(j);
  //     const status = await row.locator("td").nth(3).textContent();
  //     if (status == "Inactive") {
  //       const kidName = await row.locator("td").nth(1).textContent();
  //       console.log(kidName);
  //     }
  //   }
  // }
  async lockUnlock1() {
    await this.lockDeviceButton.click();

  }
  async lockDevice() {
    await Helper.clickElement(this.deviceLockUnlockButton, "Device Lock/Unlock option");
    await Helper.sleep(2000);
    try {
      await Hellper.verifyElementVisibility(this.UnlockDeviceText, "Your Device is Unlocked text");
      await Helper.sleep(2000);
      await Helper.verifyElementVisibility(this.LockedStateImageIcon, "Unlocked Image");

      await Helper.sleep(2000);
      await Helper.verifyElementVisibility(this.UnlockedlogoText, "Unlocked test");

      await Helper.sleep(2000);
      await Helper.verifyElementVisibility(this.LockeDeviceButton, "Lock Device button");
      await Helper.sleep(2000);
      await Helper.clickElement(this.LockeDeviceButton, "on Lock Device button");
      await Hellper.sleep(2000);
      await Helper.clickElement(this.lockDeviceNoButton, "No button to exist from the Confirmation pop-up");
      await Helper.sleep(2000);
      await Helper.clickElement(this.LockeDeviceButton, "on Lock Device button to navigate to the Lock Device confirmtion pop-up");
      await Helper.sleep(2000);
      await Helper.clickElement(this.lockDeviceYesButton, "Yes button to restrict the Device"); await Helper.sleep(2000);
      await Helper.verifyToastMessage(this.page, "Device Locked Successfully", "Validate the toast message: Device Locked Successfully");
      await Helper.clickElement(this.notificationsLogo, "Notifications icon to check whether Device state changed notifications received or not");
      await Helper.verifyElementVisibility(this.DeviceLockedNotification, "Device Locked notification text");
      await Hellper.sleep(2000);
      await Helper.clickElement(this.closeButton, "Close button to close the Notifications pop-up");
      await Helper.sleep(2000);
      const rows = this.page.locator("table tbody tr");
      const rowCount = await rows.count();

      await allure.step("Device Lock / Unlock History", async () => {

        await allure.step(`No of rows: ${rowCount}`, async () => { });

        await allure.step("Unlocked entries", async () => {
          for (let i = 0; i < rowCount; i++) {
            const row = rows.nth(i);
            const status = (await row.locator("td").nth(2).textContent())?.trim();
            const date = (await row.locator("td").nth(1).textContent())?.trim();

            if (status?.includes("Unlocked")) {
              await allure.step(`${date} → ${status}`, async () => { });
            }
          }
        });

        await allure.step("Locked entries", async () => {
          for (let i = 0; i < rowCount; i++) {
            const row = rows.nth(i);
            const status = (await row.locator("td").nth(2).textContent())?.trim();
            const date = (await row.locator("td").nth(1).textContent())?.trim();

            if (status?.includes("Locked")) {
              await allure.step(`${date} → ${status}`, async () => { });
            }
          }
        });

      });

    } catch {
      await Hellper.verifyElementVisibility(this.LockedDeviceText, "Your Device is Locked title text");
      await Helper.sleep(2000);
      await Helper.verifyElementVisibility(this.LockedLogoText, "Unlocked state Description text");
      await Helper.sleep(2000);
      await Helper.verifyElementVisibility(this.LockedStateImageIcon, "Locked Image");
      await Helper.sleep(2000);
      await Helper.clickElement(this.UnlockDeviceButton, "Unlock Device button to navigate to the Unlock Device confirmtion pop-up");
      await Hellper.sleep(2000);
      await Helper.clickElement(this.lockDeviceNoButton, "No button to exist from the Confirmation pop-up");
      await Helper.sleep(2000);
      await Helper.clickElement(this.UnlockDeviceButton, "Unlock Device button to navigate to the Unlock Device confirmtion pop-up");
      await Helper.sleep(2000);
      await Helper.clickElement(this.lockDeviceYesButton, "Yes button to lock the Device"); await Helper.sleep(2000);
      await Helper.verifyToastMessage(this.page, "Device Unlocked Successfully", "Validate the toast message: Device Unlocked Successfully");
      await Helper.clickElement(this.notificationsLogo, "Notifications Icon to check whether Device state changed notifications received or not");
      await Helper.verifyElementVisibility(this.DeviceUnlokedNotification, "Device Locked notification text");
      await Hellper.sleep(2000);
      await Helper.clickElement(this.closeButton, "Close button to close the Notifications pop-up");
      await Helper.sleep(2000);
      const rows = this.page.locator("table tbody tr");
      const rowCount = await rows.count();

      await allure.step("Device Lock / Unlock History", async () => {

        await allure.step(`No of rows: ${rowCount}`, async () => { });

        await allure.step("Unlocked entries", async () => {
          for (let i = 0; i < rowCount; i++) {
            const row = rows.nth(i);
            const status = (await row.locator("td").nth(2).textContent())?.trim();
            const date = (await row.locator("td").nth(1).textContent())?.trim();

            if (status?.includes("Unlocked")) {
              await allure.step(`${date} → ${status}`, async () => { });
            }
          }
        });

        await allure.step("Locked entries", async () => {
          for (let i = 0; i < rowCount; i++) {
            const row = rows.nth(i);
            const status = (await row.locator("td").nth(2).textContent())?.trim();
            const date = (await row.locator("td").nth(1).textContent())?.trim();

            if (status?.includes("Locked")) {
              await allure.step(`${date} → ${status}`, async () => { });
            }
          }
        });
      });

    }
  }
  async UnlockDevice() {
    await Hellper.sleep(2000);
    await Hellper.clickElement(this.deviceLockUnlockButton, "Device Lock/Unlock button");
    await Hellper.sleep(2000);
    await Hellper.verifyElementVisibility(this.LockedDeviceText, "Your Device is Locked text");
    await Helper.sleep(2000);
    await Helper.verifyElementVisibility(this.LockedLogoText, "Locked state Description text");
    await Helper.sleep(2000);
    await Helper.verifyElementVisibility(this.UnlockedStateImageIcon, "Locked Image");
    await Hellper.sleep(2000);
    await Helper.clickElement(this.UnlockDeviceButton, "Unlock Device button to navigate to the Unlock Device confirmtion pop-up");
    await Hellper.sleep(2000);
    await Helper.clickElement(this.lockDeviceNoButton, "No button to exist from the Confirmation pop-up");
    await Helper.sleep(2000);
    await Helper.clickElement(this.UnlockDeviceButton, "Unlock Device button");
    await Helper.sleep(2000);
    await Helper.clickElement(this.lockDeviceYesButton, "Yes button to unlock the Device"); await Helper.sleep(2000);
    await Helper.verifyToastMessage(this.page, "Device Unlocked Successfully", "Validate the toast message: Device Unlocked Successfully");
    await Helper.clickElement(this.notificationsLogo, "Notifications Icon to check whether Device state changed notifications received or not");
    await Helper.verifyElementVisibility(this.DeviceUnlokedNotification, "Device Unlocked notification text");
    await Hellper.sleep(2000);
    await Helper.clickElement(this.closeButton, "Close button to close the Notifications pop-up");
    await Helper.sleep(2000);
    const rows = this.page.locator("table tbody tr");
    const rowCount = await rows.count();

    await allure.step("Device Lock / Unlock History", async () => {

      await allure.step(`No of rows: ${rowCount}`, async () => { });

      await allure.step("Unlocked entries", async () => {
        for (let i = 0; i < rowCount; i++) {
          const row = rows.nth(i);
          const status = (await row.locator("td").nth(2).textContent())?.trim();
          const date = (await row.locator("td").nth(1).textContent())?.trim();

          if (status?.includes("Unlocked")) {
            await allure.step(`${date} → ${status}`, async () => { });
          }
        }
      });

      await allure.step("Locked entries", async () => {
        for (let i = 0; i < rowCount; i++) {
          const row = rows.nth(i);
          const status = (await row.locator("td").nth(2).textContent())?.trim();
          const date = (await row.locator("td").nth(1).textContent())?.trim();

          if (status?.includes("Locked")) {
            await allure.step(`${date} → ${status}`, async () => { });
          }
        }
      });
    });



  }
  async FindMyPhoneScenario() {
    await Helper.sleep(2000);
    await Helper.clickElement(this.findMyPhone.FindMyPhoneButton, "Find My Phone option");
    // await Hellper.clickElement(this.FindMyPhoneButton,"Find My Phone option to navigate to the Find My Phone page");
    // await console.log("Click On the Find My Phone Button");
    await Hellper.sleep(2000);
    await Hellper.verifyElementVisibility(this.findMyPhone.CurrentLocationText, "Current Location Text on Find My Phone page");
    await Hellper.sleep(2000);
    await Hellper.verifyElementVisibility(this.findMyPhone.FullScreenViewMap, "Map expanding button on the Find My Phone page");
    await Helper.sleep(2000);
    await Hellper.clickElement(this.findMyPhone.FullScreenViewMap, "Map expanding button to view the full screen map");
    await Hellper.sleep(2000);
    await Helper.verifyElementVisibility(this.findMyPhone.MapButton, "Map button");
    await Hellper.sleep(3000);
    await Hellper.verifyElement1(this.findMyPhone.FullScreenViewMap, "Full screen Map after click on expanding button");
    await Hellper.sleep(2000);
    await Helper.verifyElementVisibility(this.findMyPhone.SatilliteButton, "Satellite button");
    await Hellper.sleep(2000);
    await Hellper.clickElement(this.findMyPhone.SatilliteButton, "Satellite button to view the Map with Satellite visuals");
    await Hellper.sleep(3000);
    await Hellper.verifyElement1(this.findMyPhone.FullScreenViewMap, "Satellite Map after select the Satellite option");
    await Hellper.sleep(2000);
    await Hellper.clickElement(this.findMyPhone.MapButton, "Map button to exist from the Satellite view");
    await Hellper.sleep(2000);
    await Hellper.clickElement(this.findMyPhone.FullScreenViewMap, "Full screen view button again to exits the full-screen mode and returns to normal view")
    await Hellper.sleep(2000);
    await Hellper.clickElement(this.findMyPhone.RingThePhoneText, "Ring the Phone button to navigate to the Ring My Phone confirmation pop-up");
    await Hellper.sleep(2000);
    await Hellper.clickElement(this.findMyPhone.RingPhonePopupNoButton, "No button to exist from the confirmation pop-up");
    await Hellper.sleep(2000);
    await Hellper.clickElement(this.findMyPhone.RingThePhoneText, "Ring the Phone button to navigate to the Ring My Phone confirmation pop-up");
    await Hellper.sleep(2000);
    await Hellper.clickElement(this.findMyPhone.RingPhonePopupYesButton, "Yes button on confirmation pop-up to Ring the phone");
    await Hellper.sleep(2000);
    // await Hellper.verifyToastMessage(this.page,"Notification send message","Send Notification successfully");
    await Hellper.clickElement(this.findMyPhone.NotificationsIcon, "notifications icon to check whether notification received or not");
    await Hellper.sleep(2000);
    await Hellper.verifyElementVisibility(this.findMyPhone.AlaramToFindDeviceNotification, "Alarmed to Find Device notification");
    await Hellper.clickElement(this.closeButton, "Close button to close the notifications pop-up");




  }
  async deviceLockUnLock() {
    // await this.deviceLockUnlockButton.click();

    // Wait until table rows are visible
    // await this.page.waitForSelector("table tbody tr");
    // await Helper.waitForElement(this.page.waitForSelector("table tbody tr"),"Wait until the Lock Device page is displayed");
    // await Helper.sleep(2000);
    // await Helper.verifyElementVisibility(this.page.locator("//span[@id='deviceStatusBtnSpan']"),"Lock Device text");
    // await Helper.sleep(2000);
    // await Helper.clickElement(this.page.locator("//span[@id='deviceStatusBtnSpan']"),"Lock Device option to Lock/Unlock the Device");
    // await Helper.sleep(2000);
    // await Helper.verifyElementVisibility(this.page.locator("(//img)[15]"),"Lock Device Logo");
    // await Helper.sleep(2000);
    // await Helper.verifyElementVisibility(this.page.locator("//p[@id='lockUnlockModalTextBody']"),"Do you want to Lock Calry's Device? text");
    // await Helper.clickElement(this.page.locator("//button[@type='button'][normalize-space()='No']"),"No button to exist from the Lock Device page");
    // await Helper.sleep(2000);
    // await Helper.clickElement(this.page.locator("//span[@id='deviceStatusBtnSpan']"),"Lock Device option to Lock/Unlock the Device");
    // await Helper.sleep(2000);
    // await Helper.clickElement(this.page.locator("//button[@type='button'][normalize-space()='Yes']"),"Yes button to Lock the Device");
    // await Helper.sleep(2000);
    const rows = await this.page.locator("table tbody tr");
    console.log("No of rows:", await rows.count());
    await allure.step(`No of rows: ${rows}`, async () => {
    });

    console.log("===== Device Unlocked =====");
    for (let i = 0; i < await rows.count(); i++) {
      const row = rows.nth(i);
      const deviceStatus = (await row.locator("td").nth(2).textContent()).trim();
      const dateText = (await row.locator("td").nth(1).textContent()).trim();

      if (deviceStatus.includes("Unlocked")) {
        console.log(dateText + " → " + deviceStatus);
        await allure.step(dateText + " → " + deviceStatus, async () => {
        });
      }
    }

    console.log("===== Device Locked =====");
    for (let i = 0; i < await rows.count(); i++) {
      const row = rows.nth(i);
      const deviceStatus = (await row.locator("td").nth(2).textContent()).trim();
      const dateText = (await row.locator("td").nth(1).textContent()).trim();

      if (deviceStatus.includes("Locked")) {
        console.log(dateText + " → " + deviceStatus);
        await allure.step(dateText + " → " + deviceStatus, async () => {
        });
      }
    }
  }
  async tableDashboard() {
    await this.page.locator("//a[normalize-space()='Dashboard']").click();
    await this.page.locator("//a[normalize-space()='Click Here to Manage the Device']").click();
  }
  async restrictRandomApp() {
    // this.appLockAndTimeLimitsButton.click();
    try {
      await Hellper.clickElement(this.allAppsSearchField, "on Search field");

      await Hellper.sleep(2000);
      await Hellper.sendKeys(this.allAppsSearchField, "chrome", "selected app name in the search field to Restrict the App from Allowed to Restrict");
      await Hellper.clickEnter(this.allAppsSearchField, "Search Field");
      await Hellper.sleep(2000);
      await Hellper.clickElement(this.appRestrictIcon, 'the "X" icon on selected app to navigate to the "Move to Restrict Apps" pop-up');
      await Hellper.clickElement(this.restrictNoButton, "No button on the confirmation pop-up to exist from the App Restriction");

      await Hellper.clickElement(this.appRestrictIcon, 'the "X" icon on the selected app');
      await Hellper.clickElement(this.restrictYesButton, "the Yes button on the confirmation pop-up to Restrict the selected app");
      await Hellper.verifyToastMessage(this.page, "Chrome is moved to the Restricted Apps", "Validate the toast message: Chrome is moved to the Restricted Apps");
      await Hellper.sleep(2000);
      await Hellper.clickElement(this.manageAppsButton, "the Manage Apps option to view the Allowed apps");
      await Hellper.sleep(3000);

    } catch {
      await Hellper.clickElement(this.allAppsSearchField, "on Search field");
      await Hellper.sendKeys(this.allAppsSearchField, "chrome", "selected app name in the search field to Allowed the App from Restrict to Allowed");

      await Helper.clickElement(this.restrictedAppLocator, "on restricted app for confirmation pop-up")
      await Helper.clickElement(this.restrictYesButton, "the Yes button on the confirmation pop-up to Allowed the selected app")
      await Hellper.verifyToastMessage(this.page, "Chrome is moved to the Allowed Apps", "Validate the toast message: Chrome is moved to the Allowed Apps");

      await Hellper.sleep(2000);
      await Hellper.sendKeys(this.allAppsSearchField, "chrome", "selected app name in the search field to Allowed the App from Restrict to Allowed");
      await Hellper.clickEnter(this.allAppsSearchField, "Search Field");
      await Hellper.sleep(2000);
      await Hellper.clickElement(this.appRestrictIcon, 'the "X" icon on selected app to navigate to the "Move to Restrict Apps" pop-up');
      await Hellper.clickElement(this.restrictNoButton, "the No button on the confirmation pop-up to exist from the App Restriction");

      await Hellper.clickElement(this.appRestrictIcon, "the 'X' icon on the selected app");
      await Hellper.clickElement(this.restrictYesButton, "the Yes button on the confirmation pop-up to Restrict the selected app");
      await Hellper.verifyToastMessage(this.page, "Chrome is moved to the Restricted Apps", "Validate the toast message: Chrome is moved to the Restricted Apps");
      await Hellper.sleep(2000);
      await Hellper.clickElement(this.manageAppsButton, "the Manage Apps option to view the Allowed apps");
      await Hellper.sleep(2000);
      await Helper.clickElement(this.appLockAndTimeLimitsButton, "AppLock & Time Limits")

      // await this.manageAppsButton.click();
    }

  }
  async moveAppFromRestrictToAllow() {

    await Hellper.clickElement(this.allAppsSearchField, "on Search field");
    await Hellper.sendKeys(this.allAppsSearchField, "chrome", "selected app name in the search field to Allowed the App from Restrict to Allowed");

    await Helper.clickElement(this.restrictedAppLocator, "on the selected restricted app to open the confirmation pop-up.")
    await Helper.clickElement(this.restrictYesButton, "the Yes button on the confirmation pop-up to Allowed the restricted app")
    await Hellper.verifyToastMessage(this.page, "Chrome is moved to the Allowed Apps", "Validate the toast message: Chrome is moved to the Allowed Apps");
    await Helper.sleep(2000)
    // await this.manageAppsButton.click();
  }
  async verifyAppLockAndTimeLimits() {
    try {
      // await this.appLockAndTimeLimitsButton.click();

      // await Helper.clickElement(this.appLockAndTimeLimitsButton, "AppLock & Time Limits")


      await Helper.clickElement(this.appLockAndTimeLimitsButton, "AppLock & Time Limits")

      await Hellper.clickElement(this.allAppsSearchField, "the Search field");

      await Hellper.sleep(2000);
      await Hellper.sendKeys(this.allAppsSearchField, "chrome", "Allowed app name in the search field for AppLock & Time Limits");
      await Hellper.clickEnter(this.allAppsSearchField, "Search Field");
      await Hellper.sleep(2000);
      await Helper.verifyElementVisibility(this.allowedAllTime, "Allowed all time text");
      await Hellper.sleep(2000);

      await Helper.clickElement(this.appLockAndTimeLimitsIcon, "on the clock icon on the AppLock & Time Limits page");
      await Hellper.sleep(2000);

      await Helper.verifyElement1(this.downloadAppPopup, "Download KidSecure App pop-up");
      await Hellper.clickElement1(this.downloadPopupCloseButton, 'Click the close icon "X" to close the Download KidSecure App Pop-up');
      await Hellper.sleep(2000);
      await this.allAppsSearchField.clear();

    } catch {
      await this.page.locator("(//span[@class='apps-title-disabled'])[2]").click();
      // this.restrictYesButton.click();
      await Hellper.sleep(2000);
      await Hellper.sendKeys(this.allAppsSearchField, "chrome", "restricted app name in the search field");
      await Hellper.clickEnter(this.allAppsSearchField, "Search Field");
      await Hellper.sleep(2000);
      await Hellper.clickElement(this.restrictYesButton, "the Yes button on the confirmation pop-up to Restrict the selected app");
      await Hellper.sleep(2000);

      await Helper.verifyElementVisibility(this.allowedAllTime, "Allowed all time text");
      await Hellper.sleep(2000);

      await Helper.clickElement(this.appLockAndTimeLimitsIcon, "AppLock & Time Limits Icon to create the App Time Limit");
      await Hellper.sleep(2000);

      await Helper.verifyElement1(this.downloadAppPopup, "Download KidSecure App pop-up");
      await Hellper.clickElement(this.downloadPopupCloseButton, "'X' icon to close the Download KidSecure App Pop-up");
      await Helper.sleep(2000);
      await this.allAppsSearchField.clear();


    }


  }
  async ScreenTimeLimits() {
    await Helper.sleep(2000);
    await Helper.clickElement(this.screeTimeLimitsButton, "Screen Time Limits button");
    await Hellper.sleep(2000);
    await Helper.clickElement(this.setScreenTimeLimits, "on Set the time to lock all apps button");
    await Helper.sleep(2000);
    await Helper.verifyElement1(this.downloadKidSeureScreenTimeLimits, "Download KidSecure App pop-up");
    await Helper.sleep(2000);
    await Hellper.clickElement1(this.setTimeLimitsCloseButton, 'Click the close icon "X" to close the Download KidSecure App Pop-up');
    await Helper.sleep(2000);

  }

  async manageGeofence() {
    await Helper.sleep(2000);

    await Helper.clickElement(this.manageGeofenceButton, "Manage Geofence button");
    await Helper.sleep(2000);
    await Helper.verifyElement1(this.geofenceAccessOkButton, "Geofence access permission Ok button");
    await Helper.sleep(2000);
    await Helper.verifyElementVisibility(this.geofenceAccessRequiredText, "Geofence Access Required text is");
    await Helper.sleep(2000);
    await Helper.verifyElementVisibility(this.geofenceLocationImage, "Geofence Access Required location image icon");
    await Helper.sleep(2000);
    await Helper.verifyElementVisibility(this.geofenceAccessRequiredText, "Geofence Location Description Text");
    const message = await Helper.getLocatorText(
      this.geofenceAccessRequiredText,
      'Geofence Access Required'
    );
    expect(message).toContain('Geofence Access Required');
    await Helper.sleep(2000);
    const permissionDescription = await Helper.getLocatorText(this.geofenceDescriptionText, "This feature requires access to your location.");
    expect(permissionDescription).toContain('Please grant permission.');
    await Helper.sleep(2000);

    await Helper.clickElement(this.geofenceAccessOkButton, "Geofence Access Required Ok button to navigate to the Geofence Created page");
    await Helper.sleep(2000);
    await Helper.clickElement(this.clickHereToCreateGeofence, "on Click here to Create Geofence button");
    await Helper.sleep(2000);
    // await Helper.clickElement(this.geofenceAccessOkButton, "Geofence Access Required Ok button to navigate to the Geofence Created page");
    await Helper.click(this.geofenceAccessOkButton)

    /*
    await Helper.verifyElement1(this.setGeofenceText, "Set Geofence text");
    await Helper.sleep(2000);
    await Helper.verifyElementVisibility(this.setGeofenceDownloadKidSecure, "Download KidSecure App Icon");
    await Helper.sleep(2000);
    await Helper.verifyElementVisibility(this.setGeofenceClosePopupIcon, "Set Geofence close icon");
    await Helper.sleep(2000);
    const setGeofenceDescription = await Helper.getLocatorText(this.setGeofencePremiumDescriptinText, "This is a premium feature");
    expect(setGeofenceDescription).toContain("Please buy a respective Subscription plan");
    await Helper.sleep(2000);
    const downloadDescription = await Helper.getLocatorText(this.downloadKidSecureDescriptionText, "Download KidSecure Android Application");
    expect(downloadDescription).toContain("Thanks for your support and consideration");
    await Helper.sleep(2000);
    const step1 = await Helper.getLocatorText(this.geofencePaymentStep1, "Launch the KidSecure App ");
    expect(step1).toContain("Mobile and Log In as a Parent.");
    await Helper.sleep(2000);
    const step2 = await Helper.getLocatorText(this.geofencePaymentStep2, "Navigate to the Payment Module");
    expect(step2).toContain("Select the best plan that suits you.");
    await Helper.sleep(2000);
    const step3 = await Helper.getLocatorText(this.geofencePaymentStep3, "Make the payment for the selected plan");
    expect(step3).toContain("you will be able to enjoy the premium features.");
    await Helper.sleep(2000);
    await Helper.verifyElementVisibility(this.staySafeAndSecureText, "Stay Safe and Secure.");
    await Hellper.sleep(2000);
    await Helper.clickElement(this.setGeofenceClosePopupIcon, "close icon to close the downlaoded pop-up");
    await Helper.sleep(2000);
    */

  }

  async Reports() {
    await Hellper.clickElement(this.reports.ReportsButton, "Reports button to navigate to the Reports page");
    await Hellper.sleep(2000);
    await Helper.verifyElement1(this.reports.GetDailyReportTitleText, "Get Daily Report text");
    const DailyReportDecsription = await Hellper.getLocatorText(this.reports.GetDailyReportDescriptionText, "You will receive a Daily Report through email");
    expect(DailyReportDecsription).toContain("enabling the toggle button.");
    await Hellper.verifyElementVisibility(this.reports.verifyEmailToogle, "Email text");
    await Hellper.sleep(2000);
    // await Helper.clickElement(this.reports.EmailToogleButton, "Email toggle to disable the toggle button");
    await Helper.click(this.reports.EmailToogleButton)
    await Hellper.sleep(2000);
    // await Hellper.clickElement(this.reports.EmailToogleButton, "Email toggle button to enable the disabled toggle");
    await Helper.click(this.reports.EmailToogleButton)

    await Hellper.sleep(2000);
    await Hellper.verifyElementVisibility(this.reports.DailyReportsSettings, "Daily Report Settings text");
    await Hellper.sleep(2000);
    const settingsDescription = await Hellper.getLocatorText(this.reports.DailyReportsDescriptionText, "You can customize your Daily Report");
    expect(settingsDescription).toContain("enabling or disabling the below settings.");
    await Hellper.verifyElementVisibility(this.reports.AppUsageToogleButton, "App Usage")
    await Hellper.clickElement(this.reports.AppUsageToogleButton, "App Usage toggle to disable the enabled toggle button");
    await Hellper.sleep(2000);
    await Hellper.verifyElementVisibility(this.reports.LocationHistoryToogle, "Location History");
    await Hellper.clickElement(this.reports.LocationUsageToogleButton, "Location History toggle button to disable the enabled toggle button");
    await Hellper.sleep(2000);
    await Hellper.verifyElementVisibility(this.reports.AlertHistoryToogle, "Alert History");
    await Hellper.clickElement(this.reports.AlertHistoryToogleButton, "Alert History toggle button to disable the enabled toggle button");
    await Hellper.sleep(2000);
    await Hellper.clickElement(this.reports.AppUsageToogleButton, "App Usage toggle to enable the disabled toggle");
    await Hellper.sleep(2000);
    await Hellper.clickElement(this.reports.LocationUsageToogleButton, "Location History toggle button to enable the disabled toggle");
    await Hellper.sleep(2000);
    await Hellper.clickElement(this.reports.AlertHistoryToogleButton, "Alert History toggle button to enable the disabled toggle");
    await Hellper.sleep(2000);
    await Hellper.verifyElementVisibility(this.reports.DownloadReportText, "Download Report text");
    const downloadReportDecsription = await Hellper.getLocatorText(this.reports.DownlaodReportDecsriptionText, "You can download your Kid's report");
    expect(downloadReportDecsription).toContain("selecting the date below and clicking Download Report");
    await Hellper.verifyElementVisibility(this.reports.SelectDateButton, "Select Date text");
    await Hellper.clickElement(this.reports.DownloadReportButton, "Downlaod Report button to navigate to the Reports is Premium feature pop-up");
    await Hellper.verifyElementVisibility(this.reports.ReportPremiumFetaureText, "Report is premium feature text");
    await Helper.verifyElementVisibility(this.reports.ReportPremiumImage, "Report premium feature image");

    const premiumDecsription = await Hellper.getLocatorText(this.reports.ReportsSubscriptionText, "For Reports you need to buy a Subscription plan");
    expect(premiumDecsription).toContain("Subscription plan");
    await Hellper.verifyElementVisibility(this.reports.ReportsDownalodKidSecureButton, "Download KidSecure App");
    const downloadDescriptionText = await Hellper.getLocatorText(this.reports.ReportsDownloadKidSecureDecsriptionText, "Download KidSecure Android Application");
    expect(downloadDescriptionText).toContain("Thanks for your support and consideration");
    await Hellper.sleep(2000);
    const step1 = await Hellper.getLocatorText(this.reports.ReportsStep1, "Go to the mobile app");
    expect(step1).toContain("log in as a parent");
    const step2 = await Hellper.getLocatorText(this.reports.ReportsStep2, "Visit the Payment Module");
    expect(step2).toContain("Select the plan that best suits");
    const step3 = await Hellper.getLocatorText(this.reports.ReportsStep3, "Make the payment of the selected plan");
    expect(step3).toContain("will be able to enjoy the premium features");
    await Hellper.sleep(2000);
    await Hellper.verifyElementVisibility(this.reports.ReportsStaySafeAndSecure, "Stay Safe and Secure.");
    await Hellper.clickElement(this.reports.ReportsPopupCloseButton, "Close icon to close the Premium feature pop-up");
  }
  async Feedback() {
    await Hellper.verifyElementVisibility(this.feedback.FeedbackButton, "Feedback option");
    await Hellper.clickElement(this.feedback.FeedbackButton, "Feedback option to navigate to the Feedback page");
    await Hellper.sleep(3000);
    await Hellper.verifyElementVisibility(this.feedback.UseTheFormText, "Use the form below to submit your feedback");
    const formDescriptionText = await Hellper.getLocatorText(this.feedback.UseTheFormDescriptionText, "Thank you for taking the time to give your valuable feedback.");
    expect(formDescriptionText).toContain("contact you to understand things further if required.");
    await Hellper.verifyElement1(this.feedback.NameText, "Name text");
    // await this.page.keyboard.press('Control+A');
    // await this.page.keyboard.press('Backspace');
    await Hellper.sendKeys(this.feedback.NameEditField, "Naga Babu", "Name in the name field");
    await Hellper.verifyElementVisibility(this.feedback.EmailAddressText, "Email Address");
    await Hellper.verifyElementVisibility(this.feedback.EmailEditField, "registered email id");
    await Hellper.verifyElementVisibility(this.feedback.FeedbackTypeText, "Feedback Type text");
    await Hellper.verifyElementVisibility(this.feedback.SelectFeedbackType, "Select Feedback Type");

    await Hellper.clickElement(this.feedback.SelectFeedbackType, 'on “Select Feedback Type” to choose the required feedback type');

    const options = ['App Feedback', 'Query', 'Report Bug', 'Other'];

    for (const option of options) {
      await Helper.verifyDropdownOptionExists(
        this.feedback.feedbackTypeDropdown,
        option
      );
    }
    await Hellper.selectDropdownOption(this.feedback.feedbackTypeDropdown, this.feedback.feedbackOptions.appFeedback);
    //   console.log(await this.feedback.feedbackTypeDropdown.evaluate(el => ({
    //   disabled: el.disabled,
    //   options: [...el.options].map(o => o.value)
    // })));


    // await Hellper.sleep(3000);

    // await Hellper.sleep(3000);
    // await Hellper.verifyElementVisibility(this.feedback.AppFeedbackType,"App Feedback type");
    // await Hellper.sleep(2000);
    // await Hellper.verifyElementVisibility(this.feedback.QueryFeedbackType,"Query Feedback Type");
    // await Hellper.sleep(1000);
    // await Hellper.verifyElementVisibility(this.feedback.ReportBugFeedbackType,"Report Feedback Type");
    // await Hellper.sleep(1000);
    // await Hellper.verifyElementVisibility(this.feedback.OtherFeedbacktype,"Other option on Feedback selection")
    // await Hellper.sleep(2000);
    // await Hellper.clickElement(this.feedback.AppFeedbackType,"App Feedback type to select from the elect Feedback options");
    // await Hellper.sleep(2000);
    await Hellper.verifyElementVisibility(this.feedback.CommentsTextText, "Comments");
    await Hellper.sleep(2000);
    await Hellper.verifyElementVisibility(this.feedback.EnterCommentsSection, "Enter Comments text");
    // await Hellper.sleep(3000);
    await Hellper.sendKeys(this.feedback.EnterCommentsSection, "Testing purpose","feedback comments in the comments section");
    await Hellper.sleep(3000);
    await Hellper.scrollInToView(this.feedback.FeedbackSubmitButton,"Submit button")
    await Hellper.verifyElement1(this.feedback.FeedbackSubmitButton, "Submit button");
  }
  async Logout() {
    await Hellper.sleep(2000);
    await Helper.clickElement(this.parentLoginId, "on Login email Id to verify the Settings and Logout options");

    // await Hellper.clickElement(this.logout.logOutSelectionMail, "Registered email id down arrow button for visible of the Settings and Logout options");
    await Hellper.verifyElementVisibility(this.logout.verifySettingsText, "Settings option");
    await Hellper.sleep(2000);
    await Hellper.verifyElementVisibility(this.logout.verifyLogoutText, "Logout option");
    // await Hellper.verifyElementVisibility(this.verifyLogoutText,"Logout pop-up");
    await Hellper.verifyElementVisibility(this.logout.verifyLogoutDescriptionText, "Are you sure you want to Logout?");
    await Hellper.verifyElementVisibility(this.logout.verifyYesConfirmationButton, "Logout confirmation Yes button");
    await Hellper.verifyElementVisibility(this.logout.verifyConfirmationNoButton, "Logout confirmation No button");
    await Hellper.sleep(2000);
    await Hellper.clickElement(this.logout.verifyYesConfirmationButton, "Yes button on the Confirmation pop-up");


  }
}
module.exports = Layout; 