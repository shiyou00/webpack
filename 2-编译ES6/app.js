let func = () => {
    console.log(123);
};
const NUM = 45;
let arr = [1,2,4];
let arr2 = arr.map(item => item * 2);

console.log('new Set', new Set(arr2));

const sym = Symbol();

const promise = new Promise();

console.log(arr[Symbol.iterator]());