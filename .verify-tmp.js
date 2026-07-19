const { webkit } = require('playwright');

(async () => {
  for (const url of ['http://localhost:3000/', 'http://localhost:3000/industries']) {
    const browser = await webkit.launch();
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    const warnings = [];
    page.on('console', (msg) => { if (msg.type() === 'warning') warnings.push(msg.text()); });
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(4000);
    console.log(`\n--- fresh browser, ${url} ---`);
    console.log('warnings:', JSON.stringify(warnings, null, 2));
    await browser.close();
  }
})();
