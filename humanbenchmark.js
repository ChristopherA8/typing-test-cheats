const puppeteer = require('puppeteer');
const url = 'https://humanbenchmark.com/tests/typing/';

const { promisify } = require('util')
const sleep = promisify(setTimeout)

var count;
async function main() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({width: 1200, height: 720});
    await page.goto(url, { waitUntil: 'networkidle0' }); // wait until page load
    await sleep(9000)

    await page.keyboard.type(    
        await page.evaluate(async () => {
            var inputPanel = document.getElementsByClassName('letters');
            console.log(inputPanel[0].innerText);
            return inputPanel[0].innerText;
        })
    );

    await Promise.all([
    ]);

}

main();