## Binary Heap 이진힙

이진힙은 Complete Binary Tree를 사용한다.   
(왼쪽부터 가득 채우는 트리)   

이 **CompleteBT**의 특징은 **배열**로 표시를 할 수 있다.    
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]   

Node의 자식 Node가 무엇인지만 알고 있으면 된다 !    
(만약, 2번 Node라면 자식은 5, 6번이다.)    


*이해가 안된다면?* 공식을 기억하든지, 트리를 그려보자...!   
해당 index에 2를 곱하고 1을 더한다. (2*2+1)   
해당 index에 2를 곱하고 2를 더한다. (2*2+2)   
-> 이것이 자식이 된다.   

반대로 부모를 구하려면?   
**Math.Floor((x-1)/2)** 소수점 내림   
 
 ex,  11, 12의 부모를 구해보자   
 Math.Floor((11-1)/2) = 5    
 Math.Floor((12-1)/2) = 5   
 부모는 5   

 ---
 ---

 이진 탐색트리의 조건은 왼쪽이 작고, 오른쪽이 크다.   
 **최대 힙 = 위가 크고, 아래가 작다,**   
 **최소 힙 = 아래가 크고, 위가 작다,**   

 최대 힙의 예로 9의 숫자가 있다. 자식 Node들은 9보다 작아야한다. 각각의 자식들은 부모보다 작은 수여야한다.     
 최소 힙의 예로 1이라는 숫자가 있다. 자식 Node들은 부모 Node보다 큰 수여야한다.

 ![Heap_image](../image/Heap.png)

*7과 6이 서로 위치가 바뀌어도 최대 힙이다. 6과 7 두 Node가 서로 바뀐다는 것이 아니라, 서브트리 전체가 바뀌어도 최대 힙은 유지가 된다는 의미*   

- 이진트리는 트리가 하나만 나오지만, 최대 힙과 최소 힙은 트리 모영이 고정일 때, 여러가지 경우의 수가 나올 수 있다.
- 최대 힙을 배열로 만든다면 ? [9, 7, 6, 5, 4, 3, 2, 2, 1, 3] 위에서 아래, 왼쪽에서 오른쪽 순으로 적어주면 된다.


---

### Heap의 시간복잡도와 공간복잡도   

공간 복잡도는 배열이기 때문에 O(n)이다.   

1. **삽입, 삭제 : O(logn)**.  
항상 새로운 값을 넣어도 힙이 유지가 되어야 한다.   
유지가 된 채로 새로운 값을 넣거나 특정 값을 지워야한다.   

삭제는 항상 제일 위 root만 삭제할 수 있다.    
root를 삭제하더라도 힙이 유지되도록 알고리즘을 구현해야함...   

2. **조회 : O(n)**
예를 들어 23을 갖고자 할 때, 배열이기 떄문에 앞에서부터 뒤로 순차적으로 특정값을 찾는다.   
(가장 최악을 찾고자하는 값이 맨 마지막에 있는 경우)   

3. **특정 값 수정 : O(n)**
19를 50으로 수정하는 경우...    
찾아서 바꿔야 해서 결과적으로는 O(n)이 맞지만, 여기서 추가 작업이 필요    
50으로 바꿨을 때, 트리가 최대 힙이 되도록 만들어야 한다.   
(50과 32 이 둘을 서로 자리를 다시 바꾸는 작업)    
이러한 작업을 **Heapify**라고 한다.    

수정이 아니더라도 BST를 Heap으로 바꾸려고 할 때, 그 과정 또한 Heapify   
Heap이 아닌 트리를 Heap으로 바꾸는 시간 복잡도는 O(n)이다.    

- 특정 값 삭제 (힙에서 특정값을 삭제하는 것은 삭제라고 하지 않는다. 왜? 사용하지 않는 편)   
*힙의 삭제는 조금 특별...*    
제일 위 root만 삭제 가능한데, 만약 56을 삭제한다고 했을 때, 힙은 완전트리여야 하기 때문에 56을 삭제하고 난 뒤에서는 마지막 값인 19가 그 자리를 채움   
그 다음 Heapify 과정을 거쳐야하기 때문에 사실상 특정값을 삭제한다고 했을 때는 Heapify와 동작이 같다.   
(그래서 Heap에서는 특정값을 삭제하는 일을 굳이 하지 않음)   

- 삭제를 하면 정렬이? **힙정렬**
root를 삭제한다고 했을 때, 그 트리에서 가장 큰 수를 제거한다는 말   
삭제한 순간에 나머지 트리가 다시 힙이 되어야하기 때문에 그 다음으로 큰 숫자인 56, 56을 삭제하면 45... 이런식으로 Heap의 데이터가 없을 때까지 (트리의 갯수만큼) 삭제를 하게 되면 정렬이 된다.   
(정렬함수 안에서 remove함수를 배열에 Push하면 힙정렬)    

최대 힙은 내림차순   
최소 힙은 오름차순   

so, 힙정렬의 시간복잡도는 O(nlogn)이다.    
힙은 정렬을 하기 위해 자주 사용된다.    
(데이터 갯수만큼 삭제를 하면 정렬이 되는 자료구조)    

수정 또는 특정값을 삭제하는 경우에는 Heapify를 거침