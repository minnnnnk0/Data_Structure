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
