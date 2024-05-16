test_case = int(input())
for test in range(1, test_case + 1):
    d,a,b,f = map(int, input().split())

    print(f'#{test} {format(f*(d/(a+b)),".6f")}')
