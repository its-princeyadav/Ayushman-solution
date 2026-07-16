const { chromium } = require("playwright");
const path = require("path");
const OUT = "C:\\Users\\DIGITA~1\\AppData\\Local\\Temp\\claude\\c--Users-Digitalbluez-Desktop-Ayushman-solution\\4ef615ff-92cc-453a-94eb-34079ca74cc8\\scratchpad";

const viewports = [
  { name: "desktop-1440", width: 1440, height: 900 },
  { name: "laptop-1366", width: 1366, height: 800 },
  { name: "tablet-1024", width: 1024, height: 900 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "mobile-375", width: 375, height: 812 },
];

(async () => {
  const browser = await chromium.launch();
  const errors = [];
  for (const vp of viewports) {
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    page.on("console", (msg) => { if (msg.type() === "error") errors.push(`[${vp.name}] ${msg.text()}`); });
    page.on("pageerror", (err) => errors.push(`[${vp.name}] pageerror: ${err.message}`));
    await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
    await page.waitForTimeout(500);

    const navHeader = page.locator(".elementor-47").first();
    await navHeader.screenshot({ path: path.join(OUT, `logo-navbar-${vp.name}.png`) }).catch(() => {});

    const img = page.locator('img[alt=""][src*="Latets-Logo"]').first();
    const box = await img.boundingBox().catch(() => null);
    const naturalSize = await img.evaluate((el) => ({ w: el.naturalWidth, h: el.naturalHeight, cw: el.clientWidth, ch: el.clientHeight })).catch(() => null);
    const navBox = await navHeader.boundingBox().catch(() => null);

    console.log(vp.name, JSON.stringify({ box, naturalSize, navHeaderHeight: navBox && navBox.height }));

    await page.close();
  }
  await browser.close();
  console.log("CONSOLE_ERRORS:", errors.length ? JSON.stringify(errors) : "none");
})();
