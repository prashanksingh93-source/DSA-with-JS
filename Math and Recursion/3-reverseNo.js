//Reverse a Number Using a for Loop
let num =1234144;
let rev=0;
for(let i=0;num>0;i++){
    let lastno=num%10;
    rev=rev*10+lastno;
    num=Math.floor(num/10);
}
console.log(rev)