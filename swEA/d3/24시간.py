test_case = int(input())
for test in range(1, test_case+1):
    cur, after = map(int,input().split())
    time = cur + after
    print(f'#{test} {time % 24}')