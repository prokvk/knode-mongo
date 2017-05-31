mongo = require 'mongodb'

module.exports = (config) ->

	p_db = null

	initPool: (done) ->
		mongo.connect config.connection, (err, res) ->
			return done err if err

			p_db = res
			done null, p_db

	getInstance: (done) ->
		return @initPool done unless p_db

		done null, p_db

	getCollection: (collection, done) ->
		@getInstance (err, db) ->
			return done err if err

			done null, db.collection collection