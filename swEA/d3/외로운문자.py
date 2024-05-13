test_case = int(input())
for test in range(1, test_case + 1 ):
    alpha = {}
    words = input()
    for word in words:
        if word not in alpha:
            alpha[word] = 1
        else:
            alpha[word] += 1
        
        if alpha[word] == 2:
            alpha.pop(word)
    if len(alpha) == 0:
        print(f'#{test} Good')
    else:
        answer = list(alpha.keys())
        answer.sort()
        print(f'#{test} {"".join(answer)}')
    