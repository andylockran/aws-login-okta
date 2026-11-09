const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const inquirerHelpers = require('../lib/inquirer');

describe('inquirer module (@inquirer/prompts)', () => {
  it('exports expected prompt helper functions and validators', () => {
    assert.equal(typeof inquirerHelpers.askAWSProfile, 'function');
    assert.equal(typeof inquirerHelpers.askOKTAInstanceDetails, 'function');
    assert.equal(typeof inquirerHelpers.askOKTACredentials, 'function');
    assert.ok(inquirerHelpers.validators);
  });

  it('validates AWS profile correctly', () => {
    const { validateAWSProfile } = inquirerHelpers.validators;
    assert.equal(validateAWSProfile(''), 'Please enter the name of your AWS profile.');
    assert.equal(validateAWSProfile('   '), 'Please enter the name of your AWS profile.');
    assert.equal(validateAWSProfile(null), 'Please enter the name of your AWS profile.');
    assert.equal(validateAWSProfile('production'), true);
    assert.equal(validateAWSProfile('default'), true);
  });

  it('validates OKTA instance details correctly', () => {
    const { validateOKTAUrl } = inquirerHelpers.validators;
    assert.equal(validateOKTAUrl(''), 'Please enter the URL of your OKTA instance.');
    assert.equal(validateOKTAUrl('   '), 'Please enter the URL of your OKTA instance.');
    assert.equal(validateOKTAUrl(null), 'Please enter the URL of your OKTA instance.');
    assert.equal(validateOKTAUrl('https://mycompany.okta.com'), true);
  });

  it('validates OKTA credentials correctly', () => {
    const { validateUsername, validatePassword } = inquirerHelpers.validators;
    assert.equal(validateUsername(''), 'Please enter your username or e-mail address.');
    assert.equal(validateUsername('   '), 'Please enter your username or e-mail address.');
    assert.equal(validateUsername('user@example.com'), true);

    assert.equal(validatePassword(''), 'Please enter your password.');
    assert.equal(validatePassword(null), 'Please enter your password.');
    assert.equal(validatePassword('supersecret'), true);
  });
});
