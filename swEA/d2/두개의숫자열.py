test_case = int(input())
for test in range(1,test_case+1):
    n,m = map(int,input().split())
    A = list(map(int,input().split()))
    B = list(map(int,input().split()))
    x = abs(n-m)
    min_len = min(n,m)
    s = 0
    answer = float('-inf')
    while s <= x:
        sum_value = 0
        for i in range(min_len):
          if min_len == n :
            sum_value += A[i] * B[i+s]
          else : 
            sum_value += A[i+s] * B[i]
        answer = max(answer, sum_value)
        s += 1
    print(f'#{test} {answer}')
        
    