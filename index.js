(function() {
  var mongo;

  mongo = require('mongodb');

  module.exports = function(config) {
    var p_db;
    p_db = null;
    return {
      initPool: function(done) {
        return mongo.connect(config.connection, function(err, res) {
          if (err) {
            return done(err);
          }
          p_db = res;
          return done(null, p_db);
        });
      },
      getInstance: function(done) {
        if (!p_db) {
          return this.initPool(done);
        }
        return done(null, p_db);
      },
      getCollection: function(collection, done) {
        return this.getInstance(function(err, db) {
          if (err) {
            return done(err);
          }
          return done(null, db.collection(collection));
        });
      }
    };
  };

}).call(this);
