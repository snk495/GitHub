from playwright.sync_api import Page
from page_objects.add_to_cart_selectors import AddToCartSelectors

class AddToCart:
    def __init__(self, page: Page):
        self.page = page

    def navigate(self, url: str):
        self.page.goto(url)
        if self.page.locator(AddToCartSelectors.fc_dialog).is_visible():
            self.page.locator(AddToCartSelectors.fc_dialog_consent).click()

    def selectAddToCart(self):
        self.page.locator(AddToCartSelectors.add_to_cart_button).click()