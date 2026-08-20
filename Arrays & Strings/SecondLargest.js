let arr=[1,2,3,5,9,3,5,7];
let large= -Infinity;
let secndLarge= -Infinity;

for(let i=0;i<arr.length;i++){
    if(arr[i]>large){
        secndLarge=large;
        large=arr[i];
    }else if(arr[i]>secndLarge && arr[i]!=large){
        secndLarge=arr[i]
    }
}
console.log(secndLarge);
console.log(large);