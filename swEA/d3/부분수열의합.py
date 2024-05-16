test_case = int(input())
for test in range(1, test_case + 1):
    n, k = map(int, input().split())
    arr = list(map(int, input().split()))
    answer = 0
    check = [0] * n

    def dfs(cur, total):
        if total > k:
            return
        if total == k:
            global answer
            answer += 1
            return

        for i in range(cur, n):
            if check[i] == 1:
                continue
                
            check[i] = 1
            dfs(i, total + arr[i])
            check[i] = 0

    dfs(0,0)

    print(f'#{test} {answer}')
