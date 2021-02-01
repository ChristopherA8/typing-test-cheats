const puppeteer = require('puppeteer');
const url = 'https://thepracticetest.com/typing/tests/practice-paragraphs/';

const { promisify } = require('util')
const sleep = promisify(setTimeout)

var count;
async function main() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({width: 1200, height: 720});
    await page.goto(url, { waitUntil: 'networkidle0' }); // wait until page load
    await sleep(3000)

    await page.type('#typing',     await page.evaluate(async (page) => {
        var inputPanel = document.getElementsByClassName('prompt');
        console.log(inputPanel[0].innerText);
        return inputPanel[0].innerText;
    }), {delay: 0});
    await Promise.all([
    ]);
}

main();