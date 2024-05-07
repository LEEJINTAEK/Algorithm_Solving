test_case = int(input())
for test in range(1, test_case+1):
    l,u,x = map(int, input().split())
    need = 0
    if u < x:
        need = -1
    if l > x:
        need = l - x
    print(f'#{test} {need}')