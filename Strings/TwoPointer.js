function remVowels(str){
    let vowel= new Set(['a','e','i','o','u','A','E','I','O','U']);
    let arr=str.split('');
    
    let start=0;
    let end=0;
    while(end<arr.length){
        if(!vowel.has(arr[end])){
          arr[start]=arr[end];
          start++;
        }
        end++;
    }
    return arr.slice(0,start).join('')
}
console.log(remVowels('aserfu'));