const myPrms_1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`myPrms_1 - resolve.`);
    }, 2000);
});

const myPrms_2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`myPrms_2 - resolve.`);
    }, 5000);
});

// [Type1] 使用 then，myPrms_1 執行完，再執行 myPrms_2
// (() => {
//     console.log(" >>> exec IIFE <<< ");
//     myPrms_1.then(val => {
//         console.log('val_1 = ', val);
//         return myPrms_2;
//     }).then(val => {
//         console.log('val_2 = ', val);
//     })
// })();

// [Type2] 使用 Promise.all + then
// (() => {
//     console.log(' >>> exec IIFE <<< ');
//     Promise.all([myPrms_1, myPrms_2]).then(valArr => {
//         console.log('valArr = ', valArr);
//         console.log("val1 = ", valArr[0]);
//         console.log("val2 = ", valArr[1]);
//     })
// })();

// [Type3] 使用 async/await + Promise.all
(async function () {
    console.log(' >>> exec IIFAE <<< ');
    let resultPromise = await Promise.all([myPrms_1, myPrms_2]); // 可將 await 移除觀察 print
    console.log('resultPromise = ', resultPromise);
    console.log('val1 = ', resultPromise[0]);
    console.log('val2 = ', resultPromise[1]);
})();
