from collections import Counter

test_case = int(input())
for _ in range(test_case):
    test = input()
    nums = list(map(int, input().split()))
    counter = sorted(Counter(nums).items(), key = lambda x : x[1], reverse=True)
    
    print(f'#{test} {counter[0][0]}')