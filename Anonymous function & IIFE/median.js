function findMedianSortedArrays(nums1, nums2) {
    
    const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  
    const length = mergedArray.length;
    

    if (length % 2 === 0) {

      const middle1 = mergedArray[length / 2 - 1];
      const middle2 = mergedArray[length / 2];
      return (middle1 + middle2) / 2;
    } else {
      
      return mergedArray[Math.floor(length / 2)];
    }
  }
  
  const nums1 = [1, 3];
  const nums2 = [2, 4];
  
  const median = findMedianSortedArrays(nums1, nums2);
  console.log("Median:", median);
  