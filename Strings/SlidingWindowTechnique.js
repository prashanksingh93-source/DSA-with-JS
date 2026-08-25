function maxSum(arr,r){
    let max=0;
    let rowSum=0;
    for(let i=0;i<r;i++){
        rowSum+=arr[i];
    }
    max=rowSum;
    for(let i=r;i<arr.length;i++){
        rowSum+=arr[i]; //add next arr 
        rowSum-=arr[i-r] //remove starting arr
        max=Math.max(max,rowSum);
    }
    return max;

}
console.log(maxSum([1,2,3,4,5,6,7,8,9],3));