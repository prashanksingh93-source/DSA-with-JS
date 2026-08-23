function Count(string){
  let ferq={};
  for(let key of string){
    ferq[key]=(ferq[key]||0)+1;
  }
return ferq;
}

console.log(Count("bananan"));