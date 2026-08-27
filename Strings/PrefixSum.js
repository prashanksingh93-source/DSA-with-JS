function PrefixSum(arr){
    let prefix=new Array(arr.length);
        prefix[0]=arr[0];
        for(let i=1;i<arr.length;i++){
            prefix[i]=prefix[i-1]+arr[i]
        }
         return prefix;
}
console.log(PrefixSum([1,2,3,4,5,6,7,8,9]))