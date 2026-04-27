// -------------------------------------------------------------
// 1) Playwright Fixture + Appium Controller (Combined File)
// -------------------------------------------------------------

const { test: base } = require('@playwright/test');
const { remote } = require("webdriverio");

// -------------------------
//  Appium Function
// -------------------------
async function verifyAppRestriction() {
  const driver = await remote({
    path: '/wd/hub',
    port: 4723,
    capabilities: {
      platformName: "Android",
      automationName: "UiAutomator2",
      deviceName: "ddaa23",
      appPackage: "com.android.chrome",
      appActivity: "com.google.android.apps.chrome.Main",
      noReset: true
    }
  });

  console.log("✓ Chrome launched on device");

  const restrictedText = await driver.$("//*[contains(@text,'This app is restricted')]");
  const visible = await restrictedText.isDisplayed();

  if (!visible) {
    await driver.deleteSession();
    throw new Error("❌ Restricted screen NOT visible!");
  }

  console.log("✓ Restricted screen validated");

  const okBtn = await driver.$("//*[@text='OK']");
  await okBtn.click();
  console.log("✓ OK button tapped");

  await driver.deleteSession();
  console.log("✓ Appium session closed");

  return true;
}

// -------------------------
//  Playwright Fixture
// -------------------------
exports.mobileTest = base.extend({
  mobileApp: async ({}, use) => {
    await use({
      verifyRestriction: async () => {
        return await verifyAppRestriction();
      }
    });
  }
});
