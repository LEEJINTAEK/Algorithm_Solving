test_case = int(input())
for test in range(1, test_case+1):
    n = int(input())
    nums = list(map(int, input().split()))
    num_avg = sum(nums) / n
    answer = len(list(filter(lambda x : x <= num_avg, nums)))
    print(f'#{test} {answer}')
    