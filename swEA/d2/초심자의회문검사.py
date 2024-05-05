test_case = int(input())
for test in range(1, test_case+1):
    input_str = input()
    possible = 0
    if input_str == input_str[::-1]:
        possible = 1
    print(f'#{test} {possible}')