'use strict';

const isUrlCheck = require('../src/index.js'),
    assert = require('assert'),
    fs = require('fs');

describe('isUrlCheck', function () {
    it('should say if the string is valid url or not', function (done) {
        assert.equal(isUrlCheck('https://example.com'), true);
        assert.equal(isUrlCheck('http://example.com'), true);
        assert.equal(isUrlCheck('example.com'), false);
        assert.equal(isUrlCheck('https://example'), false);
        assert.equal(isUrlCheck('ftp://example'), false);
        assert.equal(isUrlCheck('gopher://example'), false);
        assert.equal(isUrlCheck('notvalidurl'), false);
        assert.equal(isUrlCheck('http://example.org/foo/bar;param?query#frag'), true);
        assert.equal(isUrlCheck('http://example.org/a␠b'), true);
        assert.equal(isUrlCheck('http://%zz%66%a/'), false);
        assert.equal(isUrlCheck('http://localhost'), true);
        assert.equal(isUrlCheck('https://localhost'), true);
        assert.equal(isUrlCheck('https://Http://example.com'), false);
        done();
    });
});

describe('urlLengthCheck', function () {
    it('should check url length', function (done) {
        var hugeWordLen = 2000;
        var hugeWord = 'a'.repeat(hugeWordLen);
        var url = 'http://google.' + hugeWord;
        assert.equal(isUrlCheck(url), true);
        var hugeWordLen = 3000;
        var hugeWord = 'a'.repeat(hugeWordLen);
        var url = 'http://google.' + hugeWord;
        assert.equal(isUrlCheck(url), false);
        var hugeWordLen = 3000;
        var hugeWord = '.a'.repeat(hugeWordLen);
        var url = 'http://google.' + hugeWord;
        assert.equal(isUrlCheck(url), false);
        var hugeWordLen = 3000;
        var hugeWord = '/a'.repeat(hugeWordLen);
        var url = 'http://google.' + hugeWord;
        assert.equal(isUrlCheck(url), false);
        var hugeWordLen = 1000;
        var hugeWord = '/a'.repeat(hugeWordLen);
        var url = 'http://google.com/' + hugeWord;
        assert.equal(isUrlCheck(url), true);

        done();
    });
});