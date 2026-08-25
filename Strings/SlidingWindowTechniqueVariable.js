function maxUn(Al){
    let feq = new Set();
    let j = 0;
    let max = 0;
    for(let i=0;i<Al.length;i++){
        while(feq.has(Al[i])){
            feq.delete(Al[j]);
            j++;
        }
        feq.add(Al[i])
      let max=Math.max(max,i-j+1);
    }
    return max;
}
console.log(maxUn('abcabcdc'))