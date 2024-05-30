const removeFromArray = function(x,...y) {
    for (let i of y) {
        x=x.filter(m=>m!==i)
    }
    return x
};

// Do not edit below this line
module.exports = removeFromArray;
