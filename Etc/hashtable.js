/**
 * capa의 공간복잡도는 O(n)이다.
 * keypoint: Hash함수가 얼마나 잘 짜여졌는지(분배해 넣어주는 거)에 따라 각 메소드의 시간복잡도가 O(1), O(logn), O(n)이 될 수도 있음 (성능에 따라)
 * 제일 간단한 hash함수는 capa값을 나눠주는 방법, 그 방법을 구현하는 법을 코드로 구현
 */
class Hashtable {
    // length가 capa로 제한되어있는 경우
    data = []; 
    constructor(capa) {
      // 공간복잡도 O(n)
      this.capa = capa;
    }
    // insert 시간복잡도 O(1)
    insert(key, value) {
      // key를 hash함수루 변경 (key를 숫자로 만들어줌)
      const hash = hashF(key, this.capa);
      // data가 이차원배열이 아니기 때문에 hash(key)가 없을 경우 빈 배열로 넣어줌
      if (!this.data[hash]) this.data[hash] = [];
      // value만 추가하면, key가 없기 때문에 찾으려는 데이터를 찾지 못하는 상황이 발생 (객체로 key, value)
      this.data[hash].push({ key, value });
    }
  
    // search 시간복잡도 O(n/hash)
    search(key) {
      const hash = hashF(key, this.capa);
      // 저장되어 있는 key가 있을 경우
      if (this.data[hash]) {
        // includes 써도 됌
        // this.data[hash].includes();
        for (let i = 0; i < this.data[hash].length; i++) {
          // 내가 찾으려는 key와 저장되어있는 key가 같을 경우
          if (this.data[hash][i].key === key) {
            // 저장되어 있는 value값을 반환
            return this.data[hash][i].value;
          }
        }
      }
      return null;
    }
    // 시간복잡도 O(n/hash)
    // 수정은 search와 코드가 동일하지만, 차이점은 반환을 value를 대입(덮어씌움)해주는 것
    update(key, value) {
      const hash = hashF(key, this.capa);
      if (this.data[hash]) {
        for (let i = 0; i < this.data[hash].length; i++) {
          if (this.data[hash][i].key === key) {
            // 대입(덮어씌움)
            return (this.data[hash][i].value = value);
          }
        }
      }
    }
    // 시간 복잡도 O(n/hash)
    delete(key, value) {
      const hash = hashF(key, this.capa);
      if (this.data[hash]) {
        for (let i = 0; i < this.data[hash].length; i++) {
          if (this.data[hash][i].key === key) {
            // undefined를 줄 수 도 있지만, 그럼 KEY값은 남아있기 때문에 splice로 제거
            // return this.data[hash].value = undefined;
            return this.data[hash].splice(i, 1);
          }
        }
      }
    }
  }
  
  // 저장할 값을 고르게 분배해 return 해주는 함수 (key를 hash로 바꿈)
  // ex) 나머지를 구한다. key = 31 % mod = 30 (mod = capa)
  function hashF(key, mod) {

    // key가 들어가는 Type 대비
    if (typeof key === "string") {

      // key값과 capa값을 나눠서 나머지 값을 구하는 법이 가장 간단한 hash함수 구현법
      return key.split("").reduce((a, c) => a + c.charCodeAt(), 0) % mod;
      // ['a', 'b', 'c'] => [97, 98, 99] => 294 => 294 % 30 => 24
    }
    // key의 type이 number일 경우
    if (typeof key === "number") {
      return key % mod;
    }
  }
  
  // 30이 capa 
  // this.data[hahs]새로운 hash가 됌
  const ht = new Hashtable(30);

  // hash함수를 어떻게 만들었는지에 따라 key가 어떻게 저장되는지 값이 바뀔 수 있음
  ht.insert("abc", "hi");
  ht.insert(31, "hi"); // 나머지 : 1
  ht.insert(61, "bye"); // 나머지 : 1
  ht.insert(83, true); // 나머지 : 23
  ht.insert(115, 135); // 나머지 : 25
  console.log(ht.search(61)); // 'bye'
  console.log(ht.search(99)); // null
  ht.update(83, false);
  ht.delete(31);
  ht;