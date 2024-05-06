test_case = int(input())
for test in range(1, test_case+1):
    n = int(input())
    answer_str = ''
    tmp_str = ''
    total = 0
    for _ in range(n):
        alpha, cnt = input().split()
        tmp_str += alpha * int(cnt) 
    
    for i in range(0,len(tmp_str), 10):
        answer_str += tmp_str[i : i+10] +'\n'
    print(f'#{test}')
    print(f'{answer_str.strip()}')