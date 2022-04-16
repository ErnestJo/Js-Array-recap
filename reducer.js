let vals = [5,3,2,7,20,1,9,19 ];

let sum = vals.reduce((acc, val) => acc + val, 0);
console.log(sum);

let biggest =vals.reduce((a,b) => b > a ? b : a);
console.log (biggest)