var net = require('net')

var server = net.createServer(function (socket) {
  var date = new Date()
  var ts = ""
  ts += date.getFullYear()
  ts += '-'
  ts += ((date.getMonth() < 9) ? ('0' + (date.getMonth()+1)) : (date.getMonth() + 1))
  ts += '-'
  ts += ((date.getDate() < 10) ? ('0' + date.getDate()) : (date.getDate()))
  ts += ' '
  ts += ((date.getHours() < 10) ? ('0' + date.getHours()) : (date.getHours()))
  ts += ':'
  ts += ((date.getMinutes() < 10) ? ('0' + date.getMinutes()) : (date.getMinutes()))
  ts += '\n'
  socket.end(ts)
})

server.listen(process.argv[2])
