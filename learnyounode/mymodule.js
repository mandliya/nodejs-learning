
module.exports = function(dirName, fileExt, callback) {
  var fs = require('fs')
  var files = []
  fs.readdir(dirName,function(err, fileContents) {
    if (err) {
      return callback(err);
    }
    fileContents.filter(function matchExt(file) {
        if (file.split('.')[1] == fileExt) {
          files.push(file)
        }
    })
    return callback(null, files)
  })
}
