const fs = require('fs')

function fsRead(url) {
    return new Promise((resolve, reject) => {
        fs.readFile(url, {flag: 'r', encoding: 'utf-8'}, (err, data) => {
            if(err) { 
                // console.log('err',err);
                reject(err)
            } else {
                // console.log('data', data);
                resolve(data)
            }
        }) 
    })
}


function fsWrite(url, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(url, content ,{flag: 'a', encoding: 'utf-8'}, (err) => {
            if(err) {
                // console.log('error', err);
                reject(err)
            } else {
                // console.log('文件写入成功！');  //文件写入成功！
                resolve(err)
            }
        })
    })
}

module.exports = {fsRead, fsWrite}