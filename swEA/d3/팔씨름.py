from collections import Counter 
test_case = int(input())
for test in range(1, test_case+1):
    s = Counter(input())
    answer = 'NO'
    if s['x'] < 8:
        answer = 'YES'
    print(f'#{test} {answer}')