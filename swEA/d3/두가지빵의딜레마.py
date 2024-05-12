test_case = int(input())
for test in range(1, test_case+1):
    a,b,c = map(int, input().split())
    min_price = min(a,b)
    print(f'#{test} {c//min_price}')