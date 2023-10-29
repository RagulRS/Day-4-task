const isPrime = num => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
  
    return true;
  };
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 17, 20, 18];
  
  const primeNumbers = numbers.filter(num => isPrime(num));
  
  console.log("Prime numbers in the array:", primeNumbers);
  