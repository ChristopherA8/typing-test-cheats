const puppeteer = require('puppeteer');
const url = 'https://humanbenchmark.com/tests/reactiontime';

const { promisify } = require('util')
const sleep = promisify(setTimeout)

var count;
async function main() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({width: 1200, height: 720});
    await page.goto(url, { waitUntil: 'networkidle0' }); // wait until page load
    await sleep(10000)
    await page.click('.view-splash')
    await sleep(1000)

    while(true) {
        await page.click('.view-go').catch(err => console.error(err))
        await page.click('.view-result').catch(err => console.error(err))
    }

    await Promise.all([
    ]);
}

main();