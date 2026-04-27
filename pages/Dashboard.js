const { expect } = require("@playwright/test");
const Helper = require('../pages/Helper');
const { allure } = require("allure-playwright");
class DashboardPage {
  constructor(page) {
    this.page = page;

    //locators
    this.titleText = page.locator("(//img[@class='login-logo'])[1]");

    this.kidNameNaga  = page.locator("//span[normalize-space()='Naga']");
    this.kidNameJames = page.locator("//span[normalize-space()='James']");
    this.kidNameDeepu = page.locator("//span[normalize-space()='Deepu']");
    this.kidNameKrish = page.locator("//span[normalize-space()='Krish']");
    this.kidNameAntony = page.locator("//span[normalize-space()='Antony']");

    this.kidNameClary = page.locator("//span[normalize-space()='Calry']");
    this.kidNameOliva = page.locator("//span[normalize-space()='Oliva']");
    this.kidNameJhon = page.locator("//span[normalize-space()='Jhon']");
    this.kidNameHoneyy = page.locator("//span[normalize-space()='Honeyy']");
    this.kidNameDeeps = page.locator("//span[normalize-space()='Deeps']");
    this.parentEmail = page.locator("(//a[normalize-space()='nagababunsn'])[1]");
    this.parentEmail1 = page.locator("(//a[normalize-space()='kidsecure.qa'])[1]");

    this.notificationIcon = page.locator("img[src='assets/images/notification.svg']");
    this.screenTime = page.locator("//span[@class='screen-time']");
    this.calenderLogo = page.locator("#input-date"); // check it.
    this.timeIntervel = page.locator("//span[@class='text-sp letter-spacing-1']");
    this.alertsText = page.locator("//h3[normalize-space()='Alerts']");
    this.locationHistory = page.locator("//h3[normalize-space()='Location History']");
    this.managedeviceButton = page.locator("//a[normalize-space()='Click Here to Manage the Device']");
    this.unfoldlabsText = page.locator("//a[contains(text(),'UnfoldLabs')]");

  }
  async selectKid(){
    await allure.step('Verify and select Kid',async()=>{
      
    })
  }
  async verifyDashboardPage() {
    // Wait for initial load
    // await this.page.waitForTimeout(3000);
    await allure.step('Verify Dashboard page elments', async () => {
      await this.managedeviceButton.waitFor({state: 'visible', timeout:10000});

      // Assertions - Verify Kid names
      /*
      await Helper.verifyElementVisibility1(this.kidNameClary, "Verify the Clary Kid's name is displayed on the KidSecure Dashboard");
      await Helper.verifyElementVisibility1(this.kidNameOliva, "Verify the Oliva Kid's name is displayed on the KidSecure Dashboard");
      await Helper.verifyElementVisibility1(this.kidNameJhon, "Verify the Jhon Kid's name is displayed on the KidSecure Dashboard");
      await Helper.verifyElementVisibility1(this.kidNameHoneyy, "Verify the Honey Kid's name is displayed on the KidSecure Dashboard");
      await Helper.verifyElementVisibility1(this.kidNameDeeps, "Verify the Deeps Kid's name is displayed on the KidSecure Dashboard"); */

      await Helper.verifyElementVisibility1(this.kidNameNaga, "Verify Naga kid's name is displayed on Dashboard");
      await Helper.verifyElementVisibility1(this.kidNameJames, "Verify James kid's name is displayed on Dashboard");
      await Helper.verifyElementVisibility1(this.kidNameDeepu, "Verify Deepu kid's name is displayed on Dashboard");
      await Helper.verifyElementVisibility1(this.kidNameKrish, "Verify Krish kid's name is displayed on Dashboard");
      await Helper.verifyElementVisibility1(this.kidNameAntony, "Verify Antony kid's name is displayed on Dashboard");


      // Assertions - Verify parent & dashboard elements
      await Helper.verifyElementVisibility1(this.parentEmail, "Verify parent email is displayed on Dashboard");
      await Helper.verifyElementVisibility1(this.notificationIcon, "Verify Notifications icon is displayed on Dashboard");
      await Helper.verifyElementVisibility1(this.screenTime, "Verify Screen Time text is displayed on Dashboard");
      await Helper.verifyElementVisibility1(this.calenderLogo, "Verify Calendar icon is displayed on Dashboard");

      // Scroll and verify other sections
      await Helper.scrollInToView(this.timeIntervel, "App Usage Time Intervals section");
      await this.timeIntervel.waitFor({state:'visible', timeout:10000});

      await Helper.verifyElementVisibility1(this.timeIntervel, "Verify App Usage Time Intervals section is displayed");

      await Helper.scrollInToView(this.alertsText, "Alerts section");
      await Helper.verifyElementVisibility1(this.alertsText, "Verify Alerts title is displayed");

      await Helper.scrollInToView(this.locationHistory, "Location History section");
      await Helper.verifyElementVisibility1(this.locationHistory, "Verify Location History title is displayed");

      await Helper.scrollInToView(this.unfoldlabsText, "footer section and Verify copyright text is displayed")
            await this.unfoldlabsText.waitFor({state:'visible', timeout:10000});
            await Helper.verifyElementVisibility1(this.unfoldlabsText,"Verify UnfoldLabs link is displayed")

    });
  }
  async clickOnManageDevice() {
    await allure.step('Click on Click Here to Manage the Device button', async () => {
      // Action - Navigate to Manage Device Page
      await Helper.clickElement(this.managedeviceButton, "on Click Here to Manage the Device button to navigate to the Manage apps page");
      await Helper.sleep(2000);
    });

  }

}
module.exports = DashboardPage;

// allure generate ./allure-results -o ./allure-report --clean
// allure open ./allure-report

