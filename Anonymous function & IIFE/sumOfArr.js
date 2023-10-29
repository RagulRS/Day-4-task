 function newArr(add){
  let sum =0
for(let i in add)
{  
  sum=sum+add[i]
}
return sum
}
const arr = [1, 50, 30, 4, 5, 5];
const result = newArr(arr)
console.log(result)