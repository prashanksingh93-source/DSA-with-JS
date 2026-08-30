//Check Whether a Number is a Palindrome Using a for Loop
let num=12321;
let orginal=num;
let rev=0;
for(let i=0;num>0;i++){
   let lastnum=num%10;
   rev=rev*10+lastnum;
   num=Math.floor(num/10)

   }
 
  console.log('reverse:',rev)
  console.log('Orginal:',orginal);
  console.log('Palindome:',rev==orginal)
 
