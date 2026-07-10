
let x=24;
let y=9;
let a=x;
let b=y;


//GCD (Greatest Common Divisor)
for(let i=0;y!==0;i++){
   let reminder=x%y;
   x=y;
   y=reminder;
}
console.log('GCD : ', x);



//LCM (Least Common Multiple)
let gcd=x;
let L=(a*b)/gcd;
 console.log("LCM : ", L)
