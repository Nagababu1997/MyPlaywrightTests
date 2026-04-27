const {expect} = require('@playwright/test')

class AppTimeLimits{
 constructor(page)
 {
    this.appLockAndTimeLimitsButton = page.locator("(//button[normalize-space()='AppLock & Time Limits'])[1]");
    this.allowedAllTime = page.locator("//span[normalize-space()='Allowed all time']");
    this.appLockAndTimeLimitsIcon = page.locator("(//div[@class='actions-apps d-flex gap-2 flex-column'])[1]");
    this.appLockTimeLimitsPopupText = page.locator("//h5[contains(text(),'AppLock & Time Limits')]")
    this.selectedAppName = page.locator("//div//small[@id='timeBasedAppName']")
    this.selectedAppLogo = page.locator("//div//img[@id='timeBasedAppImg']")
    this.appLockAndTimeLimitsDescriptionText = page.locator("//div//p[contains(text(),'Select Start and End')]")
    this.verifyStartTimeText = page.locator("//div[@class='d-flex  gap-2']/small[text()='Start']")
    this.verifyEndTimeText = page.locator("//div[@class='d-flex  gap-2']/small[text()='End']")
    this.editStartTimeField = page.locator("//div//input[@id='timeBasedStartTime_0']")
    this.editEndTimeField = page.locator("//div//input[@id='timeBasedEndTime_0']")
    this.selectDaysButtons = page.locator("//ul[@id='timeBasedDay']/li")
    this.cancelButton = page.locator("//button[text()='Cancel' and @onclick='clearAllTimeBasedPopup()']")
    this.continueButton = page.locator("//button[@id='saveOrEditTimeBased' and text()='Continue']")
    this.confirmationYesButton = page.locator("//button[@onclick='clearAllTimeBasedSlots()']")
    this.confirmationNoButton = page.locator("//button[@class='btn-kid btn canel-btn-remove']")

    this.removeAllTimeSlotsButton= page.locator("//button[@id='remove-all-slots-btn']")


    // this.downloadAppPopup = page.locator("(//a[@class='download-popupa'])[2]");
    // this.downloadPopupCloseButton = page.locator("(//button[@aria-label='Close'])[11]");

    // Screen Time Limits 
    this.screeTimeLimitsButton = page.locator("(//button[normalize-space()='Screen Time Limits'])[1]");
    this.setScreenTimeLimits = page.locator("//span[normalize-space()='Set the time to lock all apps']");
    this.downloadKidSeureScreenTimeLimits = page.locator("(//a[@class='download-popupa'])[3]");
    this.setTimeLimitsCloseButton = page.locator("(//button[@aria-label='Close'])[12]");

 }
}
module.exports = {AppTimeLimits}