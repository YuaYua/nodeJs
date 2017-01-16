var fs=require('fs');
fs.createReadStream('test.txt').pipe(fs.createWriteStream("th.txt"));