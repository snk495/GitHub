import re
import pytest
from playwright.sync_api import Page, expect
from page_objects.add_to_cart import AddToCart
from page_objects.add_to_cart_selectors import AddToCartSelectors

@pytest.fixture(scope="function")
def addToCart(page: Page):
    addToCart = AddToCart(page)
    addToCart.navigate('https://magento.softwaretestingboard.com/push-it-messenger-bag.html')
    return addToCart


def test_add_to_cart_updates_cart_with_single_item(addToCart: AddToCart, page: Page):
    # Act
    addToCart.selectAddToCart()
    # Assert
    expect(page.locator(AddToCartSelectors.quantity_counter)).to_contain_text("1")