const repeatString = function(textInput, repeatCount) {
    let textOutput = "";
    if(repeatCount<0)
        return "ERROR";
    for(let i = 0; i < repeatCount; i++){
        textOutput += textInput;
    }
    return textOutput;
};

// Do not edit below this line
module.exports = repeatString;
