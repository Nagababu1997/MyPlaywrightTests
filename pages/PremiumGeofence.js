const { expect } = require('@playwright/test')
const { Geofence } = require('../Locators/Geofence');
const Hellper = require('../pages/Helper');
const Helper = require('../pages/Helper');

class premiumGeofence {
  constructor(page) {
    this.page = page;
    this.geofence = new Geofence(page);

  }
  async setGeofence() {
    await Helper.clickElement(this.geofence.manageGeofenceButton, "Manage Geofence Button to navigate to the Geofence page");
    try {
      // await Hellper.clickElement(this.geofence.geofenceAccessOkButton, "Location access OK button")
      // await Hellper.sleep(2000)
      // await Hellper.verifyElementVisibility(this.geofence.clickHereToCreateGeofence, "Click Here ")
      // await Hellper.sleep(2000)
      await Hellper.clickElement(this.geofence.clickHereToCreateGeofence, "Click here to Create a Geofence button")
      await Hellper.verifyElementVisibility(this.geofence.cretaeGeofencePopup, "Create Geofence")
      await Hellper.verifyElementVisibility(this.geofence.searchLocationText, "Search Location text")
      await Hellper.verifyElementVisibility(this.geofence.geofenceNameText, "Geofence Name text")
      await Hellper.verifyElementVisibility(this.geofence.geofenceRadiusText, "Geofence Radius text")
      await Helper.verifyElementVisibility(this.geofence.geofenceSelectShapeText, "Select shape text")
      await Hellper.sendKeys(this.geofence.enterGeofenceLocationField, "Durgam Cheruvu", "the required location in location edit field")
      await this.page.waitForSelector('li', { state: 'visible' });
      await this.page.locator('li', {
        hasText: 'Durgam Cheruvu'
      }).first().click();
      await Hellper.sendKeys(this.geofence.enterGeofenceNameField, "Office", "the Geofence name in Geofence Name edit field")
      await Hellper.sendKeys(this.geofence.enterGeofenceRadiusField, "100", "the Radius in Geofence Radius edit field")
      await Hellper.clickElement(this.geofence.selectGeofenceshapeCircle, "circle shape to create Geofence")
      await Hellper.clickElement(this.geofence.geofenceContinueButton, "Continue button to save the created Geofence")
      /* await this.page.waitForSelector('li', { state: 'visible' });
      await this.page.keyboard.press('ArrowDown')
      await this.page.keyboard.press('Enter')
       */
    } catch {
      await Hellper.verifyElementVisibility(this.geofence.addGeofenceButton, "Add Geofence button")
      await Hellper.sleep(2000)
      await Hellper.verifyElementVisibility(this.geofence.recorededAddress, "Address")
      await Hellper.clickElement(this.geofence.addGeofenceButton, "Add Geofence button to create a new Geofence")
      await Hellper.sleep(2000);await Hellper.clickElement(this.geofence.geofenceAccessOkButton, "Location access OK button to create Geofence")
      await Hellper.sleep(2000);await Hellper.clickElement(this.geofence.addGeofenceButton, "Add Geofence button to create a new Geofence")
      await Hellper.sleep(2000);await Hellper.clickElement(this.geofence.geofenceAccessOkButton, "Location access OK button to create Geofence")
      await Hellper.sleep(2000);await Hellper.clickElement(this.geofence.addGeofenceButton, "Add Geofence button to create a new Geofence")
      await Hellper.sleep(2000);await Hellper.clickElement(this.geofence.geofenceAccessOkButton, "Location access OK button to create Geofence")

      await Hellper.clickElement(this.geofence.addGeofenceButton,"on Add Geofence '+' icon")
      await Hellper.verifyElementVisibility(this.geofence.cretaeGeofencePopup, "Create Geofence")
      await Hellper.verifyElementVisibility(this.geofence.cretaeGeofencePopup, "Create Geofence")
      await Hellper.verifyElementVisibility(this.geofence.searchLocationText, "Search Location text")
      await Hellper.verifyElementVisibility(this.geofence.geofenceNameText, "Geofence Name text")
      await Hellper.verifyElementVisibility(this.geofence.geofenceRadiusText, "Geofence Radius text")
      await Helper.verifyElementVisibility(this.geofence.geofenceSelectShapeText, "Select shape text")
      await Hellper.sendKeys(this.geofence.enterGeofenceLocationField, "Durgam Cheruvu", "the required location in location edit field")
      await this.page.waitForSelector('li', { state: 'visible' });
      await this.page.locator('li', {
        hasText: 'Durgam Cheruvu'
      }).first().click();
      await Hellper.sendKeys(this.geofence.enterGeofenceNameField, "Office", "the Geofence name in Geofence Name edit field")
      await Hellper.sendKeys(this.geofence.enterGeofenceRadiusField, "100", "the Radius in Geofence Radius edit field")
      await Hellper.clickElement(this.geofence.selectGeofenceshapeCircle, "circle shape to create Geofence")
      await Hellper.clickElement(this.geofence.geofenceContinueButton, "Continue button to save the created Geofence")


    }

  }
  async setGeofence1() {
    await Helper.sleep(2000);
    await Helper.verifyElement1(this.geofence.geofenceAccessOkButton, "Geofence Access Permission Ok Button");
    await Helper.sleep(2000);
    await Helper.verifyElementVisibility(this.geofence.geofenceAccessRequiredText, "Geofence Access Required text is");
    await Helper.sleep(2000);
    await Helper.verifyElementVisibility(this.geofence.geofenceLocationImage, "Geofence Access Required location permission image");
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
    await Helper.clickElement(this.clickHereToCreateGeofence, "Click here to Create Geofence '+' icon to navigate to the Set Geofence page");
    await Helper.sleep(2000);
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
  }
}
module.exports = premiumGeofence;