/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    function reverseDigits(num) 
{ 
    let rev_num = 0; 
    while (num > 0) { 
        rev_num = rev_num * 10 + num % 10; 
        num = Math.floor(num / 10); 
    } 
    return rev_num; 
} 
    if(x<0){
        return false;
    }
    else{
        let rev_x = reverseDigits(x);
        if((rev_x) === x){
            return true;
        }
        else{
            return false;
        }

    }
};