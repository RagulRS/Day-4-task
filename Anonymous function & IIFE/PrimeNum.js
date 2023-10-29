function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    if (num <= 3) {
      return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }

  function findPrimeNumbers(arr) {
    return arr.filter(isPrime);
  }
  
  const numbers = [2, 4, 3, 9, 24, 67, 98, 5, 7, 6, 10, 11, 13];
  const primeNumbers = findPrimeNumbers(numbers);
  console.log(primeNumbers);
  