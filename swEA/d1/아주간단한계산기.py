a,b = map(int,input().split())
operator = ['+' ,'-', '*' ,'/' ]
for op in operator:
    if op == '+':
        print(a+b)
    if op == '-':
        print(a-b)
    if op == '*':
        print(a*b)
    if op == '/':
        print(a//b)