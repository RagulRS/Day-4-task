function duplicates(arr) {
    const array = [];
  
    for (const item of arr) {
      if (!array.includes(item)) {
        array.push(item);
      }
    }
  
    return array;
  }
  
  const inputArray = [1, 2, 2, 3, 4, 4, 5, 5];
  const array = duplicates(inputArray);
  console.log("Array with duplicates removed:", array);
  