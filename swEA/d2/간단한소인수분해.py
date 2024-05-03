test_case = int(input())
num_list = [2,3,5,7,11]
for test in range(1,test_case+1):
    num = int(input())
    answer = []
    for divisor in num_list:
        cnt = 0
        while True:
            if num % divisor == 0:
                num = num // divisor
                cnt += 1
            else: 
                break
        answer.append(cnt)
    print(f'#{test} {" ".join(map(str, answer))}')