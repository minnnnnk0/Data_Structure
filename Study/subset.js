function getSubsets(arr) {
    const subsets = [[]]
  
    arr.forEach((value) => {
      subsets.push(...subsets.map((subset) => [...subset, value]));
    })
    return subsets
  }
  
  const arr = [1, 2, 3]
  console.log(getSubsets(arr))
  // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
  