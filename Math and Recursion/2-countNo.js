//Count the Number of Digits in a Number Using a for Loop
let num=1413435;
let count=0
for(;num>0;count++){
     num=Math.floor(num/10)
}
console.log(count)