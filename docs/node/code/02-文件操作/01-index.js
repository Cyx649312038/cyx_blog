const { rejects } = require('assert');
var fs = require('fs');
const { resolve } = require('path');
var fd = fs.openSync('./hello.txt', 'r')
console.log(fd); //21

// var buf = Buffer.alloc(20)

// 同步读取
var content = fs.readFileSync('./hello.txt', {
    flag: 'r',
    encoding: 'utf-8'
})
console.log(content); //11

// 异步读取
fs.readFile('./hello.txt', {flag: 'r', encoding: 'utf-8'}, (err, data) => {
    if(err) { 
        console.log('err',err);
    } else {
        console.log('data', data);
    }
})
console.log('异步测试！');
//异步测试！
// data hello world

// 进行Promise简单封装
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

// 则上面的读取文件就可以写成以下方式
fsRead('./hello.txt').then((value) => {
    console.log('value', value);     //value hello world
})

// 如果要读一串关联的文件还进一步用async  await优化以免出现过多的.then
async function readList() {
    const val1 = await fsRead('./hello.txt')
    const val2 = await fsRead(val1 + '2.txt')
    const val3 = await fsRead(val2 + '3.txt')
    console.log('val3', val3);  //val3 hello world finally
}
readList()


// 文件写入
fs.writeFile('./write.txt', '写入内容测试\n' ,{flag: 'a', encoding: 'utf-8'}, (err) => {
    if(err) {
        console.log('error', err);
    } else {
        console.log('文件写入成功！');  //文件写入成功！
    }
})

// 同样也可以像上面读取一样进行封装
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

async function writeList() {
    await fsWrite('./write.txt', '写入测试2\n')
    await fsWrite('./write.txt', '写入测试3\n')
    await fsWrite('./write.txt', '写入测试4\n')
}

writeList()

// 还有删除操作和上面的也差不多 用的时候可以查看官方文档


 