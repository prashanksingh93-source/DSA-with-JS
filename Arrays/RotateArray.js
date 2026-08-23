function reverse(arr,start,end){
   while(start<end){
       temp=arr[start];
       arr[start]=arr[end];
       arr[end]=temp;
     start++;
     end--;
   }
}

let arr=[1,2,3,4,5,6];
let k=2;
 k=k%arr.length //for repeatation

 //arr rotate left 
//  reverse(arr,0,k-1);
//  reverse(arr,k,arr.length-1);
//  reverse(arr,0,arr.length-1);
//  console.log('left rotation',arr);

 //arr rotate right
 reverse(arr,0,arr.length-1);
 reverse(arr,0,k-1);
 reverse(arr,k,arr.length-1);
 
 console.log('right rotation',arr)