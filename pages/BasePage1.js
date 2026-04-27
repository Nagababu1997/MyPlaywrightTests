import{test,expect,chromium} from '@playwright/test';

test('Handling Pages',async()=>{
   const browser = await chromium.launch();
   const context = await browser.newContext();

   const page1=await context.newPage();
   const page2=await context.newPage();

   const allPages=context.pages();
   console.log("No Of Pages", allPages.length);

   await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
   await expect(page1).toHaveTitle("OrangeHRM");

   await page2.goto("https://www.orangehrm.com/");
   await expect(page2).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM");


})

test.only('Handling Multiple Pages',async()=>{
   const browser = await chromium.launch();
   const context = await browser.newContext();

   const page1=await context.newPage();
   await page1.goto("https://kidsecure.app/");
   await expect(page1).toHaveTitle("KidSecure");

   const pagePromise = context.waitForEvent('page');
   await page1.locator(".login-btn").click();

   const newPage = await pagePromise;
   await expect(newPage).toHaveTitle("KidSecure");
   await page1.locator("#passWord").fill('kidsecure.qa@gmail.com');

   await page1.waitForTimeout(3000);

   await newPage.waitForTimeout(3000);
})