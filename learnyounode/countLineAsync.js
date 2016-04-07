var fs = require('fs')

function countLines(error, fileContents) {
  if (error) {
    console.error(error)
    return
  }
  console.log(fileContents.split('\n').length - 1);
}

fs.readFile(process.argv[2], 'utf-8', countLines)
