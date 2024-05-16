test_case = int(input())
for test in range(1,test_case+1):
    n = int(input())
    nums = list(map(int, input().split()))
    dp = [1] * n
    for i in range(1, n):
        for j in range(i):
            if nums[i] > nums[j]:
                dp[i] = max(dp[i], dp[j] + 1)
                
    print(f'#{test} {max(dp)}')
