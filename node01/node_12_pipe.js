var fs=require('fs');
fs.createReadStream('10.txt').pipe(fs.createWriteStream("haha.txt"))