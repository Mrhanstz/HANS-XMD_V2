const puppeteer = require('puppeteer-core'); // Utilisez 'core' pour compatibilité Docker

module.exports = async (url, selector) => {
  const browser = await puppeteer.launch({ 
    executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium-browser',
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });
  await page.waitForSelector(selector, { timeout: 5000 });
  const screenshot = await page.screenshot({ encoding: 'binary' });
  await browser.close();
  return screenshot;
};
