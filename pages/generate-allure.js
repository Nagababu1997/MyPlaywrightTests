const { execSync } = require('child_process');

try {
  console.log('Cleaning and generating Allure report...');
  execSync('npx allure generate allure-results --clean -o allure-report', { stdio: 'inherit' });

  console.log('Opening Allure report...');
  execSync('npx allure open allure-report', { stdio: 'inherit' });

} catch (error) {
  console.error('Error while generating Allure report:', error.message);
}
