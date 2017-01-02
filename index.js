(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = factory();
    } else {
        // Browser globals
        root.Emitter = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {

    var Emitter = function(fn, opts) {
        if(!fn || !typeof fn === "object"){
            console.error("first argument must need to be an object.");
            return;
        }
        var regEvents = {};
        fn.on = function(evName, cb) {
            if (regEvents[evName]) {
                regEvents[evName].push(cb);
            } else {
                regEvents[evName] = [cb];
            }
            return fn;
        };
        
        fn.off = function(evName, cb) {
            if (cb && regEvents[evName]) {
                var index = regEvents[evName].indexOf(cb);
                if (index !== -1) {
                    regEvents[evName].splice(index, 1);
                }
            } else {
                regEvents[evName] = [];
            }
            return fn;
        };

        fn.emit = function() {
            var regEvent = regEvents[arguments[0]];
            var args = Array.prototype.slice.call(arguments, 1);
            if (regEvent) {
                regEvent.forEach(function(c) {
                    c.apply(null, args);
                });
            }
        };
    }
    return Emitter;
}));
