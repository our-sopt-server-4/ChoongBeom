
const fs = require('fs');


/*
    data는 생성할 file에 적을 데이터
    fs.writeFile (file, data, [options], callback) {}
    비동기 방식으로 파일 쓰기 - 순서 확인해보기
*/


const title = 'async' + num;
const data = `파일이 잘 만들어 졌어요!\n제 이름은 '${title}.txt'입니다 ~ `;
fs.writeFile (`${title}.txt`, data, (err, data) => {
    if (err) return console.log (err.message);
    console.log(`${title} 비동기라 순서가 뒤죽박죽 ~.~`);
});



// const crypto = require('crypto');

// const encrypt = (salt, password) => {
//     crypto.pbkdf2(password, salt.toString(), 1, 32, 'sha512', (err, derivedKey) => {
//         if (err) throw err;
//         const hashed = derivedKey.toString('hex');
//         console.log('salt : ', salt);
//         console.log('hashed : ', hashed);
//     });
// }

// const password = 'fl0wer';
// const salt = crypto.randomBytes(32).toString('hex');
// encrypt(salt, password);