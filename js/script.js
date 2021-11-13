


function getSum (x) {
    let y = 0
    for (let i = 0; i < x.length; i++) {
        if (x[i] % 2 > 0) {
            y += x[i]
        }
    }
    return y
};

console.log(getSum([1,2,3,4,5,6,7,8,9,10]));