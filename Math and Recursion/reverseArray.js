// 🟢 Reverse an Array
// Problem Statement

// Given an array of integers, reverse the array in-place and return the reversed array.

// You must not use built-in reverse functions.

let arr=[1,2,3,4,5]

function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }

    return arr;
}


console.log(reverseArray(arr))