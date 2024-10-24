// 인접 행렬은 그래프의 노드 간의 연결 관계를 나타내기 위해 사용되는 2차원 배열
// 정점 i와 정점 j가 연결되어 있다면, 행렬의 (i, j) 위치에 1(또는 가중치)을 저장하고, 연결되지 않았다면 0을 저장

class Graph {
  constructor(size) {
    this.size = size; // 그래프의 정점 수
    this.adjacencyMatrix = this.createMatrix(size);
  }

  createMatrix(size) {
    // size x size 행렬 생성
    const matrix = Array.from({ length: size }, () => Array(size).fill(0));
    return matrix;
  }

  addEdge(source, destination) {
    // 간선 추가: 방향 그래프
    this.adjacencyMatrix[source][destination] = 1;
    // 만약 무향 그래프라면 아래 줄도 추가
    // this.adjacencyMatrix[destination][source] = 1;
  }

  display() {
    console.log(this.adjacencyMatrix);
  }
}

// const graph = new Graph(3); // 3개의 정점일 때
// graph.addEdge(0, 1);
// graph.addEdge(1, 2);
// graph.addEdge(0, 2);
// graph.display();
