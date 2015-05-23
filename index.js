var Hapi = require('hapi');

//Create a service with a host and port
var server = new Hapi.Server();
server.connection({
	port: process.env.PORT || 8000
});

//Add the route
server.route({
	method: 'GET',
	path: '/hello',
	handler: function (request, reply) {
		reply('hello world');
	}
});

//Start the server
server.start(function () {
    console.log('Server running at:', server.info.uri);
});