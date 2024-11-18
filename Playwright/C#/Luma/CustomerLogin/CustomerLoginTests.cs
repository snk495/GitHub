using Microsoft.Playwright;
using NUnit.Framework;
using Luma.CustomerLogin.PageObjects;

namespace Luma.CustomerLogin
{
    [TestFixture]
    public class CustomerLoginTests
    {
        private LumaPage _lumaPage;
        private IPage _page;
        private IPlaywright _playwright;
        private IBrowser _browser;
        private IBrowserContext _context;

        [SetUp]
        public async Task SetupAsync()
        {
            _playwright = await Playwright.CreateAsync();
            _browser = await _playwright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions { Headless = true });
            _context = await _browser.NewContextAsync();
            _page = await _context.NewPageAsync();
            _lumaPage = new LumaPage();

            const string url = "https://magento.softwaretestingboard.com/customer/account/login/";
            await _lumaPage.NavigateAsync(_page, url);
        }

        [Test]
        public async Task ShouldPopulateFormFieldsAndSubmitSuccessfully()
        {
            // Arrange
            var validValues = new[]
            {
                "testlogin@test.com",
                "Password!23"
            };

            // Act
            await _lumaPage.PopulateFormAsync(_page, validValues);
            await _page.Locator(CustomerLoginSelectors.CreateAccountButton).ClickAsync();

            // Assert
            Assert.That(await _page.Locator(CustomerLoginSelectors.PageTitle).InnerTextAsync(), Is.EqualTo("My Account"), "Page title should be 'My Account'");
        }
    }
}