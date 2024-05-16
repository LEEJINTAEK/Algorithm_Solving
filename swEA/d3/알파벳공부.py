test_case = int(input())

for test in range(1, test_case+1):
    s = input()
    answer = 0 
    example = "abcdefghijklmnopqrstuvwxyz"
    
    for c in range(0,len(s)):
        if example[c] == s[c]:
            answer += 1
        else:
            break
    
    print(f'#{test} {answer}')