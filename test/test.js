var assert = require('chai').assert;
var Emitter = require("./../index");
describe('Emitter', function() {
    var fn;
    before(function() {
        fn = function() {};
    })
    describe('#new emitter()', function() {
        it('should have on,off,emit methods defined', function() {
            var emitter = new Emitter(fn);
            assert.equal("function", typeof fn.on);
            assert.equal("function", typeof fn.off);
            assert.equal("function", typeof fn.emit);
        });
        it('should envoke on cb with same emit values', function() {
            fn.on("demo1", function(v1, v2, v3) {
                assert.equal(5, v1);
                assert.equal(6, v2);
                assert.equal(7, v3);
            });
            for (var i = 0; i < 3; i++) {
                fn.emit("demo1", 5, 6, 7);
            }
        })
        it('should not envoke cb', function() {
            var expect = function(v1, v2, v3) {
                assert.equal(1, 2);
            };
            fn.on("demo", expect);
            fn.off("demo", expect);
            fn.emit("demo", 1, 2, 3);
        })
    });
});
