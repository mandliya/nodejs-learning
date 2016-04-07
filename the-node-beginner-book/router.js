function route(handle, pathname, request, response) {
   if (typeof handle[pathname] === 'function') {
       handle[pathname](request, response);
   } else {
       console.log('Invalid request received for ' + pathname + '.');
       response.writeHead(404, {'Content-Type' : 'text/plain'});
       response.write('Page not found');
       response.end();
   }
}

exports.route = route;