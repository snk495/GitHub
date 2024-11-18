namespace Luma.CustomerLogin.PageObjects
{
    public static class CustomerLoginSelectors
    {
        public static string EmailInput = "#email";
        public static string PasswordInput = "#pass >> nth=0";
        public static string CreateAccountButton = "button[class=\"action login primary\"]";
        public static string PageTitle = ".page-title";
    }
}