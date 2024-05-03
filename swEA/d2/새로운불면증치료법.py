test_case = int(input())
for test in range(1, test_case+1):
    n = int(input())
    nums = set()
    cur_value = n 
    while len(nums) < 10:
        nums.update(str(cur_value))
        cur_value += n 
    print(f'#{test} {cur_value-n}')