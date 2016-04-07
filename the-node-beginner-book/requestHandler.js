var querystring = require('querystring'),
    formidable = require('formidable'),
    fs = require('fs'),
    util = require('util');

function start(request, response) {
    console.log('Request handler for \'start\' is called');
    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" ' +
        'content="text/html; charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" enctype="multipart/form-data" ' +
        'method="post">'+
        '<input type="file" name="upload" multiple="multiple">'+
        '<input type="submit" value="Upload"/>' +
        '</form>'+
        '</body>'+
        '</html>';
   response.writeHead(200, {'Content-Type' : 'text/html'});
   response.write(body);
   response.end();
}

function upload(request, response) {
    console.log('Request handler for \'upload\' was called');
    var form = new formidable.IncomingForm();
    form.parse(request, function(error, fields, files) {
       console.log('Parsing done:' + util.inspect({fields : fields, files: files}));
       fs.rename(files.upload.path, '/tmp/test.png', function(error){
          if (error) {
              fs.unlink('/tmp/test.png');
              fs.rename(files.upload.path, '/tmp/test.png');
          }
       });
       response.writeHead(200, {'Content-Type': 'text/html'});
       response.write('received image:<br/>');
       response.write('<img src="/show"/>');
       response.end();
    });
}

function show(request, response) {
    console.log('Request handler for \'show\' was called');
    response.writeHead(200, {'Content-Type': 'image/png'});
    fs.createReadStream("/tmp/test.png").pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;