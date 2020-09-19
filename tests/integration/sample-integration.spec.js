'use strict';

const chai = require('chai');
const expect = chai.expect;

describe('[index.html]', function() {
  it('should have a title', function() {
    return expect(browser.url('/').getTitle())
      .to.eventually.be.equal('Front-end Javascript Testing');
  });

  it('should have a press me button', function() {
    return expect(browser.getText('.create'))
      .to.eventually.be.equal('create');
  });

  it('should have a press me button', function() {
    return expect(browser.getText('.create'))
      .to.eventually.be.equal('create');
  });

  it('should have an output area which is intially empty', function() {
    return expect(browser.getText('.response'))
      .to.eventually.be.equal('');
  });

  it('should click the press me button', function() {
    return browser.click('.create');
  });

  it('should have an output area with resolved text', function() {
    return expect(browser.getText('.response'))
      .to.eventually.be.equal('Successfully created a test action: I have been testeed successfully');
  });

  it('should have a cancel button', function() {
    return expect(browser.getText('.cancel'))
      .to.eventually.be.equal('cancel');
  });

  it('should click the do not press me button', function() {
    return browser.click('.cancel');
  });

  it('should have an output area with rejected text', function() {
    return expect(browser.getText('.response'))
      .to.eventually.be.equal('Rejected this test action with errors: Bad this test failed');
  });
});
