const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')

var shipmentType = require('../../../js/pages/shipmentType.page.js');

When('I choose a recovery notification', function() {
  shipmentType.recovery.click();
  shipmentType.continue.click();
})