test_case = int(input())
def check(puzzle, n, k):
    answer = 0
    for i in range(n):
        row_cnt = 0
        col_cnt = 0
        for j in range(n):
            if puzzle[i][j] == 1:
                row_cnt += 1
            else:
                if row_cnt == k:
                    answer += 1
                row_cnt = 0
                
            if puzzle[j][i] == 1:
                col_cnt += 1
            else:
                if col_cnt == k:
                    answer += 1
                col_cnt = 0
                
        if row_cnt == k:
            answer += 1 
        if col_cnt == k:
            answer += 1
    return answer

for test in range(1, test_case+1):
    n,k = map(int,input().split())
    puzzle = [list(map(int, input().split())) for _ in range(n)]
    print(f'#{test} {check(puzzle, n, k)}')
    