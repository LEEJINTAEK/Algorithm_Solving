test_case = int(input())
num_arr = set()
for i in range(1, 10):
    for j in range(1, 10):
        num_arr.add(i*j)

for test in range(1, test_case+1):
    n = int(input())
    answer = 'No'
    if n in num_arr:
        answer = 'Yes'
    print(f'#{test} {answer}')