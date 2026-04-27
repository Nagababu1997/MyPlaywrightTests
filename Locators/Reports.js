const {expect} = require('@playwright/test');
class Reports {
    constructor(page){
        this.ReportsButton = page.locator("//span[text()='Reports']");
        this.GetDailyReportTitleText = page.locator("//p[text()='Get Daily Report ']");
        this.verifyEmailToogle = page.locator("//label[text()='Email']");
        this.GetDailyReportDescriptionText = page.locator("//small[contains(text(),'You will receive a Daily Report through email by e')]");
        this.DailyReportsSettings = page.locator("//p[text()='Daily Report Settings']");
        this.DailyReportsDescriptionText = page.locator("//small[contains(text(),'You can customize your Daily Report')]");
        this.AppUsageToogle = page.locator("//label[text()='App Usage']");
        this.LocationHistoryToogle = page.locator("//label[text()='Location History']");
        this.AlertHistoryToogle = page.locator("//label[text()='Alert History']");
        this.DownloadReportText = page.locator("//p[text()='Download Report ']");
        this.DownlaodReportDecsriptionText = page.locator("//p[8]");
        this.DownloadReportButton = page.locator("//button[normalize-space()='Download Report']");
        this.SelectDateButton = page.locator("//input[@id='input-date-id']");
        this.ReportPremiumFetaureText = page.locator("//h3[text()='Reports is premium feature.']");
        this.ReportPremiumImage = page.locator("//img[@src='assets/images/payment-subscription.svg']");
        this.ReportsSubscriptionText = page.locator("//p[contains(text(),'For Reports you need to')]");
        this.ReportsDownalodKidSecureButton = page.locator("//span[contains(text(),' Download KidSecure App')]");
        this.ReportsDownloadKidSecureDecsriptionText = page.locator("//p[contains(text(),'Download KidSecure Android Application')]");
        this.StepsText = page.locator("//h4[text()='Steps:']");
        this.ReportsStep1 = page.locator("//li[contains(text(),'Go to the mobile app')]");
        this.ReportsStep2 = page.locator("//li[contains(text(),'Visit the Payment Module')]");
        this.ReportsStep3 = page.locator("//li[contains(text(),'Make the payment of the selected plan')]");
        this.ReportsStaySafeAndSecure = page.locator("//h4[contains(text(),'Stay Safe and Secure.')]");
        this.ReportsPopupCloseButton = page.locator("(//button[@aria-label='Close'])[2]");
        this.AppUsageToogleButton  = page.locator("label[for='app-usage']");
        this.LocationUsageToogleButton = page.locator("label[for='location-usage']");
        this.AlertHistoryToogleButton = page.locator("label[for='alert-usage']");
        this.EmailToogleButton = page.locator("label[for='switch']");

    }
}
module.exports = {Reports}