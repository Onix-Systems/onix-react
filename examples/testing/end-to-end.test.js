import type { Browser } from 'playwright';

describe('Create Account', () => {
  let browser: Browser;

  beforeAll(async () => {
    browser = await getBrowser();
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should Create Account', async () => {
    const browserPage = await browser.newPage();

    const signupBtn = `#signupBtn`;
    const signupBody = `#signupBody`;
    
    await browserPage.waitForSelector(signupBtn);
    await browserPage.click(signupBtn);
    await browserPage.waitForSelector(signupBody);

    const fullnameField = await browserPage.waitForSelector('#fullnameField', { state: 'attached' });
    const usernameField = await browserPage.waitForSelector('#usernameField', { state: 'attached' });
    const passwordField = await browserPage.waitForSelector('#passwordField', { state: 'attached' });

    await fullnameField.fill("John Smith");
    await usernameField.fill("JohnUser");
    await passwordField.fill("password123");
          
    const signupPageBtn = await browserPage.waitForSelector('#signupPageBtn', { state: 'attached' });

    await signupPageBtn.click();
    await browserPage.waitFor( 2000 );

    const fullname = await browserPage.waitForSelector('#fullname', { state: 'attached' });

    expect(fullname).toBe("John Smith");
  });
});
