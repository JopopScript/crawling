const { default: puppeteer } = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.jacksonsart.com/');

  // .js-nav-level-1  oil / acrylic
  // .js-nav-level-2  Traditional Oil Paint
  // .js-nav-level-2 > ul > il들  blockx
  // header__list__button header__list__button--deep header__list__button--sub-nav

  const directSelector = '.media-flex__body';
  await page.waitForSelector(directSelector);

  // Extract the results from the page.
  const links = await page.evaluate(directSelector => {
    return [...document.querySelectorAll(directSelector)].map(anchor => {
      const a = JSON.stringify(anchor.textContent).replace('\"', '')
      return a.replace('\"', '')
      // const title = anchor.textContent.split('\n')[0].trim();
      // return `${title} - ${anchor.href}`;
      // return anchor.textContent
    });
  }, directSelector);

  // Print all the files.
  console.log(links.join('\n'));

  await browser.close();
})();