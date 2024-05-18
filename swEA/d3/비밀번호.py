for test in range(1, 11):

    n, password = input().split()
    n = int(n)
    stack = []
    for s in password:
        if stack and stack[-1] == s:
            stack.pop()
        else:
            stack.append(s)
    answer = ''.join(stack)

    print(f'#{test} {answer}')