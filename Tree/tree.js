// children배열에 제한없이 무한하게 Node를 추가하는 트리

class Tree {
    // root는 값을 받아오기 위해 constructor를 사용
    constructor(value) {
        this.root = new Node(value)
    }
}

// 가지 만들기
class Node {
    children = [];
    constructor(value) {
        this.value = value
    }

    // 추가. (배열을 사용하는 건 짜치니까 Node안에 추가)
    push(value) {
        // new Node()를 만들어 value를 push하여 가지치기
        this.children.push(new Node(value))
    }
}

// tree 안에 root가 있고, root 안에 children이 있음
// root도 node이기 때문에 children이 될 수 있음
const tree = new Tree(50);
tree.root.push(25)
tree.root.push(75)
tree.root.children[0].push(12)
tree.root.children[0].push(37)
tree.root.children[1].push(62)
tree.root.children[1].push(87)