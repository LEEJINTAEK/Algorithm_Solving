test_case = int(input())

for test in range(1, test_case+1):
    n,m = map(int, input().split())
    answer = 'ON'
    for _ in range(n):
        if m % 2 != 1:
            answer = 'OFF'
            break
        m = m // 2

    print(f'#{test} {answer}')