const {chromium} = require('playwright');

( async() => {
    //function code

    //launching browser
    const browser = await chromium.launch({headless: false, slowMo: 100});
    // creating a page inside browser
    const page = await browser.newPage();
    // navigating to site
    await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');
    // check the second check box
    const checks = await page.$$('#main div :nth-child(1) input[type="checkbox"]')
    await checks[1].check();
    await checks[0].uncheck();
    //closing browser
    await browser.close();
})();
