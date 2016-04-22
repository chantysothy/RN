var config = require('../config');
var oauthserver = require('oauth2-server');
var mongoose = require('mongoose');


var oauth = require('./oauth');
var auth = oauthserver({
	model: oauth,
	grants: ['password'],
  debug: true
});

module.exports.server = auth;
module.exports.oauth = oauth;
module.exports.User = require('./user');
module.exports.OAuthClientsModel = require('./oauth_client');
module.exports.mongoose = mongoose;
