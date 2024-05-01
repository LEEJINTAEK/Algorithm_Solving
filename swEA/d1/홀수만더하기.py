T = int(input())
for test in range(T):
    print(f'#{test+1} {sum(filter(lambda x: x%2 !=0, map(int, input().split())))}')