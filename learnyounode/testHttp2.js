var http = require('http')
var bl = require('bl')


var dataCollected = ['','','']
var dataDone = [false, false, false]

function sequence(url, index ) {
  http.get( url , function(response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }
      data = data.toString()
      dataDone[index] = true
      dataCollected[index] = data
      printData()
    }))
  })
}

function printData() {
  if ( dataDone[0] == true &&
       dataDone[1] == true &&
       dataDone[2] == true ) {
      dataCollected.forEach(function(data) {
        console.log(data)
      })
  }
}

sequence(process.argv[2], 0);
sequence(process.argv[3], 1);
sequence(process.argv[4], 2);
