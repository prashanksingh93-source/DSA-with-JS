function isValid(s){
    let stack=[];
    let map = {
    ')': '(',
    '}': '{',
    ']': '['
}
    for( let key of s){
        if(key=='('||key=='{'||key=='['){
            stack.push(key);
        }
        else{
            if(stack.length==0){return false};
            
            let top=stack.pop();
            if(top!=map[key]){return false}

        
    }}
    return stack.length == 0;
}

console.log(isValid('({[')); // false
console.log(isValid('([)]')); // false
console.log(isValid('()[]{}')); // true
