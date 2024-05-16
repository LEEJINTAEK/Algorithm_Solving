test_case = int(input())
for test in range(1, test_case + 1):
    n,l = map(int, input().split())
    arr = [list(map(int,input().split())) for _ in range(n)]
    answer = 0
    check = [0] * n

    def dfs(idx, f, c):
        if c > l:
            return
        else:
            global answer
            answer = max(answer, f)

        for next in range(idx, n):
            if check[next] == 1:
                continue
            check[next] = 1
            dfs(next, f+arr[next][0], c+arr[next][1])
            check[next] = 0

    dfs(0, 0, 0)

    print(f'#{test} {answer}')

