const {chromium} = require('playwright');



( async() => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('https://secure.etosoftware.ca/NewLogin.aspx');
    // insert email
    const email = await page.$('#ContentPlaceHolder1_txtUsername');
    await email.type('walterwhitejr@gmail.com', {delay : 50});
    // insert password
    const password = await page.$('#ContentPlaceHolder1_txtPassword');
    await password.type('JustShutUp1', {delay : 50});
    // click login
    await page.click('#ContentPlaceHolder1_lbtnSubmitLogin', {delay: 50});
    // concurrent login
    await page.click('#ContentPlaceHolder1_btnFlushConcurrentLogins', {delay: 50});
    // legal use statement text
    await page.click('#ContentPlaceHolder1_ctrlEntList_chkLegalUseCheck', {delay: 50});
    // continue after legal text
    await page.click('#ContentPlaceHolder1_ctrlEntList_btn_LegalSubmit',{delay: 50});
    // open Reports side nav
    await page.click('#Nav11',{delay: 100});
    /// click ETO Results
    await page.click('#Link628', {delay: 100});
    // take screenshot
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    // close newly opened tab

    //logout -- missing step
    await page.click('#logOff', {delay: 100});
    await browser.close();
})();

