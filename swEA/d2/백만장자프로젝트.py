test_case = int(input())
for test in range(1,test_case+1):
    n = int(input())
    chart = list(map(int, input().split()))
    max_price = chart[n-1]
    profit = 0
    for i in range(n-2, -1, -1):
        cur_price = chart[i]
        if cur_price < max_price:
            profit += max_price - cur_price
        if cur_price > max_price:
            max_price = cur_price
    print(f'#{test} {profit}')