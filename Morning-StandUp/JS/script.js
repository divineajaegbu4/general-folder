class context {
    constructor() {
        // this.sessionArr = [1, 2, 3, 4, 5];
    }

    static getTag(arr, cb) {
        let emptyArr = [];
        for (let i = 0; i < arr.length; i++) {
            emptyArr.push(cb(arr[i]))
        }
        return emptyArr;
    }
}


const constValues = new context();
// const arr = [1, 2, 3, 4, 5]
console.log(context.getTag([1, 2, 3, 4], num => num * 3));


// const newFunc = (arr, cb) => {
//     let emptyArr = [];
//     arr.forEach(function(item) {
//         emptyArr.push(cb(item));
//     })

//     return emptyArr;
// }


// console.log(newFunc(createArr, function(num) {
//     return num * 2;
// }));

// console.log(newFunc(createArr, function(num) {
//     return num / 2;
// }));


//converting this to class


// console.log(subPubs);
let numbers = 167878990000;

let comma = new Intl.NumberFormat('en-US');

console.log(comma.format(numbers))

console.log(numbers)