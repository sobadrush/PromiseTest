// 具名匯出 (https://www.casper.tw/development/2020/03/25/import-export/)
const genRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const myVal = 111;
const myObj2 = { name: 'myObj2' };
const myObj3 = { name: 'myObj3' };

export { genRandomInt, myVal, myObj2, myObj3 };