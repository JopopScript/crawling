const { default: puppeteer } = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page1 = await browser.newPage()
  const page2 = await browser.newPage()

  await page1.goto('https://www.jacksonsart.com/');
  await new Promise(r => setTimeout(r, 1000));
  
  await page2.goto('https://google.com');
  await new Promise(r => setTimeout(r, 1000));

  await page1.goto('https://daum.net');
  await new Promise(r => setTimeout(r, 1000));

  await page1.close();
  await page2.close();
  await browser.close();
})()