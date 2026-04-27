const fs = require("fs");
const path = require("path");
const os = require("os");
const { chromium } = require("@playwright/test");

// Define paths
const projectRoot = path.join(__dirname);
const resultsDir = path.join(projectRoot, "allure-results");
const reportDir = path.join(projectRoot, "allure-report");
const envFile = path.join(resultsDir, "environment.properties");
const buildVersionFile = path.join(projectRoot, "Build.Version");

// Format timestamp
function getFormattedDate() {
  const now = new Date();
  return now.toLocaleString("en-IN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

// Read build version (from environment.properties → Build.Version → fallback)
function getBuildVersion() {
  if (fs.existsSync(envFile)) {
    const envContent = fs.readFileSync(envFile, "utf8");
    const match = envContent.match(/^Build=(.*)$/m);
    if (match && match[1].trim()) {
      return match[1].trim();
    }
  }

  if (fs.existsSync(buildVersionFile)) {
    return fs.readFileSync(buildVersionFile, "utf8").trim();
  }

  return "1.0.0"; // Default fallback
}

// Get Browser Version
async function getBrowserVersion() {
  try {
    const browser = await chromium.launch();
    const version = browser.version(); // e.g. 119.0.6045.105
    await browser.close();
    return `Chromium ${version}`;
  } catch {
    return "Chromium (version unknown)";
  }
}

// ✅ Generate environment.properties
async function generateEnvironmentFile() {
  if (!fs.existsSync(resultsDir)) {
    fs.mkdirSync(resultsDir, { recursive: true });
  }

  const buildVersion = getBuildVersion();
  const date = getFormattedDate();
  const osName = os.type(); // e.g., Windows_NT
  const osVersion = os.release(); // e.g., 10.0.19045
  const browserVersion = await getBrowserVersion();

  const envContent = [
    `Build=${buildVersion}`,
    `Platform=${osName} ${osVersion}`,
    `Browser=${browserVersion}`,
    `ExecutionTime=${date}`,
  ].join("\n");

  fs.writeFileSync(envFile, envContent, "utf8");
  console.log(`🧩 environment.properties generated at: ${envFile}`);
  console.log(envContent);
}

// ✅ Generate executor.json
function generateExecutorFile() {
  if (!fs.existsSync(resultsDir)) {
    fs.mkdirSync(resultsDir, { recursive: true });
  }

  const user = process.env.USERNAME || process.env.USER || "Unknown User";
  const buildVersion = getBuildVersion();
  const date = getFormattedDate();
  const buildName = `KidSecure v${buildVersion} - ${date}`;

  const executorData = {
    name: `${user} - Local Run`,
    type: "Playwright Test Execution",
    buildName: buildName,
    buildOrder: Date.now(),
    reportName: "KidSecure Allure Report",
    reportUrl: "file:///C:/Playwright/KidSecureAutomation/allure-report/index.html",
    buildTime: date,
  };

  const filePath = path.join(resultsDir, "executor.json");
  fs.writeFileSync(filePath, JSON.stringify(executorData, null, 2));
  console.log(`executor.json created at: ${filePath}`);
  console.log(`Build Version: ${buildVersion}`);
}

// ✅ Copy history folder for Trend
function copyHistory() {
  const historySrc = path.join(reportDir, "history");
  const historyDest = path.join(resultsDir, "history");

  if (fs.existsSync(historySrc)) {
    fs.rmSync(historyDest, { recursive: true, force: true });
    fs.cpSync(historySrc, historyDest, { recursive: true });
    console.log("History folder copied for trend tracking");
  } else {
    console.log("No previous history found (trend will start from this run)");
  }
}

// ✅ Main setup function
(async () => {
  console.log("🚀 Setting up Allure reporting environment...");
  await generateEnvironmentFile();
  generateExecutorFile();
  copyHistory();
  console.log("✨ Allure setup complete.\n");
})();
