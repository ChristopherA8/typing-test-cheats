const puppeteer = require('puppeteer');
const url = 'https://humanbenchmark.com/tests/aim';

const { promisify } = require('util')
const sleep = promisify(setTimeout)

var count;
async function main() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({width: 1200, height: 720});
    await page.goto(url, { waitUntil: 'networkidle0' }); // wait until page load
    await sleep(10000)

    for (let index = 0; index < 30; index++) {
        await page.click('.css-z6vxiy')
    }

    await Promise.all([
    ]);
}

main();