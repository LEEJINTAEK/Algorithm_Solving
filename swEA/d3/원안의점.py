test_case = int(input())
for test in range(1, test_case + 1):
    n = int(input())
    answer = 0
    for x in range(-n, n+1):
        for y in range(-n, n+1):
            if x**2 + y**2 <= n ** 2:
                answer +=1

    print(f'#{test} {answer}')