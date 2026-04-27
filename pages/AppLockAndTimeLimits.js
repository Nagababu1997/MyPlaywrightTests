const {expect} = require('@playwright/test')
const {AppTimeLimits} = require('../Locators/AppTimeLimits')
const Hellper = require('../pages/Helper');

class AppLockAndTimeLimits{
    constructor(page)
    {
        this.page=page
        this.appLockTimeLimits = new AppTimeLimits(page)
    }
    async setAppTimeLimits ()
    {
        await Hellper.clickElement(this.appLockTimeLimits.appLockAndTimeLimitsButton,"AppLock & Time Limits button")
        await Hellper.clickElement(this.appLockTimeLimits.appLockAndTimeLimitsIcon,"AppLock edit time icon")
        await Hellper.verifyElementVisibility(this.appLockTimeLimits.appLockTimeLimitsPopupText,"AppLock & Time Limits pop-up title text")
        await Hellper.verifyElementVisibility(this.appLockTimeLimits.selectedAppLogo,"Selected app logo")
        await Hellper.verifyElementVisibility(this.appLockTimeLimits.selectedAppName,"Selected app name")
        await Hellper.verifyElementVisibility(this.appLockTimeLimits.appLockAndTimeLimitsDescriptionText,"Select Start and End time to Allow Apps")
        await Hellper.verifyElementVisibility(this.appLockTimeLimits.verifyStartTimeText,"Start time text")
        await Hellper.verifyElementVisibility(this.appLockTimeLimits.verifyEndTimeText,"End time text")
        // await Hellper.clickElement(this.appLockTimeLimits.editStartTimeField,"Start time edit field")
        await Hellper.sendKeys(this.appLockTimeLimits.editStartTimeField,"10:35","enter the starting time in the edit fields")
        // await Hellper.clickElement(this.appLockTimeLimits.editEndTimeField,"End time edit field")
        await Hellper.sendKeys(this.appLockTimeLimits.editEndTimeField,"10:45","enter the ending time in the edit fields")
        
    }
}
module.exports=AppLockAndTimeLimits
