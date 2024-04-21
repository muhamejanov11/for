
let arr = [2, 4, 9, 10, 45, 67, 8, 90];
let arr2 = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        arr2.push(arr[i]);
    }
}

console.log(arr);
console.log(arr2)