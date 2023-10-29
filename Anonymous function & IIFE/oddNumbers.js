//Print odd numbers in an array
function myarr(oddNum)
{
let sum =0
for(let i=0; i<oddNum.length; i++ )
{
    if(oddNum[i] % 2 !== 0)
    {
        sum = oddNum[i]
        console.log(sum)
    }    
}

}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,37, 89];

myarr(arr)
console.log(" ")
// IIFE

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 87, 97, 93, 57];

(function(arr1) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 !== 0) {
      console.log(arr1[i]);
    }
  }
})(numbers);
