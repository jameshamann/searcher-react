'use strict';

const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const chai = require('chai');
const expect = chai.expect;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

describe('Movie and Tv Show Search', () => {
  before(function(done) {
       driver.navigate().to('http://localhost:3000/').then(() => done());
   });

   it('displays a homepage', (done) => {
   });


 after(function(done) {
   driver.quit().then(() => done());
  });


});
