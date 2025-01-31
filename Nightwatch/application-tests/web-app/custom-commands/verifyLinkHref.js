module.exports = {
  command: function (pageObject, elementAlias, expectedUrl) {
    let selector;

    // Check if the elementAlias starts with '@' (Nightwatch's alias convention)
    if (elementAlias.startsWith('@')) {
      const alias = elementAlias.substring(1); // Remove '@' from the alias

      // Access the alias from the provided pageObject
      if (pageObject.elements && pageObject.elements[alias]) {
        selector = pageObject.elements[alias].selector; // Get the selector from the alias
      } else {
        throw new Error(`Alias "${alias}" not found in the provided page object`);
      }
    } else {
      // If no alias, use the raw selector
      selector = elementAlias;
    }

    // Perform the custom command with the resolved selector
    return this.getAttribute(selector, 'href', (result) => {
      this.assert.strictEqual(
        result.value,
        expectedUrl,
        `The href of ${elementAlias} matches ${expectedUrl}`
      );
    });
  },
};