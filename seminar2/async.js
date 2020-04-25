let asyncFunc1 = (msg) => 
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(`func1 : ${msg}`)
        }, 1000)
    })

let asyncFunc2 = (msg) => 
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(`func2 : ${msg}`)
        }, 1000)
    })


function promiseMain () {
    asyncFunc1('Hello').then((result) => {
        console.log(result)
        return asyncFunc2('world')
    }).then((result) => {
        console.log(result)
    })
}

async function asyncManin () {
    let result = await asyncFunc1('Hello')
    console.log(result)
    result = await asyncFunc2('world')
    console.log(result)
}

async function test2(){
    let c = await test()
    console.log(c)
}

let test = (a) => 
    new Promise((resolve) => {
        resolve('Ok');
    } )


// promiseMain()
asyncManin()
test2()