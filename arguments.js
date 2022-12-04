// arguments are array like object
function arg(a, b, c) {
    console.log(...arguments)
    const sum = a + b + c;
    return sum;
}
const guments = arg(10, 10, 20, 56, 16, 16, 13, 56, 48, 56,)
console.log(guments)