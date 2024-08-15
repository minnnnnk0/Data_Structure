import { BinarySearchTree } from './Tree/binarysearchtree.js'
import { Queue } from './StackQueue/queue.js'
import { Stack } from './StackQueue/stack.js'


function bfs(tree) {
    const q = new Queue()
    // root 인큐
    q.enqueue(tree.root)

    while (q.length > 0) {
        const node = q.dequeue()
        console.log(node.value)

        if (node.left) {
            q.enqueue(node.left)
        }
        if (node.right) {
            q.enqueue(node.right)
        }
    }
}

// preOrder와 결과값이 같음
function dfs(tree) {
    const stack = new Stack()
    stack.push(tree.root)

    while (stack.length > 0) {
        const node = stack.pop()
        console.log(node.value)

        if (node.right) {
            stack.push(node.right)
        }

        if (node.left) {
            stack.push(node.left)
        }
    }
}

// --------------------------------------------

function preOrder(node) {
    if (!node) return
    console.log(node.value)
    preOrder(node.left)
    preOrder(node.right)
}

function inOrder(node) {
    if (!node) return
    inOrder(node.left)
    console.log(node.value)
    inOrder(node.right)
}

function postOrder(node) {
    if (!node) return
    postOrder(node.left)
    postOrder(node.right)
    console.log(node.value)
}

const bst = new BinarySearchTree()

bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(7);
// bfs(bst);
// dfs(bst);
// preOrder(bst.root);
// inOrder(bst.root);
// postOrder(bst.root);
// bst;
