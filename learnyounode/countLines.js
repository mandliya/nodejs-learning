var fs = require('fs')
var buf = fs.readFileSync(process.argv[2])
var content = (buf.toString()).split('\n');
console.log(content.length - 1)
