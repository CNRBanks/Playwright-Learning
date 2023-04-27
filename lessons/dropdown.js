const {chromium} = require('playwright');

( async () => {
    const browser = await chromium.launch({headless: false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const dropdown = await page.$('#dropdown');
    // by value
    await dropdown.selectOption({value: '2', delay : 900});
    // by label
    await dropdown.selectOption({label:'Option 1', delay : 900});
    // by index
    await dropdown.selectOption({index: 2, delay : 900});
    // values inside the dropdown
    const availableOptions = await dropdown.$$('option')
    for (let i = 0; i < availableOptions.length; i++){
        console.log(await availableOptions[i].innerText());
    };
    await browser.close();
}) ();