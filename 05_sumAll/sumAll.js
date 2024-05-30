const sumAll = function(x,y) {
    let z =0
    if ((x>=0)&&(y>=0)&&(x<=y)&&(typeof y==="number")){
        for (let i=x;i<=y;i++) {
            z=i+z
        }
        return z}
    else if ((x>=0)&&(y>=0)&&(x>y)&&(typeof y==="number")){
        for (let i=y;i<=x;i++) {
            z=i+z
        }
        return z}
    else return "ERROR"

};

// Do not edit below this line
module.exports = sumAll;
