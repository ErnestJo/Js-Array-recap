const number = [-1, 2, 3,5,-6];
const items = number
    .filter(n => n >= 0)
    .map(n =>({value: n}))
    .filter(obj => obj.value > 2)
    .map(obj => obj.value);
console.log(items);