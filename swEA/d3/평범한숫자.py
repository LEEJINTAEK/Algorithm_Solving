test_case = int(input())
for test in range(1, test_case + 1):
    n = int(input())
    nums = list(map(int, input().split()))
    answer = 0
    for i in range(1, n-1): 
        cur_nums = [nums[i-1], nums[i], nums[i+1]]
        max_num = max(cur_nums)
        min_num = min(cur_nums)
        if nums[i] != max_num and nums[i] != min_num:
            answer += 1
    print(f'#{test} {answer}')