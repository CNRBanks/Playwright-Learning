const {chromium} = require('playwright');

( async() => { // anonymous arrow function
    //function code

    //launching browser
    const browser = await chromium.launch({headless: false, slowMo: 100});
    // creating a page inside browser
    const page = await browser.newPage();
    // navigating to site
    await page.goto('https://demoqa.com/frames');
    //logic to handle iframes

    const frame1 = await page.frame({url: /\/sample/});
    const heading1 = await frame1.$('h1');
    console.log(await heading1.innerText())

    //closing browser
    await browser.close();
})(); // function calls itself
