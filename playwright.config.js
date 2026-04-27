// @ts-check
import { defineConfig, devices } from '@playwright/test';
import AllureReporter from 'allure-playwright';
import { off } from 'process';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'html',
  // reporter: [['html', { open: 'never' }], ['line'],['allure-playwright',{outputFolder: 'my-allure-results'}]],
  // reporter: [['allure-playwright', { outputFolder: 'my-allure-results' }]],
 reporter: [
  ['list'],
  ['allure-playwright', {
    detail: false,
    suiteTitle: false
  }]
],
  /*for creating and opening the report
  allure generate ./allure-results --clean
allure open ./allure-report
*/

  timeout: 900000,

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    actionTimeout: 20000,      // (optional) Timeout for actions like click(), fill(), etc.
    navigationTimeout: 60000,  // (optional) Timeout for page.goto() or navigation steps
    headless: false,                 // Headed mode
    video: 'retain-on-failure',      // Record only failed tests
    screenshot: 'only-on-failure',   // Screenshot only if failed
    trace: 'off'    // Powerful debugging tool
   
  
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    

    // // ✅ Auto-grant geolocation permission
    // permissions: ['geolocation'],

    // // ✅ Mock location (required, otherwise permission alone is not enough)
    // geolocation: {
    //   latitude: 17.3850,
    //   longitude: 78.4867,
    // },

    // // Optional but recommended
    // locale: 'en-IN',
  
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        // ...devices['Desktop Chrome'], 
        browserName: 'chromium',
        viewport: null,  // needed for maximize
        launchOptions: {
          args: ['--start-maximized'], // force maximize
        },
      },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  // globalTeardown:require.resolve('./pages/global-teardown'),
  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

