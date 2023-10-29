const isPalindrome = str => {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return str === str.split('').reverse().join('');
  };
  
  const strings = ["mybike", "hello", "deified", "civic", "madam","radar", "world", "level"];
  
  const palindromes = strings.filter(str => isPalindrome(str));
  
  console.log("Palindromes in the array:", palindromes);
  