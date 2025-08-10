/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let new1 = 1;
    if(n===1){
        return x;
    }
    if(x===1){
        return x;
    }
    let pow = Math.abs(n)
    while(pow>0){
        if(pow%2==1){
            new1 *= x;
        }
        x*=x;
        pow=Math.floor(pow/2);
    }
    return n>=0 ? new1 : 1/new1;
    
};