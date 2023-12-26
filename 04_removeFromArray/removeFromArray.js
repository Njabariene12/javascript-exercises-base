const removeFromArray = function(array1, ...args) {
    //Create a new emoty array//
    const arrayRemoveX = [];
    //iterate throught the entire array//
    for(let i = 0; i < array1.length; i++){
    //if the item in the array contains the arguments given 
    //the new array (arrayRemoveX) will not have that item
    //we push that and create the new array
        if(array1[i] != args){
            arrayRemoveX.push(array1);
        }
    }
    return arrayRemoveX;
};

// Do not edit below this line
module.exports = removeFromArray;
