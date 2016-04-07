var http = new require('http');
var url = new require('url');

function start(handle, route) {
    var port = 8888;
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log(onRequest.name + ' :Received a request for pathname ' + pathname);
        route(handle, pathname, request, response);
    }
    http.createServer(onRequest).listen(port);
    console.log('Server is listening on port:' + port);
}

exports.start = start;