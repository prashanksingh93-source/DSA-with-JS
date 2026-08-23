let arr=[1,1,2,2,3,4,4,5,5];


let uniquArr=[];
for(let i=0;i<arr.length;i++){
    if(!uniquArr.includes(arr[i])){
        uniquArr.push(arr[i])
    }
}
console.log(uniquArr)