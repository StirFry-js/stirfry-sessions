'use strict';
const sessions = {};
let sessionCounter = 0;
const cookies = require('cookies');
const crypto = require('crypto');
const StirFry = require('stirfry');
const extension = StirFry.extension();

extension.process(function(req, res) {
	if ((req.cookies || {}).constructor != cookies) {
		req.cookies = new cookies(req.full, res.full);
	}
});

extension.pre(function(req) {
	//If there isn't already a session
	let session = req.cookies.get('sessionId');

	if (!session || !sessions[session]) {
		//Generate a session id
		const sessionId = crypto.randomBytes(100).toString('base64') + (sessionCounter++).toString(36);

		//Add that to the sessions object
		sessions[sessionId] = {id: sessionId};
		//Set a cookie on the clients computer that maps "sessionId" to the variable sessionId
		req.cookies.set('sessionId', sessionId);
		session = sessionId;
	}


	//Create the request.session object
	req.session = {
		get: function(key) {
			return sessions[session][key];
		},
		set: function(key, val) {
			return sessions[session][key] = val;
		}
	};
});

module.exports = extension;