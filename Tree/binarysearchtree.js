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

  // ---------------------------------

  /**
   * 1. leaf일 경우(자식이 없는경우), 부모 노드에게 제거 요청
   * 2. 자식이 1개일 경우, 자신의 부모에게 자신을 제거하고 자식을 그 자리로 대체
   * 3. 자식이 2개일 경우, 만약 root를 제거한다면?
   *   3-1. 자신의 왼쪽 노드중에 제일 큰 숫자가 root로 ( 왼쪽 Node 중 가장 오른쪽 )
   *   3-2. 그 후, root자리로 온 숫자의 자리로 원래 root였던 수가 들어간다.
   *   3-3. 그리고 그 숫자가 제거
   */

  // remove 재귀용 함수
  #remove(node, value) {
    // 찾으려는 숫자가 존재하지 않는 경우.
    if (!node) {
      return null;
    }

    // 자식입장
    // 지울 값을 찾았을 경우, 삭제
    if (node.value === value) {
      // leaf일 경우 ( 자식이 없을 경우 )
      if (!node.left && !node.right) {
        // null을 return (제거)
        return null;

      } else if (!node.left) {
        // 왼쪽 노드가 없을 경우 오른쪽 노드 return
        return node.right;
      } else if (!node.right) {
        // 오른쪽 노드가 없을 경우 왼쪽 노드 return
        return node.left;
      } else {
        /**
         * 노드가 2개 모두 있을 경우, 왼쪽 노드에서 오른쪽 노드 중 가장 큰 수를 찾고 서로 자리를 바꿈 (leaf는 삭제)
         * 1. 왼쪽에서 가장 큰 수를 찾기 위해 변수 생성
         * 2. 최대한 오른쪽에 있는 노드를 찾음 (while 사용)
         */

        // 왼쪽 노드
        let exchange = node.left;
        while (exchange.right) {
          exchange = exchange.right;
        }
        // 상위 노드와 가장 큰 수를 바꿈 (변수 사용)
        const temp = node.value; 
        node.value = exchange.value;
        exchange.value = temp;

        // 제거 (3-3) (재귀를 돌면서 제거)
        node.left = this.#remove(node.left, temp);
        // 노드 return
        return node;
      }
    } else {
      // 부모입장
      // 지울 값을 찾지 못했을 경우
      if (node.value > value) {
        // 부모값이 삭제하려는 값보다 작을 때
        // 왼쪽 노드의 값을 대입해주고 왼쪽 노드에 재귀함수 호출 (값을 찾았을 경우 return 값이 node.left에 대입)
        node.left = this.#remove(node.left, value);
        // 노드 return
        return node;

      } else {
        // 부모값이 삭제하려는 값보다 클 때
        // 오른쪽 노드의 값을 대입해주고 오른쪽 노드에 재귀함수 호출 (값을 찾았을 경우 return 값이 node.right에 대입)
        node.right = this.#remove(node.right, value);
        // 노드 return
        return node;
      }
    }
  }

  remove(value) {
    // 삭제(제거)
    this.root = this.#remove(this.root, value);
    /**
     * 이 재귀함수는 노드를 return받을 수 있기 때문에
     * 노드를 return받을 경우(노드가 있을 경우)를 조건걸어주려 했지만,
     * 노드를 return 받지 않는 경우 (leaf일 경우와 지울 값이 존재하지 않을 경우)에서
     * 노드는 null이 되서 삭제하는 경우에는 삭제가 되지 않아 재귀함수는 현재 root로 대입
     */
  }
}

class Node {
  left = null;
  right = null;
  constructor(value) {
    this.value = value;
  }
}
