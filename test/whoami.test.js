const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const aws = require('../lib/whoami');

describe('whoami module', () => {
  it('handles non-existent profile gracefully without throwing', async () => {
    const result = await aws.whoAmI('non-existent-profile-12345');
    assert.match(result, /You are not logged in under the non-existent-profile-12345 profile\./);
  });

  it('handles undefined profile gracefully without throwing', async () => {
    // When no AWS credentials are configured in test runner env
    const result = await aws.whoAmI();
    assert.equal(typeof result, 'string');
    assert.ok(
      result.includes('You are logged in as') ||
      result.includes('You are not logged in under any profile.')
    );
  });
});
