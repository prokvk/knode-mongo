knode-mongo
===========

is a simple node module wrapper on `mongodb`.

# Install:

```
npm install --save knode-mongo
```

# Usage:

## Config sample

```
mongo:
	connection: "mongodb://#{process.env.MONGO}:#{process.env.MONGO_PORT}/#{process.env.MONGO_DB}?fsync=false"
```

## JS sample

```javascript
var mongo = require('knode-mongo')(config);

mongo.getCollection('images', function(err, coll) {
  return coll.count({}, null, function(err, out) {
    if (err) {
      console.log("ERROR: " + err);
    }
    return console.log(out);
  });
});
```