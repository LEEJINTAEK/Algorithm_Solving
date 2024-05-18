test_case = int(input())
for test in range(1, test_case + 1):

    n,m = map(int,input().split())

    adj = [[] for _ in range(n+1)]
    check = [0] * (n+1)

    for _ in range(m):
        x,y = map(int, input().split())
        adj[x].append(y)
        adj[y].append(x)

    answer = 1

    def dfs(cur, cnt):
        global answer
        answer = max(answer, cnt)

        for next in adj[cur]:
            if check[next] == 1:
                continue
            check[next] = 1
            dfs(next, cnt + 1)
            check[next] = 0

    for i in range(1,n+1):
        check[i] = 1
        dfs(i, 1)
        check[i] = 0

    print(f'#{test} {answer}')