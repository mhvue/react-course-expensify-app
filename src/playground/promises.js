const promise = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve({
            name: "MHV",
            age: 26
        });
        //reject("soemthing went wrong")
    }, 5000)
    
});
console.log("before")

//promise.then only fires when promise is resolved 
promise.then((data) => {
    console.log("1", data);
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve("other promise");
        }, 5000)
    });
}).then((str) => {
    console.log("does this run", str)
}).catch((error) => {
    console.log(error)
})


console.log("after")