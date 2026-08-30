//Count the Number of Digits in a Number Using a while Loop
let num=1413435;
let count=0
while(num>0){
     num=Math.floor(num/10)
     count++
}

console.log(count)