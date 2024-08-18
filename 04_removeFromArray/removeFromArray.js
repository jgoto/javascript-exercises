const removeFromArray = function(...theArgs) {
    const data = theArgs[0]; // Expectation is that index 0 is always an array of the data
    const itemsToRemove = theArgs.shift();
    for(let i = 0; i < data.length; i++)
    {
        for(let j = 0; j < theArgs.length; j++){
            if (data[i] === theArgs[j]){
                data.splice(i,1);
                if(i>0)  // Need this because we skip the new i value after the splice
                    i-=1;
            }
        }        
    }
    return data
};

// Do not edit below this line
module.exports = removeFromArray;
