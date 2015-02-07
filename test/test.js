var test = require('tape');
var freemail = require('..');

test('gmail.com should be free', function(t) {
    t.plan(1);
    t.equal(freemail.isFree('smith@gmail.com'), true);
});

test('gmail.com should be free with domain only', function(t) {
    t.plan(1);
    t.equal(freemail.isFree('gmail.com'), true);
});

test('fb.com should not be free', function(t) {
    t.plan(1);
    t.equal(freemail.isFree('fb.com'), false);
});

test('mailinater.com should be free', function(t) {
    t.plan(1);
    t.equal(freemail.isFree('smith@mailinater.com'), true);
});

test('mailinater.com should be disposible', function(t) {
    t.plan(1);
    t.equal(freemail.isDisposible('smith@mailinater.com'), true);
});

test('gmail.com should not be disposible', function(t) {
    t.plan(1);
    t.equal(freemail.isDisposible('smith@gmail.com'), false);
});
