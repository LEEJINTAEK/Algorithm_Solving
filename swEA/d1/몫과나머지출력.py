test = int(input())
for test_case in range(1,test+1):
    a,b = map(int, input().split())
    print(f'#{test_case} {a//b} {a%b}')