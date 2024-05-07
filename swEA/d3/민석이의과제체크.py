test_case = int(input())
for test in range(1, test_case+1):
    n,k = map(int, input().split())
    complete = list(map(int, input().split()))
    answer = ''
    for i in range(1, n+1):
        if i not in complete:
            answer += str(i) + ' '
    print(f'#{test} {answer.strip()}')