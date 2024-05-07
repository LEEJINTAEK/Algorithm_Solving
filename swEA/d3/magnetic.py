for test in range(1, 11):
    n = int(input())
    matrix = [list(map(int,input().split())) for _ in range(n)]
    cnt = 0
    for i in range(n):
        state = 0
        for j in range(n):
            if matrix[j][i] == 1:
                state = 1
            if matrix[j][i] == 2 and state == 1:
                cnt += 1
                state = 0
    print(f'#{test} {cnt}')