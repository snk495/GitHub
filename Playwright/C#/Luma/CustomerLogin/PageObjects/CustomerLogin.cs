using Microsoft.Playwright;
using Luma.CustomerLogin.PageObjects;

namespace Luma.CustomerLogin.PageObjects
{
    public class LumaPage
    {
        public async Task NavigateAsync(IPage page, string url)
        {
            await page.GotoAsync(url);
        }

        public async Task PopulateFormAsync(IPage page, string[] inputValues)
        {
            await page.Locator(CustomerLoginSelectors.EmailInput).FillAsync(inputValues[0]);
            await page.Locator(CustomerLoginSelectors.PasswordInput).FillAsync(inputValues[1]);
        }
    }
}