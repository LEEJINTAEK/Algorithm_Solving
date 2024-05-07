test_case = int(input())
def is_palindrom(a, b):
    cnt = 0
    for n in range(a, b+1):
        num_str = str(n)
        root = n ** (1/2)
        if num_str == num_str[::-1] and root.is_integer():  
            root_int = int(root)  
            root_str = str(root_int)
            if root_str == root_str[::-1]:  
                cnt += 1
    return cnt

for test in range(1, test_case+1):
    a, b = map(int, input().split())
    print(f'#{test} {is_palindrom(a, b)}')
