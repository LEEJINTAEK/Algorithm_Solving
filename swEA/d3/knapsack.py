test_case = int(input())
for test in range(1, test_case + 1):
    N, K = map(int, input().split())
    items = [tuple(map(int, input().split())) for _ in range(N)]
    dp = [[0] * (K + 1) for _ in range(N + 1)]

    # 동적 프로그래밍 실행
    for i in range(1, N + 1):
        vi, ci = items[i - 1]  # i번 물건의 부피와 가치
        for w in range(1, K + 1):
            if vi <= w:  # 현재 물건을 가방에 넣을 수 있는 경우
                dp[i][w] = max(dp[i - 1][w], dp[i - 1][w - vi] + ci)
            else:  # 물건을 넣을 수 없는 경우
                dp[i][w] = dp[i - 1][w]

    print(f'#{test} {dp[N][K]}')