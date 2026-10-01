

const { chromium } = require("playwright");

/*const { email,password } = require("./user");
const { use } = require("./playwright.config");

*/


(async () => {
    const browser = await chromium.launch({headless:false, slowMo: 600});
    const page = await browser.newPage();
    await page.goto("https://netology.ru");


  await page.pause();
 })();