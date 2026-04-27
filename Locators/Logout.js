const {expect} = require('@playwright/test');

class Logout {
    constructor (page){
        this.logOutSelectionMail = page.locator("//a[@id='navbarDropdownMenuLinkId']");
        // this.verifySettingsText = page.locator("//span[text()='Settings']");
        this.verifySettingsText = page.locator("//a[@class='dropdown-item p-2']//span[normalize-space()='Settings']");
        // this.verifyLogoutText = page.locator("//span[text()='Logout']");
        this.verifyLogoutText = page.locator("//span[normalize-space()='Logout']")
        this.verifyLogoutPopupTitleText = page.locator("//h5[text()='Logout']");
        this.verifyLogoutDescriptionText = page.locator("//div//p[contains(text(),'Are you sure you want to Logout?')]");
        this.verifyYesConfirmationButton = page.locator("//button[@id='logoutModalContinue' and text()='Yes']");
        this.verifyConfirmationNoButton  = page.locator("//div[@id='logoutModal']//button[@class='btn-kid btn'][normalize-space()='No']");
    }
}
module.exports = {Logout}