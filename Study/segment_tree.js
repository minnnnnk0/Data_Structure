class SegmentTree {
    constructor(arr) {
        this.n = arr.length
        this.tree = new Array(4 * this.n).fill(0)
        this.init(arr, 0, this.n - 1, 1)
    }

    init(arr, start, end, node) {
        if (start === end) {
            this.tree[node] = arr[start]
            return this.tree[node]
        }
        const mid = Math.floor((start + end) / 2)
        this.tree[node] =
            this.init(arr, start, mid, node * 2) +
            this.init(arr, mid + 1, end, node * 2 + 1)
        return this.tree[node]
    }

    query(start, end, left, right, node) {

        if (right < start || end < left) return 0
        if (left <= start && end <= right) return this.tree[node]

        const mid = Math.floor((start + end) / 2)
        return (
            this.query(start, mid, left, right, node * 2) +
            this.query(mid + 1, end, left, right, node * 2 + 1)
        )
    }

    update(start, end, idx, diff, node) {

        if (idx < start || idx > end) return

        this.tree[node] += diff

        if (start !== end) {
            const mid = Math.floor((start + end) / 2)
            this.update(start, mid, idx, diff, node * 2)
            this.update(mid + 1, end, idx, diff, node * 2 + 1)
        }
    }
}


//---

class SegmentTree {
    constructor(arr) {
        this.n = arr.length
        this.tree = new Array(2 * this.n)
        this.build(arr)
    }
    build(arr) {
        for (let i = 0; i < this.n; i++) {
            this.tree[this.n + i] = arr[i]
        }
        // 리프 노드의 부모들은 구간합으로 채움
        for (let i = this.n - 1; i > 0; i--) {
            this.tree[i] = this.tree[i * 2] + this.tree[i * 2 + 1]
        }
    }
    // 구간 합 (i부터 j까지)
    query(i, j) {
        i += this.n
        j += this.n
        let sum = 0
        while (i <= j) {
            if (i % 2 === 1) { // i가 오른쪽 자식이면 해당 값을 더하고 오른쪽으로 이동
                sum += this.tree[i]
                i++
            }
            if (j % 2 === 0) { // j가 왼쪽 자식이면 해당 값을 더하고 왼쪽으로 이동
                sum += this.tree[j]
                j--
            }
            i = Math.floor(i / 2)
            j = Math.floor(j / 2)
        }
        return sum
    }
    
    // 값 업데이트
    update(idx, value) { // 인덱스 idx의 값을 value로 업데이트
        idx += this.n
        this.tree[idx] = value
        // 갱신
        while (idx > 1) {
            idx = Math.floor(idx / 2)
            this.tree[idx] = this.tree[2 * idx] + this.tree[2 * idx + 1]
        }
    }
}