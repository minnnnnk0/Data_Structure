function getPermutations(arr, selectNum) {
    if (selectNum === 1) return arr.map((v) => [v])
    
    return arr.flatMap((v, i) =>
      getPermutations(arr.filter((_, index) => index !== i), selectNum - 1).map((perm) => [v, ...perm])
    )
  }

  function getDuplicatePermutations(arr, selectNum) {
    if (selectNum === 1) return arr.map((v) => [v])
    
    return arr.flatMap((v) =>
      getDuplicatePermutations(arr, selectNum - 1).map((perm) => [v, ...perm])
    )
  }