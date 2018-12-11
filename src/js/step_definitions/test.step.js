const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')

Given('I open the home page', function() {
  browser.url('/');
})

Then('I expect to be on the home page', function() {
  var title = browser.getTitle()
  expect(title).to.equal('Example Domain');
})
