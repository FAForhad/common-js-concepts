// primitive type of variable

const a = 40;
const b = 'kuddus';
const c = true;


// non-primitive dat type of variable

const d = [15, 52, 20, 26, 53, 132, 52];
const e = ['abul', 'chabul', 'khabul'];
const f = { name: 'akkas', age: 36, proffesion: 'sctaching ball' };


// primitve type of data value changes
let k = 50;
let p = k;
p = 55;
console.log(p)

//non-primitve type of data value changes

// chain akare variable er man kei terget KeyboardEvent.DOM_KEY_LOCATION_LEFT.toExponential.maan k replace na kore same man k nirdesh kore valu declare kore
let x = { job: 'developer' };
let y = x;
// y = { job: 'backend' };
y.job = 'fontend';
console.log(x, y)