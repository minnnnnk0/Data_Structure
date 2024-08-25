/**
 * 2차원 배열로 그래프 코드 구현
 */
class Graph {
    vertices = [];
    matrix = [];
  
    insertVertex(name) {
      // name 중복 검사
      this.vertices.push(new Vertex(name));
      this.matrix.push([]); // matrix2차원배열 추가 시, 에러 방지
    }
    #searchVertex(name) {
      // 쉽게 하려면 find라는 메서드를 사용
      // 바로 return this.vertices.find(...)
      for (let i = 0; i < this.vertices.length; i++) {
        // vertices에 name과 찾고자 하는 name이 같을 경우 i를 return
        if (this.vertices[i].name === name) {
          return i;
        }
      }
      return null;
    }
    // from과 to는 어떤 vertex들을 서로 연결할지를 해주기위해 필요로한 인자
    // 그러기위해선 #searchVertex를 만들어 찾기
    insertArc(from, to, value, capacity) {
      const fromV = this.#searchVertex(from);
      const toV = this.#searchVertex(to);
      // 만약, 둘 중 하나라도 없다면? 에러를 반환
      // Javascript의 습성이 0 인경우도 에러를 반환하기 때문에 주의하여 처리
      if (fromV === null || toV === null) {
        throw "찾는 Vertex가 없습니다.";
      }
  
      // from과 to를 찾았으면 metrix에 넣어줌 (2차원 배열로 - 어디서 부터 어디까지)
      // 여기서 주의해야할 점이 matrix배열은 1차원인데, 여기서 2차원배열로 추가해준다면 에러
      // insertVertex메소드에서 matrix에 배열을 하나씩 추가해주는 방법
      this.matrix[fromV][toV] = new Arc(value, capacity);
    }
  }
  
  /**
   * 만약, 배열이나 연결리스트를 코드 구현 했다면,
   * Vertex자체에서 배열이나 연결리스트로 Arc들을 가지고 있는 경우
   * class Vertex {
   *    // Arc들의 목록을 arcs에 넣기
   *    arcs = [];
   * }
   */
  class Vertex {
    constructor(name) {
      this.name = name;
    }
  }
  
  /**
   * Arc에 value를 넣었는데, value뿐만 아니라 cap이라는 것이 있음
   * cap을 capacity(커패서티)라고하는데 걍 케파 라고 부름
   * capacity는 수용량을 의미
   *
   * value와 capacity 이 두개로 나뉘는 이유는,
   * Ace를 물이 흐르는 관으로 보고, 허용용량 or 최대용량을 케파라고 부름
   * 그리고 최대용량 내에서 어떤 액체가 흐르는데, 현재 흐르고 있는 액체의 양을 value
   *
   * value만 받을 수 있지만, 조금 더 복잡한 그래프에서는 케파까지 같이 받음
   */
  class Arc {
    constructor(value) {
      this.value = value;
      this.capacity = this.capacity;
    }
  }
  const g = new Graph();
  
  g.insertVertex("a");
  g.insertVertex("b");
  g.insertVertex("c");
  g.insertArc("a", "b", 3);
  g.insertArc("a", "c", 2);
  g.insertArc("c", "a", 4);
  g.insertArc("b", "c", 1);
  g;