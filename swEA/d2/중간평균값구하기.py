test_case = int(input())
for test in range(1, test_case+1):
    nums = list(map(int, input().split()))
    max_num = max(nums)
    min_num = min(nums)
    filter_nums = list(filter(lambda x : x != max_num and x != min_num, nums))
    print(f'#{test} {round(sum(filter_nums)/len(filter_nums))}')