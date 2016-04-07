var http = require('http')

var allData = ""


function append(data) {
  allData += data
}

function done() {
  console.log(allData.length)
  console.log(allData)
}

http.get(process.argv[2], function(response) {
  response.setEncoding('utf-8')
  response.on('data', append)
  response.on('error', console.error)
  response.on('end', done)
})
