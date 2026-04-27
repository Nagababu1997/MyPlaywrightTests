const {expect} = require('@playwright/test')

class Geofence {
constructor(page){
    this.manageGeofenceButton = page.locator("//span[normalize-space()='Manage Geofence']");
        this.geofenceAccessOkButton = page.locator("//button[normalize-space()='Ok']");
    this.addGeofenceButton = page.locator("//button[@id='add-geo-btn']")
    this.cretaeGeofencePopup = page.locator("//div/h5[contains(text(),'Create Geofence')]")
    this.searchLocationText = page.locator("//div/label[contains(text(),'Search Location')]")
    this.geofenceNameText = page.locator("//div/label[contains(text(),'Geofence Name')]");
    this.geofenceRadiusText = page.locator("//div/label[contains(text(),'Geofence Radius')]")
    this.geofenceSelectShapeText = page.locator("//div/label[contains(text(),'Select shape')]")
    this.enterGeofenceLocationField = page.locator("//div/input[@id='searchGeofence']")
    this.enterGeofenceNameField = page.locator("//div/input[@id='geofenceName']")
    this.enterGeofenceRadiusField = page.locator("//div/input[@id='radiusGeofence']")
    this.selectGeofenceShapePolygon = page.locator("//button[@id='polygon']")
    this.selectGeofenceshapeCircle  = page.locator("//button[@id='circle']")
    this.clickHereToCreateGeofence = page.locator("//button[@id='add-geo-btn1']")
    this.geofenceCancelButton = page.locator("//button[normalize-space()='Cancel']")
    this.geofenceContinueButton = page.locator("//button[normalize-space()='Continue']")
    this.recorededAddress = page.locator("(//span[normalize-space()='Address'])[1]")
    this.addGeofencePlusButton = page.locator("(//img)[15]")

    this.geofenceAccessOkButton = page.locator("//button[normalize-space()='Ok']");
    this.geofenceAccessPrmissionPopupCloseIcon = page.locator("(//button[@aria-label='Close'])[2]");
    this.geofenceLocationImage = page.locator("//img[@src='assets/images/geo-modal.svg']");
    this.geofenceAccessRequiredText = page.locator("//h3[normalize-space()='Geofence Access Required']");
    this.geofenceDescriptionText = page.locator("//p[text()='This feature requires access to your location. Please grant permission.']");
    // this.clickHereToCreateGeofence = page.locator("//button[@id='add-geo-btn1']");
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
}
}
module.exports = {Geofence}