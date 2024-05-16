test_case = int(input())
for test in range(1, test_case+1):
    n = int(input())
    arr = []
    for _ in range(n):
        arr.append(int(input()))

    nums_avg = int(sum(arr) / len(arr))
    diff = 0
    for num in arr:
        if nums_avg < num:
            diff += num - nums_avg
    print(f'#{test} {diff}')