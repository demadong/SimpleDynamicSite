var router = require("./router.js");


//Problem: we need a simple way to look at a user's badge count and JavaScript points from a web browser
//Solution: use Node.js to perform the profile look-ups and server our template via HTTP.

//1. Create a web server

var http = require('http');

http.createServer(function (request, response) {
	router.home(request, response);
	router.user(request, response);
}).listen(3000);

console.log('Server running at http://<workspace-url>/');

