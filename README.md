
fn-emitter
==========

Extend your function with an event emitter.


## Installation &nbsp; 

```sh
$ npm install fn-emitter
```

## Usage

var Emitter = require("fn-emitter");

var Demo = function(){
	new Emitter(this);
}

var demo = new Demo();
var cb = function(msg){
	console.log(msg);
};

**register an event listener**

demo.on("test",cb);

**emit an event**

demo.emit("test","successfully emitted and recieved");

**remove the event listener**

demo.off("test",cb)


## api

**on** : register an event listener
.on("event name",callback)

**emit** : emit an event.
.emit("event name",params...)

**off** : unregister an event listener or all listeners for an event
.off("event name",[cb])
.off("event name") - if 2nd parameter is not specified then all listeners for the specific event is unregistered.

demo at https://runkit.com/586a7335e32a6d00155783d4/586bf0754fcd4e0014699586

## License

MIT &copy; 2016 contributors

