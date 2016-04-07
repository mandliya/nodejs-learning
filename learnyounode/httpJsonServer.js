var http = require('http')
var fs = require('fs')
var url = require('url')

var port = Number(process.argv[2])
var server = http.createServer(httpReqRes)
server.listen(port)

function httpReqRes( req, res ) {
  if (req.method == 'GET') {
    var reqUrl = url.parse(req.url, true)
    var ts = new Date(reqUrl.query['iso'])
    res.writeHead(200, { 'Content-Type': 'application/json' })
    if ( reqUrl.pathname == '/api/parsetime') {
      var jsonObj = JSON.stringify({ hour : ts.getHours(), minute : ts.getMinutes(), second : ts.getSeconds()})
      res.end(jsonObj)
    }
    if ( reqUrl.pathname == '/api/unixtime') {
      var jsonObj = JSON.stringify({ unixtime : ts.getTime()})
      res.end(jsonObj)
    }
  }
}
