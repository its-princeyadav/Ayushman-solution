const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on('pageerror', (err) => errors.push(err.message));
  await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(2000);

  const info = await page.evaluate(() => {
    const section = document.querySelector('.elementor-element-d0c9d71');
    const heading = section ? section.querySelector('.elementor-heading-title') : null;
    const iconBox = section ? section.querySelector('.wcf__iconbox') : null;
    return {
      sectionBg: section ? getComputedStyle(section).backgroundColor : 'NOT_FOUND',
      headingColor: heading ? getComputedStyle(heading).color : 'NOT_FOUND',
      iconColor: iconBox ? getComputedStyle(iconBox.querySelector('.icon')).color : 'NOT_FOUND',
    };
  });
  console.log('pageerrors:', JSON.stringify(errors));
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})();
