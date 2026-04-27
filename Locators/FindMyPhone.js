const {expect} = require('@playwright/test');
class FindMyPhone {
    constructor (page){
        this.page = page;
        this.FindMyPhoneButton = page.locator("//span[text()='Find My Phone']");
        this.CurrentLocationText = page.locator("//p[text()='Current Location']");
        this.RingThePhoneText = page.locator("//span[text()='Ring the Phone ']");
        this.MapButton  = page.locator("//button[text()='Map']");
        this.SatilliteButton = page.locator("//button[text()='Satellite']");
        this.FullScreenViewMap = page.locator("(//button[@title='Toggle fullscreen view'])[1]");
        this.MapCammeraControl = page.locator("button[title='Map camera controls']");
        this.DragPigmaIcon = page.locator("//button[@title='Drag Pegman onto the map to open Street View']");
        this.RingMyPhoneTitlePopupText = page.locator("//h5[text()='Ring My Phone']");
        this.RingPhonePopupYesButton = page.locator("//button[@id='yesButtonId' and text()='Yes']");
        this.RingPhonePopupNoButton = page.locator("//div[@id='ringMyPhoneModal']//button[@class='btn-kid btn'][normalize-space()='No']");
        this.RingPhonePopupCloseButton = page.locator("div[id='ringMyPhoneModal'] button[aria-label='Close']");
        this.RingPhonePopupDescriptionText = page.locator("//p[normalize-space()='Are you sure you want to Ring My Phone?']");
        this.NotificationsIcon = page.locator("img[src='assets/images/notification.svg']");
        this.AlaramToFindDeviceNotification = page.locator("(//p[normalize-space()='Alarmed to Find Device'])[1]");
        


    }

}
module.exports = {FindMyPhone}