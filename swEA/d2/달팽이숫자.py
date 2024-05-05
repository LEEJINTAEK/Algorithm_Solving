test_case = int(input())
for test in range(1, test_case+1):
    n = int(input())
    snail = [[0] * n for _ in range(n)]
    up,down,left,right = 0, n-1, 0, n-1
    num = 1
    while num <= n*n:
        #오른쪽
        for i in range(left, right+1):
            snail[up][i] = num
            num+=1
        up += 1
        
        #아래 
        for i in range(up, down+1):
            snail[i][right] =num
            num += 1
        right -= 1
        
        #왼쪽
        for i in range(right, left-1, -1):
            snail[down][i] = num
            num += 1
        down -= 1
        
        #위
        for i in range(down, up-1, -1):
            snail[i][left] = num
            num += 1
        left += 1
        
    print(f'#{test}')
    for row in snail:
        print(' '.join(map(str, row)))