function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return str === str.split('').reverse().join('');
  }
  
  function findPalindromesInArray(arr) {
    const palindromes = [];
  
    for (const item of arr) {
      if (isPalindrome(item)) {
        palindromes.push(item);
      }
    }
  
    return palindromes;
  }
  
  const inputArray = ["mybike", "hello", "deified", "civic", "madam","radar", "world", "level"];
  const palindromesInArray = findPalindromesInArray(inputArray);
  console.log("Palindromes in the array:", palindromesInArray);
  