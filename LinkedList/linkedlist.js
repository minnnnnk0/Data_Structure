class LinkedList {
  // constructor(length) {
  //   this.length = length;
  // }
  length = 0;
  // 첫 값을 지정
  head = null;

  // 삽입
  add(value) {
    if (this.head) {
      // head에 값이 있다면?
      let current = this.head; // 현재를 저장한다.
      while (current.next) {
        // 다음 값이 null일 때까지 (next가 없을 때까지)
        current = current.next;
      }
      // 반복문이 끝난 후, 다음 값이 null일 때 값 삽입
      current.next = new Node(value);
    } else {
      // 처음 추가하는데 값이 비어있으면 바로 추가
      this.head = new Node(value);
    }
    // 반복되는 코드는 밖으로 빼주기
    this.length++;
    // 배열의 길이를 반환하여 쓸모있는 return 값을 반환
    return this.length;
  }

  // 조회
  search(index) {
    let count = 0;
    let prev; // 이전값을 만들어준다.
    let current = this.head;
    // this.head가 null, undefind일 경우 current는 undefind, null
    // current가 null인 경우를 대비해 옵셔널 체이닝
    while (count < index) {
      prev = current; // next가 되기 전에 현재값으로 이전값을 선언
      current = current?.next; // count가 증가하면, count만큼 계속해서 다음 index를 찾음
      count++;
    }
    return current?.value;
  }

  // 삭제
  remove(index) {
    // 조회 코드를 재활용
    let count = 0;
    let prev;
    let current = this.head;
    while (count < index) {
      prev = current;
      current = current?.next;
      count++;
    }
    if (prev && current) {
      // prev.next를 current.next와 이어줌
      prev.next = current.next;
      this.length--; // 길이 삭제;
      return this.length;
    } else if (current) {
      this.head = current.next;
      this.length--;
      return this.length;
    }
  }
}

// 인자에 들어갈 각각의 아이템 = Node
// 노드는 하나의 메모리 객체(값, 다음위치값, 이전위치값), 그럼 연결리스트는 노드들을 연결하고 있는 리스트가 된다.
class Node {
  next = null;
  // 외부에서 전달받을 값은 constructor를 사용
  constructor(value) {
    this.value = value;
  }
}

const ll = new LinkedList();
ll.length;
ll.add(1); // 1
ll.add(2); // 2
ll.add(3); // 3
ll.add(4); // 4
ll.add(5); // 5
ll.add(6); // 6
// console.log(ll.search(3)); // 4 (0 = 1, 1 = 2, 2 = 3, 3 = 4)
// console.log(ll.search(5)); // 6 (0 = 1, 1 = 2, 2 = 3, 3 = 4, 4 = 5, 5 = 6)
// console.log(ll.search(7)); // undefined
console.log(ll.search(6)); // undefined
ll.remove(4); // 5 remove
console.log(ll.search(4)); // 6
ll.remove(4); // undefined
console.log(ll.search(4)); // undefined
console.log(ll.remove(4)); // undefined