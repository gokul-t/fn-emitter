var assert = require('assert');
var Emitter = require("./../index");
describe('Emitter', function() {
    var fn;
    it('should return function when the emitter is loaded', function() {
        assert.equal("function", typeof Emitter);
    });
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
        it('should envoke on cb with same emit value', function() {
            fn.on("demo", function(v1,v2,v3) {
                assert.equal(1, v1);
                assert.equal(2, v2);
                assert.equal(3, v3);
            });
            for (var i = 0; i < 3; i++) {
                fn.emit("demo", 1,2,3);
            }
        })
    });
});
