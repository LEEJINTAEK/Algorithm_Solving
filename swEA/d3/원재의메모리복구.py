test_case = int(input())
for test in range(1, test_case+1):
    memory = input()
    current = '0'
    cnt = 0
    for bit in memory:
        if bit != current:
            cnt +=1 
            current = bit
    print(f'#{test} {cnt}')