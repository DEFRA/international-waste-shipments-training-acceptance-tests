const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')

var notificationId = require('../../../js/pages/notificationId.page.js');

Then('I will be shown a notification number', function() {
  var number = browser.getText(".govuk-inset-text")
  expect(number).to.match(/GB\s\d+/, 'Notification number does not follow format');
})