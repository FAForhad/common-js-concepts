/* 
truthy
1: true
2: any numb ber positive or negative will be truthy except 0
3: any string other than empty string
4: '0' 'false'
5: empty object{}
6: empty array []
7: object, array



falsy
1: false
2: 0
3: ('') empty string 
4: undifine
5: null
*/

let x = 2;
if (!!x) {
    console.log('value is truthy')
}
else if (!x) {
    console.log('value is falsy')
}