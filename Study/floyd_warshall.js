// 모든 쌍 최단 경로 알고리즘으로, 
// 그래프에서 모든 정점 간의 최단 경로를 찾는 알고리즘

// 1. 그래프의 가중치를 기반으로 인접 행렬을 초기화
//  간선이 없는 경우 ∞ 로 설정, 자기 자신으로 가는 경로는 0으로 설정

// 2. 각 정점 k를 통해 다른 두 정점 i와 j 간의 경로를 업데이트
// 만약 i에서 j로 가는 경로가 i → k → j보다 짧다면, 경로를 업데이트

function floydWarshall(graph) {
    const lng = graph.length;
    const dist = Array.from({ length: lng }, () => Array(lng).fill(Infinity));

    // 1
    for (let i = 0; i < lng; i++) {
        dist[i][i] = 0; // 자기 자신으로 가는 경우 0
    }

    // 그래프의 간선 정보
    for (let i = 0; i < lng; i++) {
        for (let j = 0; j < lng; j++) {
            if (graph[i][j] !== 0) {
                dist[i][j] = graph[i][j];
            }
        }
    }

    // 플로이드-워샬 알고리즘
    for (let k = 0; k < lng; k++) {
        for (let i = 0; i < lng; i++) {
            for (let j = 0; j < lng; j++) {
                if (dist[i][j] > dist[i][k] + dist[k][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    return dist;
}
