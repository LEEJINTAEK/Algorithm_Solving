test_case = int(input())
aeiou = 'aeiou'
for test in range(1,test_case+1):
    input_str = input()
    answer = ''
    for char in input_str:
        if char not in aeiou:
            answer += char
    print(f'#{test} {answer}')