//==================Exercise #1 ==========//
/*Write a function that finds the index of the first non-consecutive element in the array. 
For example, if we have an array [1, 2, 3, 5, 6, 7] then this will return 3 since the array
at index 3 is 5 which is not consecutive. If every element in the array is consecutive, return -1
*/

let array_of_nums = [1, 2, 3, 5, 6, 7,8]

function firstNonConsecutive(array_of_nums){  
    let previous = array_of_nums[0];   
    let first;
    for (let i = 1; i < array_of_nums.length; i++) {  
        if ((previous + 1) !== array_of_nums[i]) {   
        first = array_of_nums[i];
        break;
        }
        previous ++;
    }
    return first !== undefined ? first : null;
    }
console.log(array_of_nums())

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]


arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
function replaceEvens(arr)


conesole.log(arr)
// }

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]