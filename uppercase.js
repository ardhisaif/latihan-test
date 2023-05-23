// TODO - menggabungkan 2 kata dan merubah menjadi kapital
const readline = require('readline'); 

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 1

let result = ""
r1.on('line', function(line) {
    result += line.toUpperCase() 
    if (n === 1) {
        result += " "
    }

    if (n === 2) {
        console.log(result);
        r1.close()
        process.exit()
    }
    n++
})