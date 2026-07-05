//find greatest number
let arr=[2,4,2,5,7,9,4,5];
let max=arr[0];
for(let i=1;i<arr.length;i++){
     if(arr[i]>max){
        max=arr[i];
     }
}
console.log(max);


//find smallest number
let min=arr[0]
for(let i=1;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i]
    }
}
console.log(min)