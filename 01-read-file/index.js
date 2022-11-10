const fs = require('fs');
const path = require('path');

const textFile = path.join(__dirname, 'index', 'text');
const stream = fs.createReadStream('text.txt', 'utf-8');
let data = '';
stream.on('data', chunk => data += chank);

const {stdout} = process;
stdout.write(data);
