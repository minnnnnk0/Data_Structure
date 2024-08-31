/**
 * 만약, 용량 제한이 없을 경우
 * 데이터를 무제한으로 넣을 수 있는 경우?
 */
class Hashtable {
    data = [];
    constructor(capa) {
      this.capa = capa;
    }
  
    insert(key, value) {
      this.data[key] = value;
    }
  
    search(key) {
      return this.data[key] || null;
    }
    update(key, value) {
      this.data[key] = value;
    }
    delete(key, value) {
      this.data[key] = undefined;
    }
  }
  
  // 저장할 값을 고르게 분배하여 return 하는 함수
  function hash() {
    return "";
  }
  
  // 해시테이블의 용량을 정해주지 않았을 경우
  const ht = new Hashtable();
  
  ht.insert(31, "hi");
  ht.insert(61, "bye");
  ht.insert(83, true);
  ht.insert(115, 135);
  ht.search(61); // 'bye'
  ht.search(99); // null
  ht.update(83, false);
  ht.delete(31);