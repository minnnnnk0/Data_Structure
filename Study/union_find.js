// 초기화 
const init = (n) => Array(n + 1).fill(0).map((_, idx) => idx)

// find
const find = (parent, x) => {
  if (parent[x] !== x) {
    parent[x] = find(parent, parent[x]) // 경로 압축
  }
  return parent[x]
}

// union
const union = (parent, a, b) => {
  const rootA = find(parent, a)
  const rootB = find(parent, b)
  if (rootA !== rootB) {
    parent[rootB] = rootA // b의 루트를 a의 루트로
  }
}


const n = 7
const parent = init(n)

union(parent, 1, 2)
union(parent, 2, 3)
union(parent, 4, 5)

// 집합 찾기
console.log(find(parent, 3)) // 1
console.log(find(parent, 5)) // 4

// 1과 5가 같은 집합인지 확인
console.log(find(parent, 1) === find(parent, 5)) // false
