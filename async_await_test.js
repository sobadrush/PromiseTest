let myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("... resolve ...")
        }, 3000);
    });
}

// IIFAE: 我是立即執行的，ASYNC函數
~async function() {
    console.log(' >>> exec IIFAE <<< ');
    let prms = await myPromise();
    console.log(prms)
    console.log('Hello World!');
}()