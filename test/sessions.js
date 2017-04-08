const should = require('should');
const StirFry = require('stirfry');
const request = require('request');
const sessions = require('../');

describe('sessions', function() {
	it('should keep cookies alive', function(done) {
		const j = request.jar();
		const server = new StirFry(8080);

		server.use(sessions);

		server.req('/', function(req) {
			req.session.set('name', 'hello');
		});

		server.req('/retrieve', function(req, res) {
			res.send(req.session.get('name'));
		});

		request({url: 'http://localhost:8080', jar: j}, function(err, response) {
			if (err) done(err);
			response.body.should.equal('');
			request({url: 'http://localhost:8080/retrieve', jar: j}, function(err, response) {
				server.close();
				if (err) done(err);
				response.body.should.equal('hello');
				done();
			});
		});
	});
});