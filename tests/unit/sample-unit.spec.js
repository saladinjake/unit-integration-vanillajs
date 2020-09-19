const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const functionToTest = require('../../src/helpers.js');

describe('[sample unit]', function() {
  it('should pass with true input', function() {
    return expect(functionToTest(true))
      .to.eventually.be.equal('I have been testeed successfully');
  });

  it('should fail  with false input', function() {
    return expect(functionToTest(false))
      .to.eventually.be.rejectedWith('Bad this test failed');
  });
});
