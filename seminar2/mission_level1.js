const fs = require('fs');
const crypto = require('crypto');


const data = `mission_level1 암호화`;
fs.writeFile (`password.txt`, data, (err, data) => {
    if (err) return console.log (err.message);
    console.log(`비동기라 순서가 뒤죽박죽 ~.~`);
});

fs.readFile(`mission1.txt`, (err, data) => {
    if (err) return console.log (err.message);
    const text = data;
});

const secret = 'abcdefg'
const hash = crypto.createHmac('sha256', secret).update(data).digest('hex');
console.log(hash)

fs.writeFile(`hashed.txt`, hash, (err, hash) => {
    if (err) return console.log(err.message);
    console.log(`비동기라 순서가 뒤죽박죽~`);
});

