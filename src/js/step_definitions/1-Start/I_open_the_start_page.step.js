const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')

Given('I open the start page', function() {
  browser.url('/');
})

Then('I expect to be on the start page', function() {
  var title = browser.getTitle()
  expect(title).to.equal('International Waste Shipments - Training - GOV.UK');
})
