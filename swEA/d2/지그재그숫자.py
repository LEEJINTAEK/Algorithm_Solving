test_case = int(input())

for test in range(1, test_case+1):
    n = int(input())
    answer = 0
    for i in range(1,n+1):
        if i % 2 == 0:
            answer -= i
        else:
            answer += i
    print(f'#{test} {answer}')