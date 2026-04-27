const { expect } = require('@playwright/test');
class Feedback {
    constructor(page) {
        this.FeedbackButton = page.locator("//span[text()='Feedback']");
        this.UseTheFormText = page.locator("//p[text()='Use the form below to submit your feedback']");
        this.UseTheFormDescriptionText = page.locator("//p[contains(text(),'Thank you for taking the time')]");
        this.NameText = page.locator("//label[contains(text(),'Name')]");
        this.NameEditField = page.locator("//input[@id='nameId']");
        this.EmailAddressText = page.locator("//label[contains(text(),'Email Address')]");
        this.EmailEditField = page.locator("//input[@id='emailID']");
        this.FeedbackTypeText = page.locator("//label[contains(text(),'Feedback Type')]");
        this.SelectFeedbackType = page.locator("//select[@id='feedbackTypeId']");
        this.AppFeedbackType = page.locator("//select//option[@value='App Feedback']");
        this.QueryFeedbackType = page.locator("//select//option[@value='Query']");
        this.ReportBugFeedbackType = page.locator("//select//option[@value='Report Bug']");
        this.OtherFeedbacktype = page.locator("//select//option[@value='others']");
        this.CommentsTextText = page.locator("//label[contains(text(),'Comments')]");
        this.SubmitButton = page.locator("//button[text()='Submit']");
        this.EnterCommentsSection = page.locator("//textarea[@id='commentsId']");
        this.UnfoldLabsBrandLink = page.locator("//footer[@class=' text-center footer-btm']");
        this.FeedbackSubmitButton = page.locator("//button[text()='Submit']");

            this.feedbackTypeDropdown = page.locator('#feedbackTypeId');

        this.feedbackOptions = {
      appFeedback: 'App Feedback',
      query: 'Query',
      reportBug: 'Report Bug',
      other: 'others',
    };



    }
}
module.exports = { Feedback }