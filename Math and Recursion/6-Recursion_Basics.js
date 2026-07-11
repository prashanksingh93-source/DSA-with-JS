function Snumber(num){
    if(num=='0'){
        return '0'
    }
     
     Snumber(num-1)
     console.log(num);
     }
     Snumber(10)



     function factorial(num){
        if(num=='1'){
            return '1';
        }
        return num*factorial(num-1)
     }
     console.log(factorial(4))