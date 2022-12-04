/* 
8 ways to get undifine
1: variable that is not intialize
2: function with no return
3: parameter that is not pass will be undifine
4: if return has nothing on the right side that will be un difine
5: property that dosen't exsit on an object
6: accessing array elements outside of the index range
7: deleting an element inside an arry
8: set a value diretly to undifine
*/
let first;
// console.log(first)

function second(a, b) {
    const total = a + b;

}
const result = second();
// console.log(result)


function third(a, b, c, d,) {
    const tortal = a + b + c + d;
    // console.log(a, b, c, d);
}
third(10, 25, 3)


function noNegative(a, b) {
    if (a<0 ||b<0) {
        return
    }
    return a + b;
}
const total = noNegative(3, -5);
// console.log(total)


const fifth = { id: 2, name: 'ponchom', age: 40 }
console.log(fifth.age, fifth.name, fifth.salary);

const sixth = [20, 5, 50, 582, 655, 6, 4];
//7: you should not do it.... you should splice or slice
delete sixth[1];
// console.log(sixth)
// console.log(sixth[8], sixth[2], sixth[3])

const eighth = undefined;

const ninth = null;

const data = { result: [], update: null }

// console.log(typeof undefined)

console.log(typeof null)