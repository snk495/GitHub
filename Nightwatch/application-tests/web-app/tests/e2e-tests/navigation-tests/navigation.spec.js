describe('Positive Navigation Tests:', function() {
  const navigation = browser.page.navigationObjects();

  let fullUrl = navigation.url();
    
  before(async function() {
    navigation.navigate();
  });
  
  after(async function() {
    browser.quit();
  });

  it('Company logo button should have expected href', function () { 
    fullUrl = navigation.url() + '/en-GB'
        
    browser.verifyLinkHref(navigation, '@logoButton', fullUrl)
  });

  it('Home button should have expected href', function () { 
    fullUrl = navigation.url() + '/en-GB'

    browser.verifyLinkHref(navigation, '@homeButton', fullUrl)
  });

  it('Explore button should have expected href', function () { 
    fullUrl = navigation.url() + '/en-GB/explore'

    browser.verifyLinkHref(navigation, '@exploreButton', fullUrl)
  });

  it('Shop button should have expected href', function () { 
    browser.verifyLinkHref(navigation, '@shopButton', 'https://shop.smartify.org/')
  });

  it('Partner button should have expected href', function () { 
    browser.verifyLinkHref(navigation, '@partnerButton', 'https://partners.smartify.org/')
  });
});