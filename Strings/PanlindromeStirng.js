function palindromeCheck(string){
    let s=string.toLowerCase().replace(/[^a-z0-1]/g,"");
    let start=0;
    let end=s.lenght;
    while(start<=end){
        if(s[start]!=s[end]){
            return flase;
        }
        start++;
        end--;
    }
    return true;
}
console.log(palindromeCheck("annna"))