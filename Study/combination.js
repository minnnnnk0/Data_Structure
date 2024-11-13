function getCombinations(arr, selectNum) {
    if (selectNum === 1) return arr.map((v) => [v])
    
    return arr.flatMap((v, i) =>
      getCombinations(arr.slice(i + 1), selectNum - 1).map((comb) => [v, ...comb])
    )
  }

  function getDuplicateCombinations(arr, selectNum) {
    if (selectNum === 1) return arr.map((v) => [v])
    
    return arr.flatMap((v, i) =>
      getDuplicateCombinations(arr.slice(i), selectNum - 1).map((comb) => [v, ...comb])
    )
  }