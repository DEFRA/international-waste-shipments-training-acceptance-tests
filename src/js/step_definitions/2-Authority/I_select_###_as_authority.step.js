const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')

var authority = require('../../../js/pages/authority.page.js');

Given('I select the Environment Agency as authority', function() {
  authority.environmentAgency.click();
  authority.continue.click();
})