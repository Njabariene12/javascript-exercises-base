const repeatString = function(word, multi) {
    if (multi < 0){ 
    return "error";}
    let string = " ";
    for (let i = 0; i < multi; i++){
       string += word;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
