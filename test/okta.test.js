const { describe, it, beforeEach, afterEach } = require('node:test');
const assert = require('node:assert/strict');
const okta = require('../lib/okta');

describe('okta module', () => {
  let originalUrls;

  beforeEach(() => {
    originalUrls = okta.conf.get('instance_urls');
  });

  afterEach(() => {
    if (originalUrls !== undefined) {
      okta.conf.set('instance_urls', originalUrls);
    } else {
      okta.conf.delete('instance_urls');
    }
  });

  it('getInstance retrieves instance_urls from configstore', () => {
    okta.conf.set('instance_urls', ['https://test.okta.com']);
    const urls = okta.getInstance();
    assert.deepEqual(urls, ['https://test.okta.com']);
  });

  it('registerNewInstance adds a new instance url', () => {
    okta.conf.set('instance_urls', ['https://first.okta.com']);
    const updated = okta.registerNewInstance('https://second.okta.com');
    assert.deepEqual(updated, ['https://first.okta.com', 'https://second.okta.com']);
    assert.deepEqual(okta.conf.get('instance_urls'), ['https://first.okta.com', 'https://second.okta.com']);
  });

  it('registerNewInstance does not add duplicate instance url', () => {
    okta.conf.set('instance_urls', ['https://first.okta.com']);
    const updated = okta.registerNewInstance('https://first.okta.com');
    assert.deepEqual(updated, ['https://first.okta.com']);
  });

  it('registerNewInstance handles empty url gracefully', () => {
    okta.conf.set('instance_urls', ['https://first.okta.com']);
    const res = okta.registerNewInstance();
    assert.deepEqual(res, ['https://first.okta.com']);
  });
});
