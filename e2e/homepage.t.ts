import { chromium, ChromiumBrowser } from 'playwright'

describe('test', () => {
    let browser: ChromiumBrowser;
    let page;
    beforeAll(async () => {
        browser = await chromium.launch(({ headless: false }));
    });
    afterAll(async () => {
        await browser.close();
    });
    beforeEach(async () => {
        page = await browser.newPage();
    });
    afterEach(async () => {

    });
    
    it('should work', async () => {

    });
})
