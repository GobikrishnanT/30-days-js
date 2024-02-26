/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

// Examble input Test cases : 

const arr = [0,10,20,30];

// function can accept maximum two arguments : 
// specific value and index : 

const fn = (val) => {
    if(val > 10) {
        return true;
    }
    return false;
}

const filter = function(arr, fn) {
    const filteredArray = [];
    for(let i = 0 ; i < arr.length ; i++) if(fn(arr[i] , i)) filteredArray.push(arr[i]);
    return filteredArray;
};

const myFilterArray  = filter(arr , fn);

console.log(myFilterArray);