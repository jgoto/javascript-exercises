const sumAll = function(a, b) {
    if(a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)){
        return "ERROR";
    }
    else{
        if(a > b){
            return a + sumAll(a-1, b)
        }
        else if(b>a){
            return b + sumAll(a, b-1);
        }
        else return b;
    }
};

// Do not edit below this line
module.exports = sumAll;
