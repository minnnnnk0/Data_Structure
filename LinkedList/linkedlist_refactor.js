class LinkedList {
  length = 0;
  head = null;

  // 삽입
  add(value) {
    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    } else {
      this.head = new Node(value);
    }
    this.length++;
    return this.length;
  }

  // 조회
  search(index) {
    // [1] = current가 존재하면, 그 값의 value를 return
    return this.#search(index)[1]?.value;
  }

  // 프라이빗(메서드) 함수 생성
  // prev, current 둘다 return을 해주는 search 함수 구현
  #search(index) {
    let count = 0;
    let prev;
    let current = this.head;
    while (count < index) {
      prev = current;
      current = current.next;
      count++;
    }
    return [prev, current];
  }

  // 삭제
  /**
   * prev가 undefined일 경우 (기본 적으로 선언만 해줬기 때문에 index가 0일 경우는 while문이 false이기 때문에 돌지 않고, prev는 undefined)
   * -> prev.next에서 Error가 발생한다.
   * 조건문을 이용
   * -> else if를 이용해 prev가 없을 때, 즉 current만 존재할 때 (index가 0일 경우)
   */
  remove(index) {
    // #search의 return 값을 구조분해할당
    const [prev, current] = this.#search(index);
    if (prev && current) {
      prev.next = current.next;
      this.length--;
      return this.length;
    } else if (current) {
      // index가 0일 때
      this.head = current.next; // 현재 타겟에 다음 타겟 연결
      this.length--;
      return this.length;
    }
    /**
     * 1. 둘다 아닐 때. ( 연결리스트에 아무것도 없을 때 )
     * #search에 current가 undefined인 상태 ( this.head가 undefined인 경우 )
     * 2. 삭제하고자하는 대상이 없을 때 
     * current = current?.next가 undefined일 경우
     */
  }
}

class Node {
  next = null;
  constructor(value) {
    this.value = value;
  }
}
