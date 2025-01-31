/**
 * Rules the aXe uses:
 * https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md
 * 
 * 
 */


describe('Accessibility Tests:', function() {
    
  before(async function() {
    browser.url(browser.launchUrl);
    await browser.axeInject();
  });

  after(function() {
    browser.quit();
  });

  it('Smartify app homepage meets WCAG 2.0 AA compliance levels', function(browser) {
    browser.axeRun('body', {
        runOnly: 'wcag2aa',
      });
  });
});