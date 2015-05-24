var Hapi = require('hapi');
var Good = require('good');
var GoodConsole = require('good-console');

//Create a service with a host and port
var server = new Hapi.Server();
server.connection({
	port: process.env.PORT || 8000
});

//Add the route
server.route({
	method: 'GET',
	path: '/hello/{user}',
	handler: function (request, reply) {
		reply('Hello ' + request.params.user);
	}
});

server.register({
    register: Good,
    options: {
        reporters: [{
            reporter: GoodConsole,
            events: {
                response: '*',
                log: '*'
            }
        }]
    }
}, function (err) {
    if (err) {
        throw err; 
    // Something bad happened loading the plugin
    }

	//If all ok, Start the server
	server.start(function () {
   		console.log('Server running at:', server.info.uri);
	});
});