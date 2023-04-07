const myPrms_1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`myPrms_1 - resolve.`);
    }, 2 * 1000);
});

const myPrms_2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`myPrms_2 - resolve.`);
    }, 5 * 1000);
});

// [Type1] 使用 Promise.race，未將 ended 放入 then
// (function() {
//     console.log(" ... exec IIFE ... ");
//     Promise.race([myPrms_1, myPrms_2]).then(val => {
//         console.log('val = ', val);
//     });
//     console.log('... ended ...'); // 此行會早於 Promise.race 的結果執行，因為 race 本身仍是「非同步」
// })();

// [Type2] 使用 Promise.race，將 ended 放入 then
// (() => {
//     console.log(" ... exec IIFE ... ");
//     Promise.race([myPrms_1, myPrms_2]).then(val => {
//         console.log('val = ', val);
//         return '[Hello ' + val + ']';
//     }).then(xx => {
//         console.log(`ended ... xx = ${xx}`);
//     });
// })();

// [Type3] 使用 async/await + Promise.race
~async function(){
    console.log(' >>> exec IIFAE <<< ');
    let raceResult = Promise.race([myPrms_1, myPrms_2]); // 可將 await 移除觀察 print
    console.log('raceResult = ', raceResult);
    console.log('... ended ...');
}()