var mymodule = require('./mymodule')
var dirName = process.argv[2]
var fileExt = process.argv[3]

mymodule(dirName, fileExt, function(err, files) {
  if (err) {
    console.error(err);
    return;
  }
  files.forEach(function(file) {
    console.log(file);
  })
})
