function anagram(s,t){
    s=s.toLowerCase().replace(/\s+/g,"");
    t=t.toLowerCase().replace(/\s+/g,"");

    let freq={};

    if(s.length!=t.length) return false;

    for(let key of s){
        freq[key]=(freq[key]||0)+1;
        }
    for(let key of t){
        if(!freq[key]) return false;
        freq[key]--;
    }
    return true;
}


console.log(anagram('annu','nuna'));