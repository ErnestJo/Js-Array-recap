let number = [1,2,3,4,5]
const res = number.every(isPostive)

function isPostive(item){
    return item > 0
}
console.log(res);
