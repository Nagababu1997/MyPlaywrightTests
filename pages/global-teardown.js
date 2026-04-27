import { execSync } from 'child_process';
import os from 'os';

export default async function globalTeardown() {
  try {
    console.log("⚡ Generating Allure report...");
    // Synchronously generate Allure report
    execSync('allure generate allure-results --clean -o allure-report', { stdio: 'inherit' });
    console.log("✅ Allure report generated successfully! Stored in 'allure-report' folder.");

    // Open the report synchronously
    const reportPath = 'allure-report/index.html';
    const platform = os.platform();

    if (platform === 'win32') {
      execSync(`start "" "${reportPath}"`);
    } else if (platform === 'darwin') {
      execSync(`open "${reportPath}"`);
    } else {
      // Linux
      execSync(`xdg-open "${reportPath}"`);
    }

    console.log("🌟 Allure report opened in default browser!");

  } catch (err) {
    console.error("❌ Failed to generate or open Allure report", err);
  }
}
