function chain() {
  var functions = [].slice.call(arguments);
  var next = function() {
    var args = [].slice.call(arguments);
    var ret = typeof args[0] === 'undefined' ? true : !!args[0];
    var nextArgs = [];
    if (args[1]) {
      nextArgs = args.slice(1);
    }

    if (ret) {
      functions.shift().apply(this, [next].concat(nextArgs));
    }

  }

  functions.shift().call(this, next);
}
