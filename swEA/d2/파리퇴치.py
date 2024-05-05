test_case = int(input())
for test in range(1, test_case+1):
    n,m = map(int, input().split())
    matrix = [list(map(int, input().split())) for _ in range(n)]
    answer = 0
    for i in range(n):
        for j in range(n):
            answer = max(answer, sum(sum(row[j:j+m]) for row in matrix[i:i+m]))
    print(f'#{test} {answer}')