class BinarySearchTree {
  root = null;

  // insert의 재귀용 함수
  #insert(node, value) {
    if (node.value > value) {
      // 상위 값보다 넣으려고 하는 값이 작을 때
      if (node.left) {
        // 왼쪽에 이미 값이 있는 경우, 왼쪽 노드에 위임
        this.#insert(node.left, value);
      } else {
        // 왼쪽 값이 비어있으면 왼쪽에 값을 추가
        node.left = new Node(value);
      }
    } else {
      // 상위 값보다 넣으려고 하는 값이 클 때
      if (node.right) {
        // 오른쪽에 이미 값이 있는 경우, 오른쪽 노드에 위임
        this.#insert(node.right, value);
      } else {
        // 오른쪽에 값이 비어있으면 오른쪽에 값을 추가
        node.right = new Node(value);
      }
    }
  }

  /**
   * 조건문에 insert를 호출 할 때, insert()가 다시 호출된다.
   * insert()함수는 매개변수가 1개이고, 조건문안에 재귀함수 호출의 매개변수는 2개이다.
   * 이 경우, insert()함수를 바꿔 줄 수도 있지만 재귀용 #insert()함수를 따로 만들어주는 것이 좋다.
   *
   * this.root.left, this.root.right는 상위 root인 subTree이다. (어디에 넣을지 기준점을 잡아주는)
   */

  insert(value) {
    // 삽입 (추가)
    if (!this.root) {
      // 첫 데이터인 경우 (root가 없는 경우)
      this.root = new Node(value);
    } else {
      // 첫 데이터가 아닌 경우 ( root에 값이 있는 경우 )
      this.#insert(this.root, value);
    }
  }

  // ---------------------------------

  // search 재귀용 함수
  #search(node, value) {
    // 찾으려는 값이 노드의 값보다 작을 때
    if (node.value > value) {
      // 왼쪽에 값이 없을 경우 null return
      if (!node.left) {
        return null;
      }
      // 찾으려는 값과 왼쪽에 있는 값이 같을 때, 그 값을 return
      if (node.left.value === value) {
        return node.left;
      }
      // 값을 찾지 못했다면, 재귀함수 호출
      return this.#search(node.left, value);
      
    } else {
      // 오른쪽에 값이 없을 경우 null return
      if (!node.right) {
        return null;
      }
      // 찾으려는 값과 오른쪽에 있는 값이 같을 때, 그 값을 return
      if (node.right.value === value) {
        return node.right;
      }
      // 값을 찾지 못했다면, 재귀함수 호출
      return this.#search(node.right, value);
    }
  }

  /**
   * search는 return을 무조건 다 해줘야한다.
   * 조회 => 수정은 조회를 활용한다.
   */

  search(value) {
    // root에 값이 없다면 null return
    if (!this.root) {
      return null;
    }
    // 찾으려는 값이 root일 때, 값을 return
    if (this.root.value === value) {
      return this.root;
    }
    // 찾으려는 값을 찾지 못했을 때, 재귀함수 호출
    return this.#search(this.root, value);
  }
}

class Node {
  left = null;
  right = null;
  constructor(value) {
    this.value = value;
  }
}
