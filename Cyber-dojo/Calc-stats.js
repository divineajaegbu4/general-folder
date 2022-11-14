'use strict';

function answer(num) {
 let  result = [6, 9, 15, -2, 92, 11];
  
 let resultLength = result?.length
 
 let calc = 0
 
 
    if(num < 0) {
      const printNegativeResult = result[3];
      
     return "Miniumum value:", printNegativeResult;
    } else if(num > 0) {
         const printPositiveInteger = Math.max(result[4]);
      
         return "Maximum value:", printPositiveInteger;
    } else {
        if(num) {
            for (let i = 0; i < result; i++) {
 
                const average = calc += result[i]
      
 
               const totalAverage = average / resultLength;
 
 
         return totalAverage;
        }

    }
        
 
   }  
 }
module.exports = answer;