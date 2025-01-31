module.exports = {
    url: function() { 
        return this.api.launchUrl
    },
    commands: [],
    elements: {
      logoButton: {
        selector: 'body > main > nav > a'
      },
      homeButton: {
        selector: 'body > main > nav > ul > li:nth-child(1) > a'
      },
      exploreButton: {
        selector: 'body > main > nav > ul > li:nth-child(2) > a'
      },
      shopButton: {
        selector: 'body > main > nav > ul > li:nth-child(3) > a'
      },
      partnerButton: {
        selector: 'body > main > nav > div > a',
      }
    }
  };