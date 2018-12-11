const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')

var start = require('../../../js/pages/start.page.js');
var authority = require('../../../js/pages/authority.page.js');

Given('I create a new notification', function() {
  browser.url('/');
  start.newNotification.click();
})