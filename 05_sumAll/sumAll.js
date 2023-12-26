const sumAll = function(a, b) {

   if (!Number.isInteger(a)||!Number.isInteger(b)){
    return "Error";
   }
   
   if(min < 0 || max < 0){
    return "Error";
   }

   if (b > a){
    const temp = a;
    a = b;
    b = temp;
   }

   const total = 0;

   for(let i = a; i <= n; i++){
    total += i;
   }

   return total;

};

// Do not edit below this line
module.exports = sumAll;
